import {Bonus, Dust, Liquid} from '.';

export type Resistance = Bonus;

export const Body: Resistance = {
  name: 'Body',
  jewel: {
    name: 'Dusty Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Cold: Resistance = {
  name: 'Cold',
  jewel: {
    name: 'Icy Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Heat: Resistance = {
  name: 'Heat',
  jewel: {
    name: 'Heated Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Energy: Resistance = {
  name: 'Energy',
  jewel: {
    name: 'Light Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SunLight,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Matter: Resistance = {
  name: 'Matter',
  jewel: {
    name: 'Earthen Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Spirit: Resistance = {
  name: 'Spirit',
  jewel: {
    name: 'Vapor Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Crush: Resistance = {
  name: 'Crush',
  jewel: {
    name: 'Fiery Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Thrust: Resistance = {
  name: 'Thrust',
  jewel: {
    name: 'Airy Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const Slash: Resistance = {
  name: 'Slash',
  jewel: {
    name: 'Watery Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};
