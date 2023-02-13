import {CraftAbleBonus} from '.';
import {Jewel, Dust, Liquid} from '../materials';

export class Resistance extends CraftAbleBonus {
  constructor(name: string, jewel: Jewel) {
    super(name, jewel, 2.0);
  }
}

const resistJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dust: Dust.GroundDraconicScales,
    liquid,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  };
};

export const Body = new Resistance(
  'Body',
  resistJewelFactory('Dusty Shielding Jewel', Liquid.UndeadAshAndHolyWater)
);

export const Cold = new Resistance(
  'Cold',
  resistJewelFactory('Icy Shielding Jewel', Liquid.FrostFromAWasteland)
);

export const Heat = new Resistance(
  'Heat',
  resistJewelFactory('Heated Shielding Jewel', Liquid.HeatFromAnUnearthlyPyre)
);

export const Energy = new Resistance(
  'Energy',
  resistJewelFactory('Light Shielding Jewel', Liquid.SunLight)
);

export const Matter = new Resistance(
  'Matter',
  resistJewelFactory('Earthen Shielding Jewel', Liquid.TreantBlood)
);

export const Spirit = new Resistance(
  'Spirit',
  resistJewelFactory('Vapor Shielding Jewel', Liquid.SwampFog)
);

export const Crush = new Resistance(
  'Crush',
  resistJewelFactory('Fiery Shielding Jewel', Liquid.DraconicFire)
);

export const Thrust = new Resistance(
  'Thrust',
  resistJewelFactory('Airy Shielding Jewel', Liquid.AirElementalEssence)
);

export const Slash = new Resistance(
  'Slash',
  resistJewelFactory('Watery Shielding Jewel', Liquid.LeviathanBlood)
);
