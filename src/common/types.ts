import {Bonus} from '../bonuses';
import {Class} from '../constants/classes';

export interface Dictionary<T> {
  [id: number]: T | undefined;
}

export enum Realm {
  All = 'All',
  Albion = 'Albion',
  Midgard = 'Midgard',
  Hibernia = 'Hibernia',
}

export enum Slot {
  Chest = 'Chest',
  Arms = 'Arms',
  Legs = 'Legs',
  Head = 'Head',
  Hands = 'Hands',
  Feet = 'Feet',
  Necklace = 'Necklace',
  Cloak = 'Cloak',
  Belt = 'Belt',
  Jewel = 'Jewel',
  Ring = 'Ring',
  Bracer = 'Bracer',
  LeftHand = 'Left Hand',
  RightHand = 'Right Hand',
  TwoHanded = 'Two Handed',
  Ranged = 'Ranged',
  Mythirian = 'Mythirian',
  Unspecified = 'Unspecified',
}

export enum ArmorType {
  Cloth = 'Cloth',
  Leather = 'Leather',
  Studded = 'Studded',
  Reinforced = 'Reinforced',
  Chain = 'Chain',
  Scale = 'Scale',
  Plate = 'Plate',
  Unspecified = 'Unspecified',
}

export enum WeaponType {
  Crush = 'Crush',
  Slash = 'Slash',
  Thrust = 'Thrust',
  TwoHanded = 'TwoHanded',
  Polearm = 'Polearm',
  Staff = 'Staff',
  Longbow = 'Longbow',
  Crossbow = 'Crossbow',
  Sword = 'Sword',
  Hammer = 'Hammer',
  Axe = 'Axe',
  Spear = 'Spear',
  CompositeBow = 'Composite Bow',
  LeftAxe = 'Left Axe',
  RecursiveBow = 'Recursive Bow',
  Blade = 'Blade',
  Blunt = 'Blunt',
  Piercing = 'Piercing',
  LargeWeapons = 'Large Weapons',
  CelticSpear = 'Celtic Spear',
  Flexible = 'Flexible',
  HandToHand = 'HandToHand',
  Scythe = 'Scythe',
  FistWraps = 'Fist Wraps',
  MaulerStaff = 'Mauler Staff',
  ShortBow = 'ShortBow',
  Shield = 'Shield',
  Instrument = 'Instrument',
  Unspecified = 'Unspecified',
}

export enum ShieldSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export type Options = {
  a: boolean;
};

export type Item = {
  name: string;
  slot: Slot;
  realm: Realm;
  classes: Class[];
  bonuses: [Bonus, number][];
  quality: number;
  utility: number;
  sutility: number | null;
  source: string | null;
  af: number | null;
  abs: number | null;
  dps: number | null;
  speed: number | null;
  armor_type: ArmorType;
  weapon_type: WeaponType;
};

export interface Template {
  character_name: string;
  // realm: Realm;
  // class: Class;
  // torso: Item;
  // arms: Item;
  // legs: Item;
  // head: Item;
  // hands: Item;
  // boots: Item;
  // necklace: Item;
  // cloak: Item;
  // gem: Item;
  // belt: Item;
  // left_ring: Item;
  // right_ring: Item;
  // left_bracer: Item;
  // right_bracer: Item;
  // right_hand: Item;
  // left_hand: Item;
  // two_hand: Item;
  // ranged: Item;
}
