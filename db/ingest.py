# Creates a database from daoc chat.logs

import os
import re
import glob
import sqlite3
import logging
import constants

LOGS_PATH = 'db/logs/'
SCHEMA_FILE = 'db/create_schema.sql'
OUTPUT_DB = 'db/items.sqlite3'


class ItemParseError(Exception):
    pass


def init(cur: sqlite3.Cursor):
    cur.executemany('insert into realm values (?, ?)',
                    constants.REALMS.items())
    cur.executemany('insert into class values (?, ?)',
                    constants.CLASSES.items())
    cur.executemany('insert into slot values (?, ?)', constants.SLOTS.items())
    cur.executemany('insert into armor_type values (?, ?)',
                    constants.ARMOR_TYPES.items())
    cur.executemany('insert into weapon_type values (?, ?)',
                    constants.WEAPON_TYPES.items())


def invert_dict(d: dict):
    return {v: k for k, v in d.items()}

def parse_name(item):
    m = re.search(r'<Begin Info: ([^>]+)>', item)

    if m:
        return m.group(1)
    else:
        raise ItemParseError('Error parsing item name:\n' + item)

def parse_quality(item):
    m = re.search(r'- (\d+)% Quality', item)

    return int(m.group(1)) if m else -1

def parse_af(item):
    m = re.search(r'- (\d+) Base Factor', item)

    return int(m.group(1)) if m else -1

def parse_dps(item):
    m = re.search(r'- ([+-]?([0-9]*[.])?[0-9]+) Base DPS', item)

    return float(m.group(1)) if m else -1

def parse_speed(item):
    m = re.search(r'- ([+-]?([0-9]*[.])?[0-9]+) Weapon Speed', item)

    return float(m.group(1)) if m else -1

def parse_abs(item):
    m = re.search(r'- (\d+)% Absorption', item)

    return int(m.group(1)) if m else -1

def parse_utility(item):
    m = re.search(r'Total Utility: (\d+)', item)

    return int(m.group(1)) if m else -1

def parse_single_skill_utility(item):
    m = re.search(r'Single Skill Utility: (\d+)', item)

    return int(m.group(1)) if m else -1

def parse_bonuses(item):
    matches = re.finditer(r'(((\w+\s)+)?\w+): ([+-]?\d+) (pts|lvls|%)', item)

    bonuses = []

    for m in matches:
        bonus = m.group(1)
        value = int(m.group(4))
        bonuses.append((bonus, value))

    return bonuses


def parse_logs(logs):
    realm_dict = {'alb': 'Albion', 'hib': 'Hibernia', 'mid': 'Midgard'}

    items = {}

    for log in logs:
        with open(log) as log_file:
            log_name = os.path.basename(log)
            m = re.match(r'(alb|hib|mid)_([^.0-9]+)', log_name)
            if m:
                realm = realm_dict[m.group(1)]
                npc = re.sub('_', ' ', m.group(2)).strip()

            else:
                raise RuntimeError(
                    'Invalid log filename format. Expected: realm_some_npc.log\nValid examples: alb_cear_sidi_1.log hib_frontier_zones.log')

            matches = re.finditer(r'<Begin Info:[^>]+>[^<]+?<End Info>', log_file.read(), re.MULTILINE)
            if matches:
                for match in matches:
                    current_item = {}
                    # remove time stamp
                    item = re.sub(r'\[\d+:\d+:\d+\] *', '', match.group(0))

                    name = parse_name(item)

                    if name in items:
                        items[name]['realm'] = 'All'
                        continue
                    else:
                        current_item['realm'] = realm
                        current_item['npc'] = npc
                    
                    current_item['quality'] = parse_quality(item)
                    current_item['af'] = parse_af(item)
                    current_item['abs'] = parse_abs(item)
                    current_item['dps'] = parse_dps(item)
                    current_item['speed'] = parse_speed(item)
                    current_item['util'] = parse_utility(item)
                    current_item['single_skill_util'] = parse_single_skill_utility(item)
                    current_item['bonuses'] = parse_bonuses(item)

                    items[name] = current_item

            else:
                raise RuntimeError(f'Could not find items in log file {log_name}.')

    return items

def insert_items(cur: sqlite3.Cursor, items: dict):
    realm_lookup = invert_dict(constants.REALMS)
    class_lookup = invert_dict(constants.CLASSES)
    slot_lookup = invert_dict(constants.SLOTS)
    armor_type_lookup = invert_dict(constants.ARMOR_TYPES)
    weapon_type_lookup = invert_dict(constants.WEAPON_TYPES)

    pass

def main():
    # Set log lvl to info
    logging.basicConfig(level=logging.INFO)

    logs = glob.glob(f'{LOGS_PATH}*.log')

    con = sqlite3.connect(OUTPUT_DB)
    cur = con.cursor()

    with open(SCHEMA_FILE) as f:
        logging.info(f'Creating tables from schema file: {SCHEMA_FILE}.')
        cur.executescript(f.read())

    init(cur)
    
    items = parse_logs(logs)
    insert_items(cur, items)

    # Save & close connection
    con.commit()
    con.close()

    logging.info('Ingesting complete.')


if __name__ == "__main__":
    main()
