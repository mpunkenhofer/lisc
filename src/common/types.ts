import { Bonus } from "../constants/bonuses";
import { Class } from "../constants/classes";

export enum Realm {
  Albion = 'Albion',
  Hibernia = 'Hibernia',
  Midgard = 'Midgard'
}

export enum Slot {
  Torso,
  Arms,
  Legs,
  Head,
  Hands,
  Feet,
  Necklace,
  Cloak,
  Belt,
  Gem,
  LeftRing,
  RightRing,
  LeftBracer,
  RightBracer
}

export enum Stat {
  Strength,
  Dexterity,
  Constitution,
  Quickness,
  Piety,
  Empathy,
  Intelligence,
  Charisma,
  Acuity,
  Hitpoints,
}

export enum ArmorType {
  Cloth,
  Leather,
  Studded,
  Chain,
  Plate,
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
}

export type Item = {
  name: string;
  slot: Slot;
  classes: Class[];
  bonuses: Bonus[];
}

export interface Template {
  character_name: string;
  realm: Realm;
  class: Class;
  torso: Item;
  arms: Item;
  legs: Item;
  head: Item;
  hands: Item;
  boots: Item;
  necklace: Item;
  cloak: Item;
  gem: Item;
  belt: Item;
  left_ring: Item;
  right_ring: Item;
  left_bracer: Item;
  right_bracer: Item;
  right_hand: Item;
  left_hand: Item;
  two_hand: Item;
  ranged: Item;
}