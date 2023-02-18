import {Cap, CraftAbleBonus, ImbuePoints} from '.';

const cap: Cap = {cap_add: 0, cap_mult: 1};
const imbue: ImbuePoints = {imbue_add: 1, imbue_mult: 0};
const gem_values = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const util = 0;

export class Focus extends CraftAbleBonus {
  constructor(name: string, id: number) {
    super(name, id, cap, gem_values, imbue, util);
  }
}

export enum Types {
  BoneArmyFocus = 400,
  DarknessFocus,
  RunecarvingFocus,
  SummoningFocus,
  SuppressionFocus,
  ArborealPathFocus,
  CreepingPathFocus,
  EnchantmentsFocus,
  LightFocus,
  ManaFocus,
  MentalismFocus,
  VerdantPathFocus,
  VoidFocus,
  BodyFocus,
  ColdFocus,
  DeathServantFocus,
  DeathsightFocus,
  EarthFocus,
  FireFocus,
  MatterFocus,
  MindFocus,
  PainworkingFocus,
  SpiritFocus,
  WindFocus,
}

export const BoneArmyFocus = new Focus('Bone Army Focus', Types.BoneArmyFocus);

export const DarknessFocus = new Focus('Darkness Focus', Types.DarknessFocus);

export const RunecarvingFocus = new Focus(
  'Runecarving Focus',
  Types.RunecarvingFocus
);

export const SummoningFocus = new Focus(
  'Summoning Focus',
  Types.SummoningFocus
);

export const SuppressionFocus = new Focus(
  'Suppression Focus',
  Types.SuppressionFocus
);

export const ArborealPathFocus = new Focus(
  'Arboreal Path Focus',
  Types.ArborealPathFocus
);

export const CreepingPathFocus = new Focus(
  'Creeping Path Focus',
  Types.CreepingPathFocus
);

export const EnchantmentsFocus = new Focus(
  'Enchantments Focus',
  Types.EnchantmentsFocus
);

export const LightFocus = new Focus('Light Focus', Types.LightFocus);

export const ManaFocus = new Focus('Mana Focus', Types.ManaFocus);

export const MentalismFocus = new Focus(
  'Mentalism Focus',
  Types.MentalismFocus
);

export const VerdantPathFocus = new Focus(
  'Verdant Path Focus',
  Types.VerdantPathFocus
);

export const VoidFocus = new Focus('Void Focus', Types.VoidFocus);

export const BodyFocus = new Focus('Body Focus', Types.BodyFocus);

export const ColdFocus = new Focus('Cold Focus', Types.ColdFocus);

export const DeathServantFocus = new Focus(
  'Death Servant Focus',
  Types.DeathServantFocus
);

export const DeathsightFocus = new Focus(
  'Deathsight Focus',
  Types.DeathsightFocus
);

export const EarthFocus = new Focus('Earth Focus', Types.EarthFocus);

export const FireFocus = new Focus('Fire Focus', Types.FireFocus);

export const MatterFocus = new Focus('Matter Focus', Types.MatterFocus);

export const MindFocus = new Focus('Mind Focus', Types.MindFocus);

export const PainworkingFocus = new Focus(
  'Painworking Focus',
  Types.PainworkingFocus
);

export const SpiritFocus = new Focus('Spirit Focus', Types.SpiritFocus);

export const WindFocus = new Focus('Wind Focus', Types.WindFocus);
