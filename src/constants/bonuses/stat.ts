import {Bonus, Dust, Liquid} from '.';
import {BonusType} from '../../common/types';

export type Stat = Bonus;

export const Strength: Stat = {
  name: 'Strength',
  type: BonusType.Stat,
  jewel: {
    name: 'Fiery Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Constitution: Stat = {
  name: 'Constitution',
  type: BonusType.Stat,
  jewel: {
    name: 'Earthen Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Dexterity: Stat = {
  name: 'Dexterity',
  type: BonusType.Stat,
  jewel: {
    name: 'Vapor Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Quickness: Stat = {
  name: 'Quickness',
  type: BonusType.Stat,
  jewel: {
    name: 'Airy Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Intelligence: Stat = {
  name: 'Intelligence',
  type: BonusType.Stat,
  jewel: {
    name: 'Dusty Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Piety: Stat = {
  name: 'Piety',
  type: BonusType.Stat,
  jewel: {
    name: 'Watery Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Charisma: Stat = {
  name: 'Charisma',
  type: BonusType.Stat,
  jewel: {
    name: 'Icy Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Empathy: Stat = {
  name: 'Empathy',
  type: BonusType.Stat,
  jewel: {
    name: 'Heated Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Hits: Stat = {
  name: 'Hits',
  type: BonusType.Stat,
  jewel: {
    name: 'Blood Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.GiantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Power: Stat = {
  name: 'Power',
  type: BonusType.Stat,
  jewel: {
    name: 'Mystical Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.MysticEnergy,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};
