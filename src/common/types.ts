import {Bonus} from '../constants/bonuses';
import {Class} from '../constants/classes';

export enum Realm {
  Albion = 'Albion',
  Hibernia = 'Hibernia',
  Midgard = 'Midgard',
  All = 'All',
}

export enum Slot {
  Body,
  Arms,
  Legs,
  Head,
  Hands,
  Feet,
  Necklace,
  Cloak,
  Belt,
  Jewel,
  Ring,
  Bracer,
  LeftHand,
  RightHand,
  TwoHanded,
  Ranged,
}

export enum ArmorType {
  Cloth = 'Cloth',
  Leather = 'Leather',
  Studded = 'Studded',
  Reinforced = 'Reinforced',
  Chain = 'Chain',
  Scale = 'Scale',
  Plate = 'Plate',
  //Unspecified = 'Unspecified'
}

export enum WeaponType {
  Shield,
  Crush,
  Slash,
  Thrust,
  Short_Bow,
  Crossbow,
  Blades,
  Blunt,
  Piercing,
  Axe,
  Hammer,
  Sword,
}

export enum ShieldSize {
  Small,
  Medium,
  Large,
}

export type Options = {
  a: boolean;
};

export type Item = {
  name: string;
  slot: Slot;
  realm: Realm;
  classes: Class[];
  bonuses: Bonus[];
  quality: number;
  utility: number;
  sutility?: number;
  af?: number;
  dps?: number;
  speed?: number;
  source?: string;
  armorType?: ArmorType;
  weaponType?: WeaponType;
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
