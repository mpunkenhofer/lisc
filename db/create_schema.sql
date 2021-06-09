-- Pragmas
PRAGMA foreign_keys = ON;

-- Create all tables, incl constraits
DROP TABLE IF EXISTS realm;
CREATE TABLE realm(
    realm_pk INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS class;
CREATE TABLE class(
    class_pk INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS slot;
CREATE TABLE slot(
    slot_pk INTEGER PRIMARY KEY,
    Name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS bonus;
CREATE TABLE bonus(
    bonus_pk INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL
);

DROP TABLE IF EXISTS armor_type;
CREATE TABLE armor_type(
    armor_type_pk INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS weapon_type;
CREATE TABLE weapon_type(
    weapon_type_pk INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

DROP TABLE IF EXISTS items;
CREATE TABLE items(
    items_pk INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    quality INTEGER,
    utility INTEGER,
    sutility INTEGER,
    af INTEGER,
    absorb INTEGER,
    dps REAL,
    speed REAL,
    realm_fk REFERENCES realm(realm_pk),
    slot_fk REFERENCES slot(slot_fk),
    armor_type_fk REFERENCES armor_type(armor_type_pk),
    weapon_type_fk REFERENCES weapon_type(weapon_type_pk),
    item_source_fk REFERENCES item_source(item_source_pk)
);

DROP TABLE IF EXISTS item_slot;
CREATE TABLE item_slot(
    item_fk REFERENCES item(items_pk),
    slot_fk REFERENCES slot(slot_pk)
);

DROP TABLE IF EXISTS item_bonus;
CREATE TABLE item_bonus(
    item_fk REFERENCES item(items_pk),
    bonus_fk REFERENCES bonus(bonus_pk),
    value INTEGER
);

DROP TABLE IF EXISTS item_class;
CREATE TABLE item_class(
    item_fk REFERENCES item(items_pk),
    class_fk REFERENCES class(class_pk)
);

DROP TABLE IF EXISTS item_source;
CREATE TABLE item_source(
    item_source_pk INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);