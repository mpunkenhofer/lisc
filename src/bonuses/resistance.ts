import {Cap, CraftAbleBonus, ImbuePoints} from '.';
import {Jewel, Dust, Liquid} from '../materials';

const cap: Cap = {cap_add: 1, cap_mult: 0.5};
const imbue: ImbuePoints = {imbue_add: 2, imbue_mult: 2};
const bonuses = [1, 2, 3, 5, 7, 9, 11, 13, 15, 17];
const util = 2.0;

export class Resistance extends CraftAbleBonus {
  constructor(name: string, jewel: Jewel) {
    super(name, cap, bonuses, imbue, jewel, util);
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
