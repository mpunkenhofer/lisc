import {Cap, CraftAbleBonus, ImbuePoints} from '.';

const cap: Cap = {cap_add: 1, cap_mult: 0.2};
const imbue: ImbuePoints = {imbue_add: -5, imbue_mult: 5};
const gem_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const util = 5.0;

export class Skill extends CraftAbleBonus {
  constructor(name: string, id: number) {
    super(name, id, cap, gem_values, imbue, util);
  }
}

export enum SkillTypes {
  TwoHanded = 20,
  BodyMagic,
  Chants,
  CriticalStrike,
  Crossbow,
  Crush,
  DeathServant,
  Deathsight,
  DualWield,
  EarthMagic,
  Enhancement,
  Envenom,
  FireMagic,
  Flexible,
  ColdMagic,
  Instruments,
  Longbow,
  MatterMagic,
  MindMagic,
  PainWorking,
  Parry,
  Polearm,
  Rejuvenation,
  Shield,
  Slash,
  Smiting,
  SoulRending,
  SpiritMagic,
  Staff,
  Stealth,
  Thrust,
  WindMagic,
  Sword,
  Hammer,
  Axe,
  LeftAxe,
  Spear,
  Mending,
  Augmentation,
  Darkness = 60, // skipped 59
  Suppression,
  Runecarving,
  Stormcalling,
  Beastcraft,
  LightMagic,
  VoidMagic,
  ManaMagic,
  Battlesongs = 69, // skipped 68
  Enchantment,
  Blades = 72, // skipped 71
  Blunt,
  Piercing,
  LargeWeaponry,
  Mentalism,
  Regrowth,
  Nurture,
  Nature,
  Music,
  CelticDual,
  CelticSpear,
  RecurveBow,
  Valor,
  Subterranean,
  BoneArmy,
  VerdantPath,
  CreepingPath,
  ArborealPath,
  Scythe,
  ThrownWeapons,
  HandToHand,
  ShortBow,
  Pacification,
  Savagery,
  Nightshade,
  Pathfinding,
  Summoning,
}

export const TwoHanded = new Skill('Two Handed', SkillTypes.TwoHanded);
export const BodyMagic = new Skill('Body Magic', SkillTypes.BodyMagic);
export const Chants = new Skill('Chants', SkillTypes.Chants);
export const CriticalStrike = new Skill(
  'Critical Strike',
  SkillTypes.CriticalStrike
);
export const Crossbow = new Skill('Crossbow', SkillTypes.Crossbow);
export const Crush = new Skill('Crush', SkillTypes.Crush);
export const DeathServant = new Skill('Death Servant', SkillTypes.DeathServant);
export const Deathsight = new Skill('Deathsight', SkillTypes.Deathsight);
export const DualWield = new Skill('Dual Wield', SkillTypes.DualWield);
export const EarthMagic = new Skill('Earth Magic', SkillTypes.EarthMagic);
export const Enhancement = new Skill('Enhancement', SkillTypes.Enhancement);
export const Envenom = new Skill('Envenom', SkillTypes.Envenom);
export const FireMagic = new Skill('Fire Magic', SkillTypes.FireMagic);
export const Flexible = new Skill('Flexible Weapon', SkillTypes.Flexible);
export const ColdMagic = new Skill('Cold Magic', SkillTypes.ColdMagic);
export const Instruments = new Skill('Instruments', SkillTypes.Instruments);
export const Longbow = new Skill('Longbow', SkillTypes.Longbow);
export const MatterMagic = new Skill('Matter Magic', SkillTypes.MatterMagic);
export const MindMagic = new Skill('Mind Magic', SkillTypes.MindMagic);
export const PainWorking = new Skill('Pain Working', SkillTypes.PainWorking);
export const Parry = new Skill('Parry', SkillTypes.Parry);
export const Polearm = new Skill('Polearm', SkillTypes.Polearm);
export const Rejuvenation = new Skill('Rejuvenation', SkillTypes.Rejuvenation);
export const Shield = new Skill('Shield', SkillTypes.Shield);
export const Slash = new Skill('Slash', SkillTypes.Slash);
export const Smiting = new Skill('Smiting', SkillTypes.Smiting);
export const SoulRending = new Skill('Soul Rending', SkillTypes.SoulRending);
export const SpiritMagic = new Skill('Spirit Magic', SkillTypes.SpiritMagic);
export const Staff = new Skill('Staff', SkillTypes.Staff);
export const Stealth = new Skill('Stealth', SkillTypes.Stealth);
export const Thrust = new Skill('Thrust', SkillTypes.Thrust);
export const WindMagic = new Skill('Wind Magic', SkillTypes.WindMagic);
export const Sword = new Skill('Sword', SkillTypes.Sword);
export const Hammer = new Skill('Hammer', SkillTypes.Hammer);
export const Axe = new Skill('Axe', SkillTypes.Axe);
export const LeftAxe = new Skill('Left Axe', SkillTypes.LeftAxe);
export const Spear = new Skill('Spear', SkillTypes.Spear);
export const Mending = new Skill('Mending', SkillTypes.Mending);
export const Augmentation = new Skill('Augmentation', SkillTypes.Augmentation);
export const Darkness = new Skill('Darkness', SkillTypes.Darkness);
export const Suppression = new Skill('Suppression', SkillTypes.Suppression);
export const Runecarving = new Skill('Runecarving', SkillTypes.Runecarving);
export const Stormcalling = new Skill('Stormcalling', SkillTypes.Stormcalling);
export const Beastcraft = new Skill('Beastcraft', SkillTypes.Beastcraft);
export const LightMagic = new Skill('Light Magic', SkillTypes.LightMagic);
export const VoidMagic = new Skill('Void Magic', SkillTypes.VoidMagic);
export const ManaMagic = new Skill('Mana Magic', SkillTypes.ManaMagic);
export const Battlesongs = new Skill('Battlesongs', SkillTypes.Battlesongs);
export const Enchantment = new Skill('Enchantment', SkillTypes.Enchantment);
export const Blades = new Skill('Blades', SkillTypes.Blades);
export const Blunt = new Skill('Blunt', SkillTypes.Blunt);
export const Piercing = new Skill('Piercing', SkillTypes.Piercing);
export const LargeWeaponry = new Skill(
  'Large Weaponry',
  SkillTypes.LargeWeaponry
);
export const Mentalism = new Skill('Mentalism', SkillTypes.Mentalism);
export const Regrowth = new Skill('Regrowth', SkillTypes.Regrowth);
export const Nurture = new Skill('Nurture', SkillTypes.Nurture);
export const Nature = new Skill('Nature', SkillTypes.Nature);
export const Music = new Skill('Music', SkillTypes.Music);
export const CelticDual = new Skill('Celtic Dual', SkillTypes.CelticDual);
export const CelticSpear = new Skill('Celtic Spear', SkillTypes.CelticSpear);
export const RecurveBow = new Skill('RecurveBow', SkillTypes.RecurveBow);
export const Valor = new Skill('Valor', SkillTypes.Valor);
export const Subterranean = new Skill('Subterranean', SkillTypes.Subterranean);
export const BoneArmy = new Skill('Bone Army', SkillTypes.BoneArmy);
export const VerdantPath = new Skill('Verdant Path', SkillTypes.VerdantPath);
export const CreepingPath = new Skill('Creeping Path', SkillTypes.CreepingPath);
export const ArborealPath = new Skill('Arboreal Path', SkillTypes.ArborealPath);
export const Scythe = new Skill('Scythe', SkillTypes.Scythe);
export const ThrownWeapons = new Skill(
  'Thrown Weapons',
  SkillTypes.ThrownWeapons
);
export const HandToHand = new Skill('Hand To Hand', SkillTypes.HandToHand);
export const ShortBow = new Skill('Short Bow', SkillTypes.ShortBow);
export const Pacification = new Skill('Pacification', SkillTypes.Pacification);
export const Savagery = new Skill('Savagery', SkillTypes.Savagery);
export const Nightshade = new Skill('Nightshade', SkillTypes.Nightshade);
export const Pathfinding = new Skill('Pathfinding', SkillTypes.Pathfinding);
export const Summoning = new Skill('Summoning', SkillTypes.Summoning);
