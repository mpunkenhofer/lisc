-- Cleanup existing tables and data
DROP TABLE IF EXISTS Realm, Class, Slot, Bonus, Items

-- Create all tables, incl constraits

CREATE TABLE realm(
    realm_pk INTEGER PRIMARY KEY,
    name VARCHAR(10) NOT NULL
);

CREATE TABLE class(
    class_pk INTEGER PRIMARY KEY,
    name VARCHAR(15) NOT NULL
);

CREATE TABLE slot(
    slot_pk INTEGER PRIMARY KEY,
    Name VARCHAR(20) NOT NULL
);

CREATE TABLE bonus(
    bonus_pk INTEGER PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    type VARCHAR(20) NOT NULL
);

CREATE TABLE armor_type(
    armor_type_pk INTEGER PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE weapon_type(
    weapon_type_pk INTEGER PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLES items(
    items_pk INTEGER PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    quality INTEGER,
    bonus INTEGER,
    utility INTEGER,
    single_skill_utility INTEGER,
    realm_fk REFERENCES realm(realm_pk),
    slot_fk REFERENCES slot(slot_fk)
);

CREATE TABLE item_bonus(
    item_fk REFERENCES item(items_pk),
    bonus_fk REFERENCES bonus(bonus_pk),
    value INTEGER
);

CREATE TABLE item_source(
    item_source_pk INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE item_class(
    item_fk REFERENCES item(items_pk)
    class_fk REFERENCES class(class_pk)
);

CREATE TABLE item_slot(
    item_fk REFERENCES item(items_pk)
    slot_fk REFERENCES slot(slot_pk)
);