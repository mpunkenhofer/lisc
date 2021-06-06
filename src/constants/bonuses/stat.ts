import {Bonus, Dust, Liquid} from '.';

export type Stat = Bonus;

export const Strength: Stat = {
  name: 'Strength',
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
  jewel: {
    name: 'Mystical Essence Jewel',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.MysticEnergy,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};
