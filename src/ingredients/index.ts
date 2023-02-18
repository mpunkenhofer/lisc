import * as Focus from '../bonuses/focus';
import * as Resist from '../bonuses/resistance';
import * as Skill from '../bonuses/skill';
import * as Stats from '../bonuses/stats';
import * as Toa from '../bonuses/toa';
import {Dictionary} from '../common/types';
import {
  focusJewelFactory,
  resistJewelFactory,
  skillJewelFactory,
  statJewelFactory,
} from './factories';

export enum Gems {
  Lo = 'Lo',
  Um = 'Um',
  On = 'On',
  Ee = 'Ee',
  Pal = 'Pal',
  Mon = 'Mon',
  Ros = 'Ros',
  Zo = 'Zo',
  Kath = 'Kath',
  Ra = 'Ra',
}

export enum Dust {
  EssenceOfLife,
  BloodiedBattlefieldDirt,
  GroundDraconicScales,
  GroundCaerStone,
  GroundBlessedUndeadBone,
  GroundVendoBone,
  GroundGiantBone,
  GroundCaveCrystal,
  FairyDust,
  OtherWorldlyDust,
  UnseelieDust,
  SootFromNilfheim,
}

export const DustNames: Dictionary<string> = {
  [Dust.EssenceOfLife]: 'Essence of Life',
  [Dust.BloodiedBattlefieldDirt]: 'Bloodied Battlefield Dirt',
  [Dust.GroundDraconicScales]: 'Ground Draconic Scales',
  [Dust.GroundCaerStone]: 'Ground Caer Stone',
  [Dust.GroundBlessedUndeadBone]: 'Ground Blessed Undead Bone',
  [Dust.GroundVendoBone]: 'Ground Vendo Bone',
  [Dust.GroundGiantBone]: 'Ground Giant Bone',
  [Dust.GroundCaveCrystal]: 'Ground Cave Crystal',
  [Dust.FairyDust]: 'Fairy Dust',
  [Dust.OtherWorldlyDust]: 'Other Worldly Dust',
  [Dust.UnseelieDust]: 'Unseelie Dust',
  [Dust.SootFromNilfheim]: 'Soot From Nilfheim',
};

export enum Liquid {
  GiantBlood,
  MysticEnergy,
  HeatFromAnUnearthlyPyre,
  LeviathanBlood,
  FrostFromAWasteland,
  SunLight,
  SwampFog,
  TreantBlood,
  UndeadAshAndHolyWater,
  DraconicFire,
  AirElementalEssence,
}

export const LiquidNames: Dictionary<string> = {
  [Liquid.GiantBlood]: 'Giant Blood',
  [Liquid.MysticEnergy]: 'Mystic Energy',
  [Liquid.HeatFromAnUnearthlyPyre]: 'Heat From An Unearthly Pyre',
  [Liquid.LeviathanBlood]: 'Leviathan Blood',
  [Liquid.FrostFromAWasteland]: 'Frost From A Wasteland',
  [Liquid.SunLight]: 'Sun Light',
  [Liquid.SwampFog]: 'Swamp Fog',
  [Liquid.TreantBlood]: 'Treant Blood',
  [Liquid.UndeadAshAndHolyWater]: 'Undead Ash And Holy Water',
  [Liquid.DraconicFire]: 'Draconic Fire',
  [Liquid.AirElementalEssence]: 'Air Elemental Essence',
};

// Type aliases for documentation purposes
export type IngredientBase = number;
export type IngredientIncrement = number;

export interface Jewel {
  readonly name: string;
  readonly dusts: Dust[];
  readonly liquids: Liquid[];
  readonly dust_amount: [IngredientBase, IngredientIncrement];
  readonly liquid_amount: [IngredientBase, IngredientIncrement];
}

export const ingredients: Dictionary<Jewel> = {
  // STATS

  [Stats.Types.Strength]: statJewelFactory(
    'Fiery Essence Jewel',
    Liquid.DraconicFire
  ),

  [Stats.Types.Constitution]: statJewelFactory(
    'Earthen Essence Jewel',
    Liquid.TreantBlood
  ),

  [Stats.Types.Dexterity]: statJewelFactory(
    'Vapor Essence Jewel',
    Liquid.SwampFog
  ),

  [Stats.Types.Quickness]: statJewelFactory(
    'Airy Essence Jewel',
    Liquid.AirElementalEssence
  ),

  [Stats.Types.Intelligence]: statJewelFactory(
    'Dusty Essence Jewel',
    Liquid.UndeadAshAndHolyWater
  ),

  [Stats.Types.Piety]: statJewelFactory(
    'Watery Essence Jewel',
    Liquid.LeviathanBlood
  ),

  [Stats.Types.Charisma]: statJewelFactory(
    'Icy Essence Jewel',
    Liquid.FrostFromAWasteland
  ),

  [Stats.Types.Empathy]: statJewelFactory(
    'Heated Essence Jewel',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [Stats.Types.HitPoints]: {
    name: 'Blood Essence Jewel',
    dusts: [Dust.EssenceOfLife],
    liquids: [Liquid.GiantBlood],
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },

  [Stats.Types.Power]: statJewelFactory(
    'Mystical Essence Jewel',
    Liquid.MysticEnergy
  ),

  // RESISTS

  [Resist.Types.Body]: resistJewelFactory(
    'Dusty Shielding Jewel',
    Liquid.UndeadAshAndHolyWater
  ),

  [Resist.Types.Cold]: resistJewelFactory(
    'Icy Shielding Jewel',
    Liquid.FrostFromAWasteland
  ),

  [Resist.Types.Heat]: resistJewelFactory(
    'Heated Shielding Jewel',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [Resist.Types.Energy]: resistJewelFactory(
    'Light Shielding Jewel',
    Liquid.SunLight
  ),

  [Resist.Types.Matter]: resistJewelFactory(
    'Earthen Shielding Jewel',
    Liquid.TreantBlood
  ),

  [Resist.Types.Spirit]: resistJewelFactory(
    'Vapor Shielding Jewel',
    Liquid.SwampFog
  ),

  [Resist.Types.Crush]: resistJewelFactory(
    'Fiery Shielding Jewel',
    Liquid.DraconicFire
  ),

  [Resist.Types.Thrust]: resistJewelFactory(
    'Airy Shielding Jewel',
    Liquid.AirElementalEssence
  ),

  [Resist.Types.Slash]: resistJewelFactory(
    'Watery Shielding Jewel',
    Liquid.LeviathanBlood
  ),

  // SKILLS

  [Skill.Types.Augmentation]: skillJewelFactory(
    'Airy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Axe]: skillJewelFactory(
    'Earthen War Rune',
    Dust.GroundGiantBone,
    Liquid.TreantBlood
  ),
  [Skill.Types.Battlesongs]: skillJewelFactory(
    'Airy Primal Rune',
    Dust.GroundVendoBone,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Beastcraft]: skillJewelFactory(
    'Earthen Primal Rune',
    Dust.GroundVendoBone,
    Liquid.TreantBlood
  ),
  [Skill.Types.BoneArmy]: skillJewelFactory(
    'Ashen Primal Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.Subterranean]: skillJewelFactory(
    'Fiery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.DraconicFire
  ),
  // [Skill.SkillTypes.CompositeBow]: skillJewelFactory(
  //   'Airy War Rune',
  //   Dust.GroundGiantBone,
  //   Liquid.AirElementalEssence
  // ),
  [Skill.Types.CriticalStrike]: skillJewelFactory(
    'Heated Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.Darkness]: skillJewelFactory(
    'Icy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.Hammer]: skillJewelFactory(
    'Fiery War Rune',
    Dust.GroundGiantBone,
    Liquid.DraconicFire
  ),
  [Skill.Types.HandToHand]: skillJewelFactory(
    'Lightning Charged War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  ),
  // [Skill.SkillTypes.Hexing]: skillJewelFactory(
  //   'Unholy Primal Rune',
  //   Dust.GroundVendoBone,
  //   Liquid.AirElementalEssence
  // ),
  [Skill.Types.LeftAxe]: skillJewelFactory(
    'Icy War Rune',
    Dust.GroundGiantBone,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.Mending]: skillJewelFactory(
    'Watery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Pacification]: skillJewelFactory(
    'Earthen Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.TreantBlood
  ),
  [Skill.Types.Parry]: skillJewelFactory(
    'Vapor Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.SwampFog
  ),
  [Skill.Types.Runecarving]: skillJewelFactory(
    'Heated Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.Shield]: skillJewelFactory(
    'Fiery Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.DraconicFire
  ),
  [Skill.Types.Spear]: skillJewelFactory(
    'Heated War Rune',
    Dust.GroundGiantBone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.Staff]: skillJewelFactory(
    'Earthen Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.TreantBlood
  ),
  [Skill.Types.Stealth]: skillJewelFactory(
    'Airy Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Stormcalling]: skillJewelFactory(
    'Fiery Primal Rune',
    Dust.GroundVendoBone,
    Liquid.DraconicFire
  ),
  [Skill.Types.Summoning]: skillJewelFactory(
    'Vapor Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.SwampFog
  ),
  [Skill.Types.Suppression]: skillJewelFactory(
    'Dusty Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.Sword]: skillJewelFactory(
    'Watery War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.ThrownWeapons]: skillJewelFactory(
    'Vapor War Rune',
    Dust.GroundGiantBone,
    Liquid.SwampFog
  ),
  [Skill.Types.ArborealPath]: skillJewelFactory(
    'Steaming Nature Spell Stone',
    Dust.FairyDust,
    Liquid.SwampFog
  ),
  [Skill.Types.Blades]: skillJewelFactory(
    'Watery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Blunt]: skillJewelFactory(
    'Fiery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.DraconicFire
  ),
  [Skill.Types.CelticDual]: skillJewelFactory(
    'Icy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.CelticSpear]: skillJewelFactory(
    'Earthen War Spell Stone',
    Dust.UnseelieDust,
    Liquid.TreantBlood
  ),
  [Skill.Types.CreepingPath]: skillJewelFactory(
    'Oozing Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  ),
  [Skill.Types.Enchantments]: skillJewelFactory(
    'Vapor Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.SwampFog
  ),
  [Skill.Types.LargeWeaponry]: skillJewelFactory(
    'Heated War Spell Stone',
    Dust.UnseelieDust,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.LightMagic]: skillJewelFactory(
    'Fiery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.DraconicFire
  ),
  [Skill.Types.ManaMagic]: skillJewelFactory(
    'Watery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Mentalism]: skillJewelFactory(
    'Earthen Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.TreantBlood
  ),
  [Skill.Types.Music]: skillJewelFactory(
    'Airy Nature Spell Stone',
    Dust.FairyDust,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Nature]: skillJewelFactory(
    'Earthen Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  ),
  [Skill.Types.Nurture]: skillJewelFactory(
    'Fiery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.DraconicFire
  ),
  [Skill.Types.Piercing]: skillJewelFactory(
    'Dusty War Spell Stone',
    Dust.UnseelieDust,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.Archery]: skillJewelFactory(
    'Airy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Regrowth]: skillJewelFactory(
    'Watery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Scythe]: skillJewelFactory(
    'Light War Spell Stone',
    Dust.UnseelieDust,
    Liquid.SunLight
  ),
  // [Skill.SkillTypes.ShadowMastery]: skillJewelFactory(
  //   'Shadowy Arcane Spell Stone',
  //   Dust.OtherWorldlyDust,
  //   Liquid.SwampFog
  // ),
  [Skill.Types.Valor]: skillJewelFactory(
    'Airy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.VerdantPath]: skillJewelFactory(
    'Mineral Encrusted Nature Spell Stone',
    Dust.FairyDust,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.VoidMagic]: skillJewelFactory(
    'Icy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.BodyMagic]: skillJewelFactory(
    'Heated Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.Chants]: skillJewelFactory(
    'Earthen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.TreantBlood
  ),
  [Skill.Types.ColdMagic]: skillJewelFactory(
    'Icy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.Crossbow]: skillJewelFactory(
    'Vapor War Sigil',
    Dust.GroundCaerStone,
    Liquid.SwampFog
  ),
  [Skill.Types.Crush]: skillJewelFactory(
    'Fiery War Sigil',
    Dust.GroundCaerStone,
    Liquid.DraconicFire
  ),
  [Skill.Types.DeathServant]: skillJewelFactory(
    'Ashen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.Deathsight]: skillJewelFactory(
    'Vacuous Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  ),
  [Skill.Types.DualWield]: skillJewelFactory(
    'Icy War Sigil',
    Dust.GroundCaerStone,
    Liquid.FrostFromAWasteland
  ),
  [Skill.Types.EarthMagic]: skillJewelFactory(
    'Earthen Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.TreantBlood
  ),
  [Skill.Types.Enhancement]: skillJewelFactory(
    'Airy Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.FireMagic]: skillJewelFactory(
    'Fiery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.DraconicFire
  ),
  [Skill.Types.Flexible]: skillJewelFactory(
    'Molten Magma War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Instruments]: skillJewelFactory(
    'Vapor Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  ),
  [Skill.Types.Longbow]: skillJewelFactory(
    'Airy War Sigil',
    Dust.GroundCaerStone,
    Liquid.AirElementalEssence
  ),
  [Skill.Types.Envenom]: skillJewelFactory(
    'Dusty Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.MatterMagic]: skillJewelFactory(
    'Dusty Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.MindMagic]: skillJewelFactory(
    'Watery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Painworking]: skillJewelFactory(
    'Salt Crusted Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.MysticEnergy
  ),
  [Skill.Types.Polearm]: skillJewelFactory(
    'Earthen War Sigil',
    Dust.GroundCaerStone,
    Liquid.TreantBlood
  ),
  [Skill.Types.Rejuvenation]: skillJewelFactory(
    'Watery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Slash]: skillJewelFactory(
    'Watery War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  ),
  [Skill.Types.Smite]: skillJewelFactory(
    'Fiery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.DraconicFire
  ),
  [Skill.Types.SoulRending]: skillJewelFactory(
    'Steaming Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.SpiritMagic]: skillJewelFactory(
    'Vapor Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.SwampFog
  ),
  [Skill.Types.Thrust]: skillJewelFactory(
    'Dusty War Sigil',
    Dust.GroundCaerStone,
    Liquid.UndeadAshAndHolyWater
  ),
  [Skill.Types.TwoHanded]: skillJewelFactory(
    'Heated War Sigil',
    Dust.GroundCaerStone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [Skill.Types.WindMagic]: skillJewelFactory(
    'Airy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.AirElementalEssence
  ),

  // FOCUSES

  [Focus.Types.BoneArmyFocus]: focusJewelFactory(
    'Ashen Rune',
    Liquid.UndeadAshAndHolyWater
  ),

  [Focus.Types.DarknessFocus]: focusJewelFactory(
    'Ice Rune',
    Liquid.FrostFromAWasteland
  ),

  [Focus.Types.RunecarvingFocus]: focusJewelFactory(
    'Heat Rune',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [Focus.Types.SummoningFocus]: focusJewelFactory(
    'Vapor Rune',
    Liquid.SwampFog
  ),

  [Focus.Types.SuppressionFocus]: focusJewelFactory(
    'Dust Rune',
    Liquid.UndeadAshAndHolyWater
  ),

  [Focus.Types.ArborealPathFocus]: focusJewelFactory(
    'Steaming Spell Stone',
    Liquid.SwampFog
  ),

  [Focus.Types.CreepingPathFocus]: focusJewelFactory(
    'Oozing Spell Stone',
    Liquid.TreantBlood
  ),

  [Focus.Types.EnchantmentsFocus]: focusJewelFactory(
    'Vapor Spell Stone',
    Liquid.SwampFog
  ),

  [Focus.Types.LightFocus]: focusJewelFactory(
    'Fire Spell Stone',
    Liquid.DraconicFire
  ),

  [Focus.Types.ManaFocus]: focusJewelFactory(
    'Water Spell Stone',
    Liquid.LeviathanBlood
  ),

  [Focus.Types.MentalismFocus]: focusJewelFactory(
    'Earth Spell Stone',
    Liquid.TreantBlood
  ),

  [Focus.Types.VerdantPathFocus]: focusJewelFactory(
    'Mineral Encrusted Spell Stone',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [Focus.Types.VoidFocus]: focusJewelFactory(
    'Ice Spell Stone',
    Liquid.FrostFromAWasteland
  ),

  [Focus.Types.BodyFocus]: focusJewelFactory(
    'Heat Sigil',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [Focus.Types.ColdFocus]: focusJewelFactory(
    'Ice Sigil',
    Liquid.FrostFromAWasteland
  ),

  [Focus.Types.DeathServantFocus]: focusJewelFactory(
    'Ashen Sigil',
    Liquid.UndeadAshAndHolyWater
  ),

  [Focus.Types.DeathsightFocus]: focusJewelFactory(
    'Vacuous Sigil',
    Liquid.SwampFog
  ),

  [Focus.Types.EarthFocus]: focusJewelFactory(
    'Earth Sigil',
    Liquid.TreantBlood
  ),

  [Focus.Types.FireFocus]: focusJewelFactory('Fire Sigil', Liquid.DraconicFire),

  [Focus.Types.MatterFocus]: focusJewelFactory(
    'Dust Sigil',
    Liquid.UndeadAshAndHolyWater
  ),

  [Focus.Types.MindFocus]: focusJewelFactory(
    'Water Sigil',
    Liquid.LeviathanBlood
  ),

  [Focus.Types.PainworkingFocus]: focusJewelFactory(
    'Salt Crusted Sigil',
    Liquid.MysticEnergy
  ),

  [Focus.Types.SpiritFocus]: focusJewelFactory('Vapor Sigil', Liquid.SwampFog),

  [Focus.Types.WindFocus]: focusJewelFactory(
    'Air Sigil',
    Liquid.AirElementalEssence
  ),

  // MISC

  [Toa.Types.AllMagicSkills]: {
    name: 'Finesse Nature Spell Stone',
    dusts: [],
    liquids: [Liquid.DraconicFire, Liquid.MysticEnergy, Liquid.TreantBlood],
    dust_amount: [0, 0],
    liquid_amount: [2, 0],
  },

  [Toa.Types.AllMeleeSkills]: {
    name: 'Finesse Warp Spell Stone',
    dusts: [Dust.UnseelieDust],
    liquids: [Liquid.DraconicFire, Liquid.MysticEnergy, Liquid.TreantBlood],
    dust_amount: [1, 0],
    liquid_amount: [2, 0],
  },
};
