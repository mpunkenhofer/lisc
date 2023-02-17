import {Liquid, Dust, Jewel} from '.';

export const statJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dusts: [Dust.EssenceOfLife],
    liquids: [liquid],
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  };
};

export const resistJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dusts: [Dust.GroundDraconicScales],
    liquids: [liquid],
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  };
};

export const skillJewelFactory = (
  name: string,
  dust: Dust,
  liquid: Liquid
): Jewel => {
  return {
    name,
    dusts: [dust],
    liquids: [liquid],
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  };
};

export const focusJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dusts: [Dust.GroundDraconicScales],
    liquids: [liquid],
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  };
};
