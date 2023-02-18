import {Bonus, Cap, CraftAbleBonus} from '.';

const cap_10: Cap = {cap_add: 0, cap_mult: 0.2};
const cap_11: Cap = {cap_add: 1, cap_mult: 0.2};
const cap_25: Cap = {cap_add: 0, cap_mult: 0.5};
const cap_26: Cap = {cap_add: 1, cap_mult: 0.5};
const cap_50: Cap = {cap_add: 0, cap_mult: 1};

export enum Types {
  ArmorAbsorption = 149,
  HealthRegen,
  PowerRegen,
  EnduranceRegen,
  SpellRange,
  MeleeSpeed = 155,
  AllMagicSkills = 163,
  AllMeleeSkills = 164,
  AllFocusLevel = 165,
  AllDualWieldSkills = 167,
  AllArcherySkills = 168,
  MeleeDamage = 173,
  RangedDamage = 174, // <- Never expecting to see this since we convert those to Spell Damage
  FumbleChance,
  ArcherySpeed = 188, // <-
  BuffBonus = 190,
  CastSpeed,
  DebuffBonus = 193,
  Fatigue,
  HealBonus,
  PowerPool = 196,
  ResistPierce = 197,
  SpellDamage,
  SpellDuration,
  StyleDamage = 200,
  SpellLevel = 218,
  ArcaneSiphon = 254,
}

export const MeleeDamage = new Bonus(
  'Melee Damage',
  Types.MeleeDamage,
  cap_10,
  5.0
);

export const MeleeSpeed = new Bonus(
  'Melee Speed',
  Types.MeleeSpeed,
  cap_10,
  5.0
);

export const StyleDamage = new Bonus(
  'Style Damage',
  Types.StyleDamage,
  cap_10,
  5.0
);

export const SpellDamage = new Bonus(
  'Spell Damage',
  Types.SpellDamage,
  cap_10,
  5.0
);

export const CastSpeed = new Bonus('Cast Speed', Types.CastSpeed, cap_10, 5.0);

export const SpellRange = new Bonus(
  'Spell Range',
  Types.SpellRange,
  cap_10,
  5.0
);

export const ResistPierce = new Bonus(
  'Resist Pierce',
  Types.ResistPierce,
  cap_10,
  5.0
);

export const BuffBonus = new Bonus('Buff Bonus', Types.BuffBonus, cap_25, 2.0);

export const HealBonus = new Bonus('Heal Bonus', Types.HealBonus, cap_25, 2.0);

export const DebuffBonus = new Bonus(
  'Debuff Bonus',
  Types.DebuffBonus,
  cap_25,
  2.0
);

export const SpellDuration = new Bonus(
  'Spell Duration',
  Types.SpellDuration,
  cap_25,
  2.0
);

export const ArcaneSiphon = new Bonus(
  'Arcane Siphon',
  Types.ArcaneSiphon,
  cap_25,
  2.0
);

export const PowerPool = new Bonus('Power Pool', Types.PowerPool, cap_26, 2.0);

export const Fatigue = new Bonus('Fatigue', Types.Fatigue, cap_25, 2.0);

export const HealthRegen = new Bonus(
  'Health Regen',
  Types.HealthRegen,
  cap_25,
  0
);

export const PowerRegen = new Bonus('Power Regen', Types.PowerRegen, cap_25, 0);

export const EnduranceRegen = new Bonus(
  'Endurance Regen',
  Types.EnduranceRegen,
  cap_25,
  0
);

export const ArmorAbsorption = new Bonus(
  'Armour Absorption',
  Types.ArmorAbsorption,
  cap_10,
  0
);

export const AllMagicSkills = new CraftAbleBonus(
  'All Magic Skills',
  Types.AllMagicSkills,
  cap_11,
  [1],
  {imbue_add: 0, imbue_mult: 1},
  10.0
);

export const AllMeleeSkills = new CraftAbleBonus(
  'All Melee Skills',
  Types.AllMeleeSkills,
  cap_11,
  [1],
  {imbue_add: 0, imbue_mult: 1},
  10.0
);

export const AllArcherySkills = new Bonus(
  'All Archery Skills',
  Types.AllArcherySkills,
  cap_11,
  10.0
);

export const AllDualWieldSkills = new Bonus(
  'All Dual Wield Skills',
  Types.AllDualWieldSkills,
  cap_11,
  10.0
);

export const AllFocusLevel = new Bonus(
  'All Focus Level',
  Types.AllFocusLevel,
  cap_50,
  10.0
);

export const FumbleChance = new Bonus(
  'Fumble Chance',
  Types.FumbleChance,
  cap_10,
  0
);

export const SpellLevel = new Bonus('Spell Level', Types.SpellLevel, cap_10, 0);
