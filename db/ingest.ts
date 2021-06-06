import {glob} from 'glob';
import * as fs from 'fs';
import {parseLog} from '../src/common/chatlog';
import Database from 'better-sqlite3';
import {Realm} from '../src/common/types';

const db = new Database('db/items.sqlite3');

// create db from schema
const sql = fs.readFileSync('db/create_schema.sql', 'utf8');
db.exec(sql);

const realms = new Map([
  ['alb', Realm.Albion],
  ['hib', Realm.Hibernia],
  ['mid', Realm.Midgard],
  ['all', Realm.All],
]);

// read log files > parse log files -> items > insert items into db
glob('db/logs/*.log', (err, files) => {
  if (err) {
    console.error(err);
  } else {
    for (const fname of files) {
      const match = /(alb|hib|mid|all)_([^.0-9]+)/.exec(fname);

      if (match) {
        const realm = realms.get(match[1]);
        const source = match[2].replace(/_/g, ' ').trim();

        fs.readFile(fname, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
          } else {
            const items = parseLog(data, {realm, source});
            console.log(items.length);
          }
        });
      } else {
        throw new Error(
          'Invalid log filename format. Expected: realm_some_npc.log\nValid examples: alb_cear_sidi_1.log hib_frontier_zones.log'
        );
      }
    }
  }
});

db.close();
