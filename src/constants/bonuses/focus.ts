import {Bonus, Dust, Liquid} from '.';
import {BonusType} from '../../common/types';

export type Focus = Bonus;

export const BoneArmyFocus: Focus = {
  name: 'Bone Army Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Ashen Rune',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const DarknessFocus: Focus = {
  name: 'Darkness Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Ice Rune',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const RunecarvingFocus: Focus = {
  name: 'Runecarving Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Heat Rune',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const SummoningFocus: Focus = {
  name: 'Summoning Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Vapor Rune',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const SuppressionFocus: Focus = {
  name: 'Suppression Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Dust Rune',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const ArborealPathFocus: Focus = {
  name: 'Arboreal Path Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Steaming Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const CreepingPathFocus: Focus = {
  name: 'Creeping Path Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Oozing Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const EnchantmentsFocus: Focus = {
  name: 'Enchantments Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Vapor Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const LightFocus: Focus = {
  name: 'Light Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Fire Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const ManaFocus: Focus = {
  name: 'Mana Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Water Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const MentalismFocus: Focus = {
  name: 'Mentalism Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Earth Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const VerdantPathFocus: Focus = {
  name: 'Verdant Path Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Mineral Encrusted Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const VoidFocus: Focus = {
  name: 'Void Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Ice Spell Stone',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const BodyFocus: Focus = {
  name: 'Body Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Heat Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const ColdFocus: Focus = {
  name: 'Cold Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Ice Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const DeathServantFocus: Focus = {
  name: 'Death Servant Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Ashen Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const DeathsightFocus: Focus = {
  name: 'Deathsight Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Vacuous Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const EarthFocus: Focus = {
  name: 'Earth Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Earth Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const FireFocus: Focus = {
  name: 'Fire Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Fire Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const MatterFocus: Focus = {
  name: 'Matter Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Dust Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const MindFocus: Focus = {
  name: 'Mind Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Water Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const PainworkingFocus: Focus = {
  name: 'Painworking Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Salt Crusted Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.MysticEnergy,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const SpiritFocus: Focus = {
  name: 'Spirit Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Vapor Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};

export const WindFocus: Focus = {
  name: 'Wind Focus',
  type: BonusType.Focus,
  jewel: {
    name: 'Air Sigil',
    dust: Dust.GroundDraconicScales,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  },
};
