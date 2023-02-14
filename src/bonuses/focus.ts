import {Cap, CraftAbleBonus, ImbuePoints} from '.';
import {Jewel, Dust, Liquid} from '../materials';

const cap: Cap = {cap_add: 0, cap_mult: 1};
const imbue: ImbuePoints = {imbue_add: 1, imbue_mult: 0};
const bonuses = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const util = 0;

export class Focus extends CraftAbleBonus {
  constructor(name: string, jewel: Jewel) {
    super(name, cap, bonuses, imbue, jewel, util);
  }
}

const focusJewelFactory = (name: string, liquid: Liquid): Jewel => {
  return {
    name,
    dust: Dust.GroundDraconicScales,
    liquid,
    dust_amount: [1, 5],
    liquid_amount: [1, 1],
  };
};

export const BoneArmyFocus = new Focus(
  'Bone Army Focus',
  focusJewelFactory('Ashen Rune', Liquid.UndeadAshAndHolyWater)
);

export const DarknessFocus = new Focus(
  'Darkness Focus',
  focusJewelFactory('Ice Rune', Liquid.FrostFromAWasteland)
);

export const RunecarvingFocus = new Focus(
  'Runecarving Focus',
  focusJewelFactory('Heat Rune', Liquid.HeatFromAnUnearthlyPyre)
);

export const SummoningFocus = new Focus(
  'Summoning Focus',
  focusJewelFactory('Vapor Rune', Liquid.SwampFog)
);

export const SuppressionFocus = new Focus(
  'Suppression Focus',
  focusJewelFactory('Dust Rune', Liquid.UndeadAshAndHolyWater)
);

export const ArborealPathFocus = new Focus(
  'Arboreal Path Focus',
  focusJewelFactory('Steaming Spell Stone', Liquid.SwampFog)
);

export const CreepingPathFocus = new Focus(
  'Creeping Path Focus',
  focusJewelFactory('Oozing Spell Stone', Liquid.TreantBlood)
);

export const EnchantmentsFocus = new Focus(
  'Enchantments Focus',
  focusJewelFactory('Vapor Spell Stone', Liquid.SwampFog)
);

export const LightFocus = new Focus(
  'Light Focus',
  focusJewelFactory('Fire Spell Stone', Liquid.DraconicFire)
);

export const ManaFocus = new Focus(
  'Mana Focus',
  focusJewelFactory('Water Spell Stone', Liquid.LeviathanBlood)
);

export const MentalismFocus = new Focus(
  'Mentalism Focus',
  focusJewelFactory('Earth Spell Stone', Liquid.TreantBlood)
);

export const VerdantPathFocus = new Focus(
  'Verdant Path Focus',
  focusJewelFactory(
    'Mineral Encrusted Spell Stone',
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const VoidFocus = new Focus(
  'Void Focus',
  focusJewelFactory('Ice Spell Stone', Liquid.FrostFromAWasteland)
);

export const BodyFocus = new Focus(
  'Body Focus',
  focusJewelFactory('Heat Sigil', Liquid.HeatFromAnUnearthlyPyre)
);

export const ColdFocus = new Focus(
  'Cold Focus',
  focusJewelFactory('Ice Sigil', Liquid.FrostFromAWasteland)
);

export const DeathServantFocus = new Focus(
  'Death Servant Focus',
  focusJewelFactory('Ashen Sigil', Liquid.UndeadAshAndHolyWater)
);

export const DeathsightFocus = new Focus(
  'Deathsight Focus',
  focusJewelFactory('Vacuous Sigil', Liquid.SwampFog)
);

export const EarthFocus = new Focus(
  'Earth Focus',
  focusJewelFactory('Earth Sigil', Liquid.TreantBlood)
);

export const FireFocus = new Focus(
  'Fire Focus',
  focusJewelFactory('Fire Sigil', Liquid.DraconicFire)
);

export const MatterFocus = new Focus(
  'Matter Focus',
  focusJewelFactory('Dust Sigil', Liquid.UndeadAshAndHolyWater)
);

export const MindFocus = new Focus(
  'Mind Focus',
  focusJewelFactory('Water Sigil', Liquid.LeviathanBlood)
);

export const PainworkingFocus = new Focus(
  'Painworking Focus',
  focusJewelFactory('Salt Crusted Sigil', Liquid.MysticEnergy)
);

export const SpiritFocus = new Focus(
  'Spirit Focus',
  focusJewelFactory('Vapor Sigil', Liquid.SwampFog)
);

export const WindFocus = new Focus(
  'Wind Focus',
  focusJewelFactory('Air Sigil', Liquid.AirElementalEssence)
);
