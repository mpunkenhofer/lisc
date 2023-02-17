import {FocusTypes} from '../bonuses/focus';
import {ResistanceTypes} from '../bonuses/resistance';
import {SkillTypes} from '../bonuses/skill';
import {StatTypes} from '../bonuses/stats';
import {Dictionary} from '../common/types';
import {
  focusJewelFactory,
  resistJewelFactory,
  skillJewelFactory,
  statJewelFactory,
} from './factories';

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

// All Magic Skills: 1 fairy dust 2 draconic fire, mystic energy, treant blood
// All Melee Skills: 1 unseelie dust 2 draconic fire, mystic energy, treant blood

export const ingredients: Dictionary<Jewel> = {
  // STATS

  [StatTypes.Strength]: statJewelFactory(
    'Fiery Essence Jewel',
    Liquid.DraconicFire
  ),

  [StatTypes.Constitution]: statJewelFactory(
    'Earthen Essence Jewel',
    Liquid.TreantBlood
  ),

  [StatTypes.Dexterity]: statJewelFactory(
    'Vapor Essence Jewel',
    Liquid.SwampFog
  ),

  [StatTypes.Quickness]: statJewelFactory(
    'Airy Essence Jewel',
    Liquid.AirElementalEssence
  ),

  [StatTypes.Intelligence]: statJewelFactory(
    'Dusty Essence Jewel',
    Liquid.UndeadAshAndHolyWater
  ),

  [StatTypes.Piety]: statJewelFactory(
    'Watery Essence Jewel',
    Liquid.LeviathanBlood
  ),

  [StatTypes.Charisma]: statJewelFactory(
    'Icy Essence Jewel',
    Liquid.FrostFromAWasteland
  ),

  [StatTypes.Empathy]: statJewelFactory(
    'Heated Essence Jewel',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [StatTypes.HitPoints]: {
    name: 'Blood Essence Jewel',
    dusts: [Dust.EssenceOfLife],
    liquids: [Liquid.GiantBlood],
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },

  [StatTypes.Power]: statJewelFactory(
    'Mystical Essence Jewel',
    Liquid.MysticEnergy
  ),

  // RESISTS

  [ResistanceTypes.Body]: resistJewelFactory(
    'Dusty Shielding Jewel',
    Liquid.UndeadAshAndHolyWater
  ),

  [ResistanceTypes.Cold]: resistJewelFactory(
    'Icy Shielding Jewel',
    Liquid.FrostFromAWasteland
  ),

  [ResistanceTypes.Heat]: resistJewelFactory(
    'Heated Shielding Jewel',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [ResistanceTypes.Energy]: resistJewelFactory(
    'Light Shielding Jewel',
    Liquid.SunLight
  ),

  [ResistanceTypes.Matter]: resistJewelFactory(
    'Earthen Shielding Jewel',
    Liquid.TreantBlood
  ),

  [ResistanceTypes.Spirit]: resistJewelFactory(
    'Vapor Shielding Jewel',
    Liquid.SwampFog
  ),

  [ResistanceTypes.Crush]: resistJewelFactory(
    'Fiery Shielding Jewel',
    Liquid.DraconicFire
  ),

  [ResistanceTypes.Thrust]: resistJewelFactory(
    'Airy Shielding Jewel',
    Liquid.AirElementalEssence
  ),

  [ResistanceTypes.Slash]: resistJewelFactory(
    'Watery Shielding Jewel',
    Liquid.LeviathanBlood
  ),

  // SKILLS

  [SkillTypes.Augmentation]: skillJewelFactory(
    'Airy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Axe]: skillJewelFactory(
    'Earthen War Rune',
    Dust.GroundGiantBone,
    Liquid.TreantBlood
  ),
  [SkillTypes.Battlesongs]: skillJewelFactory(
    'Airy Primal Rune',
    Dust.GroundVendoBone,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Beastcraft]: skillJewelFactory(
    'Earthen Primal Rune',
    Dust.GroundVendoBone,
    Liquid.TreantBlood
  ),
  [SkillTypes.BoneArmy]: skillJewelFactory(
    'Ashen Primal Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.Subterranean]: skillJewelFactory(
    'Fiery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.DraconicFire
  ),
  // [SkillTypes.CompositeBow]: skillJewelFactory(
  //   'Airy War Rune',
  //   Dust.GroundGiantBone,
  //   Liquid.AirElementalEssence
  // ),
  [SkillTypes.CriticalStrike]: skillJewelFactory(
    'Heated Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.Darkness]: skillJewelFactory(
    'Icy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.Hammer]: skillJewelFactory(
    'Fiery War Rune',
    Dust.GroundGiantBone,
    Liquid.DraconicFire
  ),
  [SkillTypes.HandToHand]: skillJewelFactory(
    'Lightning Charged War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  ),
  // [SkillTypes.Hexing]: skillJewelFactory(
  //   'Unholy Primal Rune',
  //   Dust.GroundVendoBone,
  //   Liquid.AirElementalEssence
  // ),
  [SkillTypes.LeftAxe]: skillJewelFactory(
    'Icy War Rune',
    Dust.GroundGiantBone,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.Mending]: skillJewelFactory(
    'Watery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Pacification]: skillJewelFactory(
    'Earthen Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.TreantBlood
  ),
  [SkillTypes.Parry]: skillJewelFactory(
    'Vapor Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.SwampFog
  ),
  [SkillTypes.Runecarving]: skillJewelFactory(
    'Heated Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.Shield]: skillJewelFactory(
    'Fiery Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.DraconicFire
  ),
  [SkillTypes.Spear]: skillJewelFactory(
    'Heated War Rune',
    Dust.GroundGiantBone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.Staff]: skillJewelFactory(
    'Earthen Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.TreantBlood
  ),
  [SkillTypes.Stealth]: skillJewelFactory(
    'Airy Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Stormcalling]: skillJewelFactory(
    'Fiery Primal Rune',
    Dust.GroundVendoBone,
    Liquid.DraconicFire
  ),
  [SkillTypes.Summoning]: skillJewelFactory(
    'Vapor Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.SwampFog
  ),
  [SkillTypes.Suppression]: skillJewelFactory(
    'Dusty Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.Sword]: skillJewelFactory(
    'Watery War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.ThrownWeapons]: skillJewelFactory(
    'Vapor War Rune',
    Dust.GroundGiantBone,
    Liquid.SwampFog
  ),
  [SkillTypes.ArborealPath]: skillJewelFactory(
    'Steaming Nature Spell Stone',
    Dust.FairyDust,
    Liquid.SwampFog
  ),
  [SkillTypes.Blades]: skillJewelFactory(
    'Watery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Blunt]: skillJewelFactory(
    'Fiery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.DraconicFire
  ),
  [SkillTypes.CelticDual]: skillJewelFactory(
    'Icy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.CelticSpear]: skillJewelFactory(
    'Earthen War Spell Stone',
    Dust.UnseelieDust,
    Liquid.TreantBlood
  ),
  [SkillTypes.CreepingPath]: skillJewelFactory(
    'Oozing Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  ),
  [SkillTypes.Enchantment]: skillJewelFactory(
    'Vapor Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.SwampFog
  ),
  [SkillTypes.LargeWeaponry]: skillJewelFactory(
    'Heated War Spell Stone',
    Dust.UnseelieDust,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.LightMagic]: skillJewelFactory(
    'Fiery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.DraconicFire
  ),
  [SkillTypes.ManaMagic]: skillJewelFactory(
    'Watery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Mentalism]: skillJewelFactory(
    'Earthen Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.TreantBlood
  ),
  [SkillTypes.Music]: skillJewelFactory(
    'Airy Nature Spell Stone',
    Dust.FairyDust,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Nature]: skillJewelFactory(
    'Earthen Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  ),
  [SkillTypes.Nurture]: skillJewelFactory(
    'Fiery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.DraconicFire
  ),
  [SkillTypes.Piercing]: skillJewelFactory(
    'Dusty War Spell Stone',
    Dust.UnseelieDust,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.RecurveBow]: skillJewelFactory(
    'Airy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Regrowth]: skillJewelFactory(
    'Watery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Scythe]: skillJewelFactory(
    'Light War Spell Stone',
    Dust.UnseelieDust,
    Liquid.SunLight
  ),
  // [SkillTypes.ShadowMastery]: skillJewelFactory(
  //   'Shadowy Arcane Spell Stone',
  //   Dust.OtherWorldlyDust,
  //   Liquid.SwampFog
  // ),
  [SkillTypes.Valor]: skillJewelFactory(
    'Airy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.VerdantPath]: skillJewelFactory(
    'Mineral Encrusted Nature Spell Stone',
    Dust.FairyDust,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.VoidMagic]: skillJewelFactory(
    'Icy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.BodyMagic]: skillJewelFactory(
    'Heated Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.Chants]: skillJewelFactory(
    'Earthen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.TreantBlood
  ),
  [SkillTypes.ColdMagic]: skillJewelFactory(
    'Icy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.Crossbow]: skillJewelFactory(
    'Vapor War Sigil',
    Dust.GroundCaerStone,
    Liquid.SwampFog
  ),
  [SkillTypes.Crush]: skillJewelFactory(
    'Fiery War Sigil',
    Dust.GroundCaerStone,
    Liquid.DraconicFire
  ),
  [SkillTypes.DeathServant]: skillJewelFactory(
    'Ashen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.Deathsight]: skillJewelFactory(
    'Vacuous Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  ),
  [SkillTypes.DualWield]: skillJewelFactory(
    'Icy War Sigil',
    Dust.GroundCaerStone,
    Liquid.FrostFromAWasteland
  ),
  [SkillTypes.EarthMagic]: skillJewelFactory(
    'Earthen Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.TreantBlood
  ),
  [SkillTypes.Enhancement]: skillJewelFactory(
    'Airy Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.FireMagic]: skillJewelFactory(
    'Fiery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.DraconicFire
  ),
  [SkillTypes.Flexible]: skillJewelFactory(
    'Molten Magma War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Instruments]: skillJewelFactory(
    'Vapor Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  ),
  [SkillTypes.Longbow]: skillJewelFactory(
    'Airy War Sigil',
    Dust.GroundCaerStone,
    Liquid.AirElementalEssence
  ),
  [SkillTypes.Envenom]: skillJewelFactory(
    'Dusty Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.MatterMagic]: skillJewelFactory(
    'Dusty Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.MindMagic]: skillJewelFactory(
    'Watery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.PainWorking]: skillJewelFactory(
    'Salt Crusted Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.MysticEnergy
  ),
  [SkillTypes.Polearm]: skillJewelFactory(
    'Earthen War Sigil',
    Dust.GroundCaerStone,
    Liquid.TreantBlood
  ),
  [SkillTypes.Rejuvenation]: skillJewelFactory(
    'Watery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Slash]: skillJewelFactory(
    'Watery War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  ),
  [SkillTypes.Smiting]: skillJewelFactory(
    'Fiery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.DraconicFire
  ),
  [SkillTypes.SoulRending]: skillJewelFactory(
    'Steaming Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.SpiritMagic]: skillJewelFactory(
    'Vapor Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.SwampFog
  ),
  [SkillTypes.Thrust]: skillJewelFactory(
    'Dusty War Sigil',
    Dust.GroundCaerStone,
    Liquid.UndeadAshAndHolyWater
  ),
  [SkillTypes.TwoHanded]: skillJewelFactory(
    'Heated War Sigil',
    Dust.GroundCaerStone,
    Liquid.HeatFromAnUnearthlyPyre
  ),
  [SkillTypes.WindMagic]: skillJewelFactory(
    'Airy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.AirElementalEssence
  ),

  // FOCUSES

  [FocusTypes.BoneArmyFocus]: focusJewelFactory(
    'Ashen Rune',
    Liquid.UndeadAshAndHolyWater
  ),

  [FocusTypes.DarknessFocus]: focusJewelFactory(
    'Ice Rune',
    Liquid.FrostFromAWasteland
  ),

  [FocusTypes.RunecarvingFocus]: focusJewelFactory(
    'Heat Rune',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [FocusTypes.SummoningFocus]: focusJewelFactory('Vapor Rune', Liquid.SwampFog),

  [FocusTypes.SuppressionFocus]: focusJewelFactory(
    'Dust Rune',
    Liquid.UndeadAshAndHolyWater
  ),

  [FocusTypes.ArborealPathFocus]: focusJewelFactory(
    'Steaming Spell Stone',
    Liquid.SwampFog
  ),

  [FocusTypes.CreepingPathFocus]: focusJewelFactory(
    'Oozing Spell Stone',
    Liquid.TreantBlood
  ),

  [FocusTypes.EnchantmentsFocus]: focusJewelFactory(
    'Vapor Spell Stone',
    Liquid.SwampFog
  ),

  [FocusTypes.LightFocus]: focusJewelFactory(
    'Fire Spell Stone',
    Liquid.DraconicFire
  ),

  [FocusTypes.ManaFocus]: focusJewelFactory(
    'Water Spell Stone',
    Liquid.LeviathanBlood
  ),

  [FocusTypes.MentalismFocus]: focusJewelFactory(
    'Earth Spell Stone',
    Liquid.TreantBlood
  ),

  [FocusTypes.VerdantPathFocus]: focusJewelFactory(
    'Mineral Encrusted Spell Stone',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [FocusTypes.VoidFocus]: focusJewelFactory(
    'Ice Spell Stone',
    Liquid.FrostFromAWasteland
  ),

  [FocusTypes.BodyFocus]: focusJewelFactory(
    'Heat Sigil',
    Liquid.HeatFromAnUnearthlyPyre
  ),

  [FocusTypes.ColdFocus]: focusJewelFactory(
    'Ice Sigil',
    Liquid.FrostFromAWasteland
  ),

  [FocusTypes.DeathServantFocus]: focusJewelFactory(
    'Ashen Sigil',
    Liquid.UndeadAshAndHolyWater
  ),

  [FocusTypes.DeathsightFocus]: focusJewelFactory(
    'Vacuous Sigil',
    Liquid.SwampFog
  ),

  [FocusTypes.EarthFocus]: focusJewelFactory('Earth Sigil', Liquid.TreantBlood),

  [FocusTypes.FireFocus]: focusJewelFactory('Fire Sigil', Liquid.DraconicFire),

  [FocusTypes.MatterFocus]: focusJewelFactory(
    'Dust Sigil',
    Liquid.UndeadAshAndHolyWater
  ),

  [FocusTypes.MindFocus]: focusJewelFactory(
    'Water Sigil',
    Liquid.LeviathanBlood
  ),

  [FocusTypes.PainworkingFocus]: focusJewelFactory(
    'Salt Crusted Sigil',
    Liquid.MysticEnergy
  ),

  [FocusTypes.SpiritFocus]: focusJewelFactory('Vapor Sigil', Liquid.SwampFog),

  [FocusTypes.WindFocus]: focusJewelFactory(
    'Air Sigil',
    Liquid.AirElementalEssence
  ),

  // MISC
};
