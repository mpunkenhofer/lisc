export enum Realm {
  Albion,
  Midgard,
  Hibernia,
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
  Ring,
  Bracer,
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

export type Template = {
  name: string;
}