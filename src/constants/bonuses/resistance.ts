import {Bonus, Dust, Liquid} from '.';
import {BonusType} from '../../common/types';

export type Resistance = Bonus;

export const Body: Resistance = {
  name: 'Body',
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
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
  type: BonusType.Resist,
  jewel: {
    name: 'Watery Shielding Jewel',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};
