// import {glob} from 'glob';
// import * as fs from 'fs';
// import {parseLog} from '../src/common/chatlog';
// import Database from 'better-sqlite3';
// import {ArmorType, Item, Realm, Slot, WeaponType} from '../src/common/types';
// import * as Stats from './../src/constants/bonuses/stat';
// import * as Resists from './../src/constants/bonuses/resistance';
// import * as Focuses from './../src/constants/bonuses/focus';
// import * as Skills from './../src/constants/bonuses/skill';
// import * as Classes from './../src/constants/classes';
// import {Class} from './../src/constants/classes';
// import {Bonus} from '../src/constants/bonuses';

// const capitalize = (s: string): string => {
//   const words = s.split(' ');

//   return words
//     .map(w => w.charAt(0).toLocaleUpperCase() + w.slice(1))
//     .join(' ')
//     .trim();
// };

// const filenames = glob.sync('db/logs/*.log');

// if (filenames.length > 0) {
//   console.log(`Processing ${filenames.length} log files... `);

//   const db = new Database('db/items.sqlite3');

//   // create db from schema
//   const sql = fs.readFileSync('db/create_schema.sql', 'utf8');
//   db.exec(sql);

//   const insertMany = db.transaction(
//     <T>(items: Array<T>, statement: Database.Statement) => {
//       if (items.length > 0) {
//         let key = 0;
//         const lookup = new Map<T, Number>();

//         for (const item of items) {
//           statement.run(key, item);
//           lookup.set(item, key);
//           key++;
//         }

//         return lookup;
//       }
//       return new Map();
//     }
//   );

//   const insertSource = db.transaction((source: string) => {
//     const src_stmt = db.prepare('insert into item_source values (NULL, ?)');
//     const info = src_stmt.run(source);
//     return info.lastInsertRowid;
//   });

//   const insertItems = db.transaction(
//     (
//       items: Item[],
//       realm_lookup: Map<Realm, Number>,
//       slot_lookup: Map<Slot, Number>,
//       class_lookup: Map<Class, Number>,
//       bonus_lookup: Map<Bonus, Number>,
//       armor_lookup: Map<ArmorType, Number>,
//       weapon_lookup: Map<WeaponType, Number>,
//       source_lookup: Map<string, Number>
//     ) => {
//       const item_stmt = db.prepare(
//         'insert into items values (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
//       );
//       const slot_stmt = db.prepare('insert into item_slot values (?, ?)');
//       const bonus_stmt = db.prepare('insert into item_bonus values (?, ?, ?)');
//       const class_stmt = db.prepare('insert into item_class values (?, ?)');

//       for (const item of items) {
//         const realm_fk = realm_lookup.get(item.realm);
//         const slot_fk = slot_lookup.get(item.slot);
//         const armor_type_fk = armor_lookup.get(item.armor_type);
//         const weapon_type_fk = weapon_lookup.get(item.weapon_type);
//         const item_source_fk = item.source
//           ? source_lookup.get(item.source)
//           : null;

//         const info = item_stmt.run(
//           item.name,
//           item.quality,
//           item.utility,
//           item.sutility,
//           item.af,
//           item.abs,
//           item.dps,
//           item.speed,
//           realm_fk,
//           slot_fk,
//           armor_type_fk,
//           weapon_type_fk,
//           item_source_fk
//         );

//         const item_id = info.lastInsertRowid;

//         slot_stmt.run(item_id, slot_fk);

//         for (const [bonus, value] of item.bonuses) {
//           const bonus_fk = bonus_lookup.get(bonus);
//           if (bonus_fk !== undefined) {
//             bonus_stmt.run(item_id, bonus_fk, value);
//           } else {
//             console.error(`Failed to lookup bonus FK. ${bonus}: ${value}`);
//           }
//         }

//         for (const cls of item.classes) {
//           const class_fk = class_lookup.get(cls);
//           if (class_fk !== undefined) {
//             class_stmt.run(item_id, class_fk);
//           } else {
//             console.error(
//               `Failed to lookup class FK. item: ${item.name}, class; ${cls}`
//             );
//           }
//         }
//       }
//     }
//   );

//   // init certain tables
//   const realm_lookup = insertMany(
//     Object.values(Realm),
//     db.prepare('insert into realm values (?, ?)')
//   );

//   const class_lookup = insertMany(
//     Object.values(Classes),
//     db.prepare('insert into class (class_pk, name) values (?, @name)')
//   );

//   const slot_lookup = insertMany(
//     Object.values(Slot),
//     db.prepare('insert into slot values (?, ?)')
//   );

//   const armor_lookup = insertMany(
//     Object.values(ArmorType),
//     db.prepare('insert into armor_type values (?, ?)')
//   );

//   const weapon_lookup = insertMany(
//     Object.values(WeaponType),
//     db.prepare('insert into weapon_type values (?, ?)')
//   );

//   const bonus_lookup = insertMany(
//     [
//       ...Object.values(Stats),
//       ...Object.values(Resists),
//       ...Object.values(Skills),
//       ...Object.values(Focuses),
//     ],
//     db.prepare(
//       'insert into bonus (bonus_pk, name, type) values (?, @name, @type)'
//     )
//   );

//   const filename_realms = new Map([
//     ['alb', Realm.Albion],
//     ['hib', Realm.Hibernia],
//     ['mid', Realm.Midgard],
//     ['all', Realm.All],
//   ]);

//   let successes = 0,
//     fails = 0;

//   const source_lookup = new Map<string, Number>();

//   for (const fname of filenames) {
//     const match = /(alb|hib|mid|all)_(.+)\.log/.exec(fname.toLowerCase());

//     if (match) {
//       const realm = filename_realms.get(match[1]);
//       const source = capitalize(match[2].replace(/_/g, ' ').trim());

//       if (source_lookup.get(source) === undefined) {
//         const source_fk = Number(insertSource(source));
//         source_lookup.set(source, source_fk);
//       }

//       const data = fs.readFileSync(fname, 'utf8');

//       const [s_items, f_items] = parseLog(data, {realm, source});

//       successes += s_items.length;
//       fails += f_items.length;

//       insertItems(
//         s_items,
//         realm_lookup,
//         slot_lookup,
//         class_lookup,
//         bonus_lookup,
//         armor_lookup,
//         weapon_lookup,
//         source_lookup
//       );
//     } else {
//       throw new Error(
//         'Invalid log filename format. Expected: realm_some_npc.log\nValid examples: alb_cear_sidi_1.log hib_frontier_zones.log'
//       );
//     }
//   }

//   console.log(
//     `Created Database with ${successes} items of a total of ${
//       successes + fails
//     } parsed. (${((successes / (successes + fails)) * 100).toFixed(2)}%)`
//   );
//   db.close();
// }
