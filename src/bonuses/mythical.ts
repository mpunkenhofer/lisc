import {Bonus, Cap} from '.';

const cap_10: Cap = {cap_add: 0, cap_mult: 0.2};
const cap_50: Cap = {cap_add: 0, cap_mult: 1};
const cap_100: Cap = {cap_add: 0, cap_mult: 2};

export enum Types {
  EvadeChance = 169,
  BlockChance,
  ParryChance,
  FatigueConsumption,
  MesmerizeReduction = 176,
  StunReduction,
  SnareReduction,
  DPS = 230,
  MagicAbsorption = 231,
  CriticalHealChance = 232,
  SafeFall = 233,
  Encumberance = 234,
  Coin = 235,
  BountyPoints = 247,
  StyleAbsorb = 252,
  RealmPoints,
}

export const EvadeChance = new Bonus(
  'Evade Chance',
  Types.EvadeChance,
  cap_10,
  0
);

export const BlockChance = new Bonus(
  'Block Chance',
  Types.BlockChance,
  cap_10,
  0
);

export const ParryChance = new Bonus(
  'Parry Chance',
  Types.ParryChance,
  cap_10,
  0
);

export const FatigueConsumption = new Bonus(
  'Fatigue Consumption',
  Types.FatigueConsumption,
  cap_10,
  0
);

export const MesmerizeReduction = new Bonus(
  'Mesmerize Reduction',
  Types.MesmerizeReduction,
  cap_10,
  0
);

export const StunReduction = new Bonus(
  'Stun Reduction',
  Types.StunReduction,
  cap_10,
  0
);

export const SnareReduction = new Bonus(
  'Snare Reduction',
  Types.SnareReduction,
  cap_10,
  0
);

export const DPS = new Bonus('DPS', Types.DPS, cap_10, 0);

export const MagicAbsorption = new Bonus(
  'Magic Absorption',
  Types.MagicAbsorption,
  cap_10,
  0
);

export const CriticalHealChance = new Bonus(
  'Critical Heal Chance',
  Types.CriticalHealChance,
  cap_10,
  0
);

export const SafeFall = new Bonus('Safe Fall', Types.SafeFall, cap_50, 0);

export const Encumberance = new Bonus(
  'Encumberance',
  Types.Encumberance,
  cap_100,
  0
);

export const Coin = new Bonus('Coin', Types.Coin, cap_10, 0);

export const BountyPoints = new Bonus(
  'Bounty Points',
  Types.BountyPoints,
  cap_10,
  0
);

export const RealmPoints = new Bonus(
  'Realm Points',
  Types.RealmPoints,
  cap_10,
  0
);

export const StyleAbsorb = new Bonus(
  'Style Absorb',
  Types.StyleAbsorb,
  cap_10,
  0
);
