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

export enum FocusTypes {
  BoneArmyFocus,
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

export const BoneArmyFocus = new Focus(
  'Bone Army Focus',
  FocusTypes.BoneArmyFocus
);

export const DarknessFocus = new Focus(
  'Darkness Focus',
  FocusTypes.DarknessFocus
);

export const RunecarvingFocus = new Focus(
  'Runecarving Focus',
  FocusTypes.RunecarvingFocus
);

export const SummoningFocus = new Focus(
  'Summoning Focus',
  FocusTypes.SummoningFocus
);

export const SuppressionFocus = new Focus(
  'Suppression Focus',
  FocusTypes.SuppressionFocus
);

export const ArborealPathFocus = new Focus(
  'Arboreal Path Focus',
  FocusTypes.ArborealPathFocus
);

export const CreepingPathFocus = new Focus(
  'Creeping Path Focus',
  FocusTypes.CreepingPathFocus
);

export const EnchantmentsFocus = new Focus(
  'Enchantments Focus',
  FocusTypes.EnchantmentsFocus
);

export const LightFocus = new Focus('Light Focus', FocusTypes.LightFocus);

export const ManaFocus = new Focus('Mana Focus', FocusTypes.ManaFocus);

export const MentalismFocus = new Focus(
  'Mentalism Focus',
  FocusTypes.MentalismFocus
);

export const VerdantPathFocus = new Focus(
  'Verdant Path Focus',
  FocusTypes.VerdantPathFocus
);

export const VoidFocus = new Focus('Void Focus', FocusTypes.VoidFocus);

export const BodyFocus = new Focus('Body Focus', FocusTypes.BodyFocus);

export const ColdFocus = new Focus('Cold Focus', FocusTypes.ColdFocus);

export const DeathServantFocus = new Focus(
  'Death Servant Focus',
  FocusTypes.DeathServantFocus
);

export const DeathsightFocus = new Focus(
  'Deathsight Focus',
  FocusTypes.DeathsightFocus
);

export const EarthFocus = new Focus('Earth Focus', FocusTypes.EarthFocus);

export const FireFocus = new Focus('Fire Focus', FocusTypes.FireFocus);

export const MatterFocus = new Focus('Matter Focus', FocusTypes.MatterFocus);

export const MindFocus = new Focus('Mind Focus', FocusTypes.MindFocus);

export const PainworkingFocus = new Focus(
  'Painworking Focus',
  FocusTypes.PainworkingFocus
);

export const SpiritFocus = new Focus('Spirit Focus', FocusTypes.SpiritFocus);

export const WindFocus = new Focus('Wind Focus', FocusTypes.WindFocus);
