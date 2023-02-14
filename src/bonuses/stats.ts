import {Cap, CraftAbleBonus, ImbuePoints} from '.';
import {Dust, Jewel, Liquid} from '../materials';

const cap: Cap = {cap_add: 0, cap_mult: 1.5};
const bonuses = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];
const imbue: ImbuePoints = {imbue_add: 1, imbue_mult: 0.67};
const util = 0.6666667;

export class Stat extends CraftAbleBonus {
  constructor(name: string, jewel: Jewel) {
    super(name, cap, bonuses, imbue, jewel, util);
  }
}

const statJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dust: Dust.EssenceOfLife,
    liquid,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  };
};

export const Strength = new Stat(
  'Strength',
  statJewelFactory('Fiery Essence Jewel', Liquid.DraconicFire)
);

export const Constitution = new Stat(
  'Constitution',
  statJewelFactory('Earthen Essence Jewel', Liquid.TreantBlood)
);

export const Dexterity = new Stat(
  'Dexterity',
  statJewelFactory('Vapor Essence Jewel', Liquid.SwampFog)
);

export const Quickness = new Stat(
  'Quickness',
  statJewelFactory('Airy Essence Jewel', Liquid.AirElementalEssence)
);

export const Intelligence = new Stat(
  'Intelligence',
  statJewelFactory('Dusty Essence Jewel', Liquid.UndeadAshAndHolyWater)
);

export const Piety = new Stat(
  'Piety',
  statJewelFactory('Watery Essence Jewel', Liquid.LeviathanBlood)
);

export const Charisma = new Stat(
  'Charisma',
  statJewelFactory('Icy Essence Jewel', Liquid.FrostFromAWasteland)
);

export const Empathy = new Stat(
  'Empathy',
  statJewelFactory('Heated Essence Jewel', Liquid.HeatFromAnUnearthlyPyre)
);

// export const Hits = new Stat(
//   'Hits',
//   statJewelFactory('Blood Essence Jewel', Liquid.GiantBlood)
// );

// export const Power = new Stat(
//   'Power',
//   statJewelFactory('Mystical Essence Jewel', Liquid.MysticEnergy)
// );
