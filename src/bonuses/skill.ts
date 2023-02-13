import {CraftAbleBonus} from '.';
import {Jewel, Dust, Liquid} from '../materials';

//TODO: Short Bow

export class Skill extends CraftAbleBonus {
  constructor(name: string, jewel: Jewel) {
    super(name, jewel, 5.0);
  }
}

const skillJewelFactory = (name: string, dust: Dust, liquid: Liquid): Jewel => {
  return {
    name,
    dust,
    liquid,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  };
};

export const Augmentation = new Skill(
  'Augmentation',
  skillJewelFactory(
    'Airy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.AirElementalEssence
  )
);

export const Axe = new Skill(
  'Axe',
  skillJewelFactory(
    'Earthen War Rune',
    Dust.GroundGiantBone,
    Liquid.TreantBlood
  )
);

export const Battlesongs = new Skill(
  'Battlesongs',
  skillJewelFactory(
    'Airy Primal Rune',
    Dust.GroundVendoBone,
    Liquid.AirElementalEssence
  )
);

export const Beastcraft = new Skill(
  'Beastcraft',
  skillJewelFactory(
    'Earthen Primal Rune',
    Dust.GroundVendoBone,
    Liquid.TreantBlood
  )
);

export const BoneArmy = new Skill(
  'Bone Army',
  skillJewelFactory(
    'Ashen Primal Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  )
);

export const Subterranean = new Skill(
  'Subterranean',
  skillJewelFactory(
    'Fiery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.DraconicFire
  )
);

export const CompositeBow = new Skill(
  'Composite Bow',
  skillJewelFactory(
    'Airy War Rune',
    Dust.GroundGiantBone,
    Liquid.AirElementalEssence
  )
);

export const CriticalStrike = new Skill(
  'Critical Strike',
  skillJewelFactory(
    'Heated Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const Cursing = new Skill(
  'Cursing',
  skillJewelFactory(
    'Blighted Primal Rune',
    Dust.GroundVendoBone,
    Liquid.TreantBlood
  )
);

export const Darkness = new Skill(
  'Darkness',
  skillJewelFactory(
    'Icy Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.FrostFromAWasteland
  )
);

export const Hammer = new Skill(
  'Hammer',
  skillJewelFactory('Fiery War Rune', Dust.GroundGiantBone, Liquid.DraconicFire)
);

export const HandToHand = new Skill(
  'Hand To Hand',
  skillJewelFactory(
    'Lightning Charged War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  )
);

export const Hexing = new Skill(
  'Hexing',
  skillJewelFactory(
    'Unholy Primal Rune',
    Dust.GroundVendoBone,
    Liquid.AirElementalEssence
  )
);

export const LeftAxe = new Skill(
  'Left Axe',
  skillJewelFactory(
    'Icy War Rune',
    Dust.GroundGiantBone,
    Liquid.FrostFromAWasteland
  )
);

export const Mending = new Skill(
  'Mending',
  skillJewelFactory(
    'Watery Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.LeviathanBlood
  )
);

export const Pacification = new Skill(
  'Pacification',
  skillJewelFactory(
    'Earthen Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.TreantBlood
  )
);

export const Parry = new Skill(
  'Parry',
  skillJewelFactory(
    'Vapor Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.SwampFog
  )
);

export const Runecarving = new Skill(
  'Runecarving',
  skillJewelFactory(
    'Heated Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const Shield = new Skill(
  'Shield',
  skillJewelFactory(
    'Fiery Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.DraconicFire
  )
);

export const Spear = new Skill(
  'Spear',
  skillJewelFactory(
    'Heated War Rune',
    Dust.GroundGiantBone,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const Staff = new Skill(
  'Staff',
  skillJewelFactory(
    'Earthen Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.TreantBlood
  )
);

export const Stealth = new Skill(
  'Stealth',
  skillJewelFactory(
    'Airy Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.AirElementalEssence
  )
);

export const Stormcalling = new Skill(
  'Stormcalling',
  skillJewelFactory(
    'Fiery Primal Rune',
    Dust.GroundVendoBone,
    Liquid.DraconicFire
  )
);

export const Summoning = new Skill(
  'Summoning',
  skillJewelFactory('Vapor Chaos Rune', Dust.SootFromNilfheim, Liquid.SwampFog)
);

export const Suppression = new Skill(
  'Suppression',
  skillJewelFactory(
    'Dusty Chaos Rune',
    Dust.SootFromNilfheim,
    Liquid.UndeadAshAndHolyWater
  )
);

export const Sword = new Skill(
  'Sword',
  skillJewelFactory(
    'Watery War Rune',
    Dust.GroundGiantBone,
    Liquid.LeviathanBlood
  )
);

export const ThrownWeapons = new Skill(
  'Thrown Weapons',
  skillJewelFactory('Vapor War Rune', Dust.GroundGiantBone, Liquid.SwampFog)
);

export const ArborealPath = new Skill(
  'Arboreal Path',
  skillJewelFactory(
    'Steaming Nature Spell Stone',
    Dust.FairyDust,
    Liquid.SwampFog
  )
);

export const Blades = new Skill(
  'Blades',
  skillJewelFactory(
    'Watery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.LeviathanBlood
  )
);

export const Blunt = new Skill(
  'Blunt',
  skillJewelFactory(
    'Fiery War Spell Stone',
    Dust.UnseelieDust,
    Liquid.DraconicFire
  )
);

export const CelticDual = new Skill(
  'Celtic Dual',
  skillJewelFactory(
    'Icy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.FrostFromAWasteland
  )
);

export const CelticSpear = new Skill(
  'Celtic Spear',
  skillJewelFactory(
    'Earthen War Spell Stone',
    Dust.UnseelieDust,
    Liquid.TreantBlood
  )
);

export const CreepingPath = new Skill(
  'Creeping Path',
  skillJewelFactory(
    'Oozing Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  )
);

export const Enchantment = new Skill(
  'Enchantment',
  skillJewelFactory(
    'Vapor Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.SwampFog
  )
);

export const LargeWeaponry = new Skill(
  'Large Weaponry',
  skillJewelFactory(
    'Heated War Spell Stone',
    Dust.UnseelieDust,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const LightMagic = new Skill(
  'Light Magic',
  skillJewelFactory(
    'Fiery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.DraconicFire
  )
);

export const ManaMagic = new Skill(
  'Mana Magic',
  skillJewelFactory(
    'Watery Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.LeviathanBlood
  )
);

export const Mentalism = new Skill(
  'Mentalism',
  skillJewelFactory(
    'Earthen Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.TreantBlood
  )
);

export const Music = new Skill(
  'Music',
  skillJewelFactory(
    'Airy Nature Spell Stone',
    Dust.FairyDust,
    Liquid.AirElementalEssence
  )
);

export const Nature = new Skill(
  'Nature',
  skillJewelFactory(
    'Earthen Nature Spell Stone',
    Dust.FairyDust,
    Liquid.TreantBlood
  )
);

export const Nurture = new Skill(
  'Nurture',
  skillJewelFactory(
    'Fiery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.DraconicFire
  )
);

export const Piercing = new Skill(
  'Piercing',
  skillJewelFactory(
    'Dusty War Spell Stone',
    Dust.UnseelieDust,
    Liquid.UndeadAshAndHolyWater
  )
);

export const RecurveBow = new Skill(
  'Recurve Bow',
  skillJewelFactory(
    'Airy War Spell Stone',
    Dust.UnseelieDust,
    Liquid.AirElementalEssence
  )
);

export const Regrowth = new Skill(
  'Regrowth',
  skillJewelFactory(
    'Watery Nature Spell Stone',
    Dust.FairyDust,
    Liquid.LeviathanBlood
  )
);

export const Scythe = new Skill(
  'Scythe',
  skillJewelFactory('Light War Spell Stone', Dust.UnseelieDust, Liquid.SunLight)
);

export const ShadowMastery = new Skill(
  'Shadow Mastery',
  skillJewelFactory(
    'Shadowy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.SwampFog
  )
);

export const Valor = new Skill(
  'Valor',
  skillJewelFactory(
    'Airy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.AirElementalEssence
  )
);

export const VerdantPath = new Skill(
  'Verdant Path',
  skillJewelFactory(
    'Mineral Encrusted Nature Spell Stone',
    Dust.FairyDust,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const VoidMagic = new Skill(
  'Void Magic',
  skillJewelFactory(
    'Icy Arcane Spell Stone',
    Dust.OtherWorldlyDust,
    Liquid.FrostFromAWasteland
  )
);

export const BodyMagic = new Skill(
  'Body Magic',
  skillJewelFactory(
    'Heated Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const Chants = new Skill(
  'Chants',
  skillJewelFactory(
    'Earthen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.TreantBlood
  )
);

export const ColdMagic = new Skill(
  'Cold Magic',
  skillJewelFactory(
    'Icy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.FrostFromAWasteland
  )
);

export const Crossbow = new Skill(
  'Crossbow',
  skillJewelFactory('Vapor War Sigil', Dust.GroundCaerStone, Liquid.SwampFog)
);

export const Crush = new Skill(
  'Crush',
  skillJewelFactory(
    'Fiery War Sigil',
    Dust.GroundCaerStone,
    Liquid.DraconicFire
  )
);

export const DeathServant = new Skill(
  'Death Servant',
  skillJewelFactory(
    'Ashen Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.UndeadAshAndHolyWater
  )
);

export const Deathsight = new Skill(
  'Deathsight',
  skillJewelFactory(
    'Vacuous Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  )
);

export const DualWield = new Skill(
  'Dual Wield',
  skillJewelFactory(
    'Icy War Sigil',
    Dust.GroundCaerStone,
    Liquid.FrostFromAWasteland
  )
);

export const EarthMagic = new Skill(
  'Earth Magic',
  skillJewelFactory(
    'Earthen Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.TreantBlood
  )
);

export const Enhancement = new Skill(
  'Enhancement',
  skillJewelFactory(
    'Airy Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.AirElementalEssence
  )
);

export const FireMagic = new Skill(
  'Fire Magic',
  skillJewelFactory(
    'Fiery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.DraconicFire
  )
);

export const Flexible = new Skill(
  'Flexible',
  skillJewelFactory(
    'Molten Magma War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  )
);

export const Instruments = new Skill(
  'Instruments',
  skillJewelFactory(
    'Vapor Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.SwampFog
  )
);

export const Longbow = new Skill(
  'Longbow',
  skillJewelFactory(
    'Airy War Sigil',
    Dust.GroundCaerStone,
    Liquid.AirElementalEssence
  )
);

export const Envenom = new Skill(
  'Envenom',
  skillJewelFactory(
    'Dusty Battle Jewel',
    Dust.BloodiedBattlefieldDirt,
    Liquid.UndeadAshAndHolyWater
  )
);

export const MatterMagic = new Skill(
  'Matter Magic',
  skillJewelFactory(
    'Dusty Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.UndeadAshAndHolyWater
  )
);

export const MindMagic = new Skill(
  'Mind Magic',
  skillJewelFactory(
    'Watery Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.LeviathanBlood
  )
);

export const Painworking = new Skill(
  'Painworking',
  skillJewelFactory(
    'Salt Crusted Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.MysticEnergy
  )
);

export const Polearm = new Skill(
  'Polearm',
  skillJewelFactory(
    'Earthen War Sigil',
    Dust.GroundCaerStone,
    Liquid.TreantBlood
  )
);

export const Rejuvenation = new Skill(
  'Rejuvenation',
  skillJewelFactory(
    'Watery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.LeviathanBlood
  )
);

export const Slash = new Skill(
  'Slash',
  skillJewelFactory(
    'Watery War Sigil',
    Dust.GroundCaerStone,
    Liquid.LeviathanBlood
  )
);

export const Smiting = new Skill(
  'Smiting',
  skillJewelFactory(
    'Fiery Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.DraconicFire
  )
);

export const SoulRending = new Skill(
  'Soul Rending',
  skillJewelFactory(
    'Steaming Fervor Sigil',
    Dust.GroundBlessedUndeadBone,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const SpiritMagic = new Skill(
  'Spirit Magic',
  skillJewelFactory(
    'Vapor Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.SwampFog
  )
);

export const Thrust = new Skill(
  'Thrust',
  skillJewelFactory(
    'Dusty War Sigil',
    Dust.GroundCaerStone,
    Liquid.UndeadAshAndHolyWater
  )
);

export const TwoHanded = new Skill(
  'Two Handed',
  skillJewelFactory(
    'Heated War Sigil',
    Dust.GroundCaerStone,
    Liquid.HeatFromAnUnearthlyPyre
  )
);

export const WindMagic = new Skill(
  'Wind Magic',
  skillJewelFactory(
    'Airy Evocation Sigil',
    Dust.GroundCaveCrystal,
    Liquid.AirElementalEssence
  )
);
