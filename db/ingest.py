# Creates a database from daoc chat.logs

import os
import glob
import sqlite3
import logging

LOGS_PATH = 'db/logs/'
SCHEMA_FILE = 'db/create_schema.sql'
OUTPUT_DB = 'db/items.sqlite3'

def main():
    # Set log lvl to info
    logging.basicConfig(level=logging.INFO)

    logs = glob.glob(f'{LOGS_PATH}*.log')

    con = sqlite3.connect(OUTPUT_DB)
    cur = con.cursor()

    with open(SCHEMA_FILE) as f:
        logging.info(f'Creating tables from schema file: {SCHEMA_FILE}.')
        cur.executescript(f.read())

    # Save & close connection
    con.commit()
    con.close()

    logging.info('Ingesting complete.')

if __name__ == "__main__":
    main()
    