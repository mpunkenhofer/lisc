import {Bonus, Dust, Liquid} from '.';
import {BonusType} from '../../common/types';

export type Skill = Bonus;

export const Augmentation: Skill = {
  name: 'Augmentation',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Axe: Skill = {
  name: 'Axe',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Battlesongs: Skill = {
  name: 'Battlesongs',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Primal Rune',
    dust: Dust.GroundVendoBone,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Beastcraft: Skill = {
  name: 'Beastcraft',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Primal Rune',
    dust: Dust.GroundVendoBone,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const BoneArmy: Skill = {
  name: 'Bone Army',
  type: BonusType.Skill,
  jewel: {
    name: 'Ashen Primal Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Subterranean: Skill = {
  name: 'Subterranean',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const CompositeBow: Skill = {
  name: 'Composite Bow',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const CriticalStrike: Skill = {
  name: 'Critical Strike',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Cursing: Skill = {
  name: 'Cursing',
  type: BonusType.Skill,
  jewel: {
    name: 'Blighted Primal Rune',
    dust: Dust.GroundVendoBone,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Darkness: Skill = {
  name: 'Darkness',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Hammer: Skill = {
  name: 'Hammer',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const HandToHand: Skill = {
  name: 'Hand to Hand',
  type: BonusType.Skill,
  jewel: {
    name: 'Lightning Charged War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Hexing: Skill = {
  name: 'Hexing',
  type: BonusType.Skill,
  jewel: {
    name: 'Unholy Primal Rune',
    dust: Dust.GroundVendoBone,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const LeftAxe: Skill = {
  name: 'Left Axe',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Mending: Skill = {
  name: 'Mending',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Pacification: Skill = {
  name: 'Pacification',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Parry: Skill = {
  name: 'Parry',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Runecarving: Skill = {
  name: 'Runecarving',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Shield: Skill = {
  name: 'Shield',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Spear: Skill = {
  name: 'Spear',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Staff: Skill = {
  name: 'Staff',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Stealth: Skill = {
  name: 'Stealth',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Stormcalling: Skill = {
  name: 'Stormcalling',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Primal Rune',
    dust: Dust.GroundVendoBone,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Summoning: Skill = {
  name: 'Summoning',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Suppression: Skill = {
  name: 'Suppression',
  type: BonusType.Skill,
  jewel: {
    name: 'Dusty Chaos Rune',
    dust: Dust.SootFromNilfheim,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Sword: Skill = {
  name: 'Sword',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const ThrownWeapons: Skill = {
  name: 'Thrown Weapons',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor War Rune',
    dust: Dust.GroundGiantBone,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const ArborealPath: Skill = {
  name: 'Arboreal Path',
  type: BonusType.Skill,
  jewel: {
    name: 'Steaming Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Blades: Skill = {
  name: 'Blades',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Blunt: Skill = {
  name: 'Blunt',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const CelticDual: Skill = {
  name: 'Celtic Dual',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const CelticSpear: Skill = {
  name: 'Celtic Spear',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const CreepingPath: Skill = {
  name: 'Creeping Path',
  type: BonusType.Skill,
  jewel: {
    name: 'Oozing Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Enchantment: Skill = {
  name: 'Enchantment',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const LargeWeaponry: Skill = {
  name: 'Large Weaponry',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const LightMagic: Skill = {
  name: 'Light Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const ManaMagic: Skill = {
  name: 'Mana Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Mentalism: Skill = {
  name: 'Mentalism',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Music: Skill = {
  name: 'Music',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Nature: Skill = {
  name: 'Nature',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Nurture: Skill = {
  name: 'Nurture',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Piercing: Skill = {
  name: 'Piercing',
  type: BonusType.Skill,
  jewel: {
    name: 'Dusty War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const RecurveBow: Skill = {
  name: 'Recurve Bow',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Regrowth: Skill = {
  name: 'Regrowth',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Scythe: Skill = {
  name: 'Scythe',
  type: BonusType.Skill,
  jewel: {
    name: 'Light War Spell Stone',
    dust: Dust.UnseelieDust,
    liquid: Liquid.SunLight,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const ShadowMastery: Skill = {
  name: 'Shadow Mastery',
  type: BonusType.Skill,
  jewel: {
    name: 'Shadowy Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Valor: Skill = {
  name: 'Valor',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const VerdantPath: Skill = {
  name: 'Verdant Path',
  type: BonusType.Skill,
  jewel: {
    name: 'Mineral Encrusted Nature Spell Stone',
    dust: Dust.FairyDust,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const VoidMagic: Skill = {
  name: 'Void Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy Arcane Spell Stone',
    dust: Dust.OtherWorldlyDust,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const BodyMagic: Skill = {
  name: 'Body Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Chants: Skill = {
  name: 'Chants',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const ColdMagic: Skill = {
  name: 'Cold Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Crossbow: Skill = {
  name: 'Crossbow',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Crush: Skill = {
  name: 'Crush',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const DeathServant: Skill = {
  name: 'Death Servant',
  type: BonusType.Skill,
  jewel: {
    name: 'Ashen Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Deathsight: Skill = {
  name: 'Deathsight',
  type: BonusType.Skill,
  jewel: {
    name: 'Vacuous Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const DualWield: Skill = {
  name: 'Dual Wield',
  type: BonusType.Skill,
  jewel: {
    name: 'Icy War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.FrostFromAWasteland,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const EarthMagic: Skill = {
  name: 'Earth Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Enhancement: Skill = {
  name: 'Enhancement',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const FireMagic: Skill = {
  name: 'Fire Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Flexible: Skill = {
  name: 'Flexible',
  type: BonusType.Skill,
  jewel: {
    name: 'Molten Magma War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Instruments: Skill = {
  name: 'Instruments',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Longbow: Skill = {
  name: 'Longbow',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Envenom: Skill = {
  name: 'Envenom',
  type: BonusType.Skill,
  jewel: {
    name: 'Dusty Battle Jewel',
    dust: Dust.BloodiedBattlefieldDirt,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const MatterMagic: Skill = {
  name: 'Matter Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Dusty Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const MindMagic: Skill = {
  name: 'Mind Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Painworking: Skill = {
  name: 'Painworking',
  type: BonusType.Skill,
  jewel: {
    name: 'Salt Crusted Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.MysticEnergy,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Polearm: Skill = {
  name: 'Polearm',
  type: BonusType.Skill,
  jewel: {
    name: 'Earthen War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.TreantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Rejuvenation: Skill = {
  name: 'Rejuvenation',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Slash: Skill = {
  name: 'Slash',
  type: BonusType.Skill,
  jewel: {
    name: 'Watery War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.LeviathanBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Smiting: Skill = {
  name: 'Smiting',
  type: BonusType.Skill,
  jewel: {
    name: 'Fiery Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.DraconicFire,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Soulrending: Skill = {
  name: 'Soulrending',
  type: BonusType.Skill,
  jewel: {
    name: 'Steaming Fervor Sigil',
    dust: Dust.GroundBlessedUndeadBone,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const SpiritMagic: Skill = {
  name: 'SpiritMagic',
  type: BonusType.Skill,
  jewel: {
    name: 'Vapor Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.SwampFog,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const Thrust: Skill = {
  name: 'Thrust',
  type: BonusType.Skill,
  jewel: {
    name: 'Dusty War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.UndeadAshAndHolyWater,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const TwoHanded: Skill = {
  name: 'Two Handed',
  type: BonusType.Skill,
  jewel: {
    name: 'Heated War Sigil',
    dust: Dust.GroundCaerStone,
    liquid: Liquid.HeatFromAnUnearthlyPyre,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};

export const WindMagic: Skill = {
  name: 'Wind Magic',
  type: BonusType.Skill,
  jewel: {
    name: 'Airy Evocation Sigil',
    dust: Dust.GroundCaveCrystal,
    liquid: Liquid.AirElementalEssence,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
};
