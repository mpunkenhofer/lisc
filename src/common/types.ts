import {Bonus} from '../constants/bonuses';
import {Class} from '../constants/classes';

export enum Realm {
  Albion = 'Albion',
  Hibernia = 'Hibernia',
  Midgard = 'Midgard',
  All = 'All',
}

export enum Slot {
  Body = 'Body',
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
  LeftHand = 'LeftHand',
  RightHand = 'RightHand',
  TwoHanded = 'TwoHanded',
  Ranged = 'Ranged',
  Unspecified = 'Unspecified',
}

export enum BonusType {
  Stat = 'Stat',
  Resist = 'Resist',
  Skill = 'Skill',
  Focus = 'Focus',
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
  SmallShield = 'SmallShield',
  MediumShield = 'MediumShield',
  LargeShield = 'LargeShield',
  Crush = 'Crush',
  Slash = 'Slash',
  Thrust = 'Thrust',
  Short_Bow = 'Short_Bow',
  Crossbow = 'Crossbow',
  Blades = 'Blades',
  Blunt = 'Blunt',
  Piercing = 'Piercing',
  Axe = 'Axe',
  Hammer = 'Hammer',
  Sword = 'Sword',
  Unspecified = 'Unspecified',
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
