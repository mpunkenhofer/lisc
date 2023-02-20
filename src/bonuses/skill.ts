import {Cap, CraftAbleBonus, ImbuePoints} from '.';

const cap: Cap = {cap_add: 1, cap_mult: 0.2};
const imbue: ImbuePoints = {imbue_add: -5, imbue_mult: 5};
const gem_values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const util = 5.0;

// TODO: Skills to potentially remove:
// - ShortBow

export enum AllSkillType {
  Magic,
  Melee,
  DualWield,
}

export class Skill extends CraftAbleBonus {
  readonly allType?: AllSkillType;
  constructor(
    name: string,
    id: number,
    allType: AllSkillType | undefined = undefined
  ) {
    super(name, id, cap, gem_values, imbue, util);
    this.allType = allType;
  }
}

export enum Types {
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
  Painworking,
  Parry,
  Polearm,
  Rejuvenation,
  Shield,
  Slash,
  Smite,
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
  Enchantments,
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
  Archery,
}

export const TwoHanded = new Skill(
  'Two Handed',
  Types.TwoHanded,
  AllSkillType.Melee
);
export const BodyMagic = new Skill(
  'Body Magic',
  Types.BodyMagic,
  AllSkillType.Magic
);
export const Chants = new Skill('Chants', Types.Chants, AllSkillType.Magic);
export const CriticalStrike = new Skill(
  'Critical Strike',
  Types.CriticalStrike
);
export const Crossbow = new Skill('Crossbow', Types.Crossbow);
export const Crush = new Skill('Crush', Types.Crush, AllSkillType.Melee);
export const DeathServant = new Skill(
  'Death Servant',
  Types.DeathServant,
  AllSkillType.Magic
);
export const Deathsight = new Skill(
  'Deathsight',
  Types.Deathsight,
  AllSkillType.Magic
);
export const DualWield = new Skill(
  'Dual Wield',
  Types.DualWield,
  AllSkillType.DualWield
);
export const EarthMagic = new Skill(
  'Earth Magic',
  Types.EarthMagic,
  AllSkillType.Magic
);
export const Enhancement = new Skill(
  'Enhancement',
  Types.Enhancement,
  AllSkillType.Magic
);
export const Envenom = new Skill('Envenom', Types.Envenom);
export const FireMagic = new Skill(
  'Fire Magic',
  Types.FireMagic,
  AllSkillType.Magic
);
export const Flexible = new Skill(
  'Flexible Weapon',
  Types.Flexible,
  AllSkillType.Melee
);
export const ColdMagic = new Skill(
  'Cold Magic',
  Types.ColdMagic,
  AllSkillType.Magic
);
export const Instruments = new Skill(
  'Instruments',
  Types.Instruments,
  AllSkillType.Magic
);
export const Longbow = new Skill('Longbow', Types.Longbow);

export const MatterMagic = new Skill(
  'Matter Magic',
  Types.MatterMagic,
  AllSkillType.Magic
);

export const MindMagic = new Skill(
  'Mind Magic',
  Types.MindMagic,
  AllSkillType.Magic
);

export const Painworking = new Skill(
  'Painworking',
  Types.Painworking,
  AllSkillType.Magic
);
export const Parry = new Skill('Parry', Types.Parry);
export const Polearm = new Skill('Polearm', Types.Polearm, AllSkillType.Melee);
export const Rejuvenation = new Skill(
  'Rejuvenation',
  Types.Rejuvenation,
  AllSkillType.Magic
);
export const Shield = new Skill('Shield', Types.Shield);
export const Slash = new Skill('Slash', Types.Slash, AllSkillType.Melee);
export const Smite = new Skill('Smiting', Types.Smite, AllSkillType.Magic);
export const SoulRending = new Skill(
  'Soul Rending',
  Types.SoulRending,
  AllSkillType.Magic
);
export const SpiritMagic = new Skill(
  'Spirit Magic',
  Types.SpiritMagic,
  AllSkillType.Magic
);
export const Staff = new Skill('Staff', Types.Staff, AllSkillType.Melee);
export const Stealth = new Skill('Stealth', Types.Stealth);
export const Thrust = new Skill('Thrust', Types.Thrust, AllSkillType.Melee);
export const WindMagic = new Skill(
  'Wind Magic',
  Types.WindMagic,
  AllSkillType.Magic
);
export const Sword = new Skill('Sword', Types.Sword, AllSkillType.Melee);
export const Hammer = new Skill('Hammer', Types.Hammer, AllSkillType.Melee);
export const Axe = new Skill('Axe', Types.Axe, AllSkillType.Melee);
export const LeftAxe = new Skill('Left Axe', Types.LeftAxe, AllSkillType.Melee);
export const Spear = new Skill('Spear', Types.Spear, AllSkillType.Melee);
export const Mending = new Skill('Mending', Types.Mending, AllSkillType.Magic);
export const Augmentation = new Skill(
  'Augmentation',
  Types.Augmentation,
  AllSkillType.Magic
);
export const Darkness = new Skill(
  'Darkness',
  Types.Darkness,
  AllSkillType.Magic
);
export const Suppression = new Skill(
  'Suppression',
  Types.Suppression,
  AllSkillType.Magic
);
export const Runecarving = new Skill(
  'Runecarving',
  Types.Runecarving,
  AllSkillType.Magic
);
export const Stormcalling = new Skill(
  'Stormcalling',
  Types.Stormcalling,
  AllSkillType.Magic
);
export const Beastcraft = new Skill('Beastcraft', Types.Beastcraft);
export const LightMagic = new Skill(
  'Light Magic',
  Types.LightMagic,
  AllSkillType.Magic
);
export const VoidMagic = new Skill(
  'Void Magic',
  Types.VoidMagic,
  AllSkillType.Magic
);
export const ManaMagic = new Skill(
  'Mana Magic',
  Types.ManaMagic,
  AllSkillType.Magic
);
export const Battlesongs = new Skill(
  'Battlesongs',
  Types.Battlesongs,
  AllSkillType.Magic
);
export const Enchantments = new Skill(
  'Enchantments',
  Types.Enchantments,
  AllSkillType.Magic
);
export const Blades = new Skill('Blades', Types.Blades, AllSkillType.Melee);
export const Blunt = new Skill('Blunt', Types.Blunt, AllSkillType.Melee);
export const Piercing = new Skill(
  'Piercing',
  Types.Piercing,
  AllSkillType.Melee
);
export const LargeWeaponry = new Skill(
  'Large Weaponry',
  Types.LargeWeaponry,
  AllSkillType.Melee
);
export const Mentalism = new Skill(
  'Mentalism',
  Types.Mentalism,
  AllSkillType.Magic
);
export const Regrowth = new Skill(
  'Regrowth',
  Types.Regrowth,
  AllSkillType.Magic
);
export const Nurture = new Skill('Nurture', Types.Nurture, AllSkillType.Magic);
export const Nature = new Skill('Nature', Types.Nature, AllSkillType.Magic);
export const Music = new Skill('Music', Types.Music, AllSkillType.Magic);
export const CelticDual = new Skill(
  'Celtic Dual',
  Types.CelticDual,
  AllSkillType.DualWield
);
export const CelticSpear = new Skill(
  'Celtic Spear',
  Types.CelticSpear,
  AllSkillType.Melee
);
export const RecurveBow = new Skill('RecurveBow', Types.RecurveBow);
export const Valor = new Skill('Valor', Types.Valor, AllSkillType.Magic);
export const Subterranean = new Skill(
  'Subterranean',
  Types.Subterranean,
  AllSkillType.Magic
);
export const BoneArmy = new Skill(
  'Bone Army',
  Types.BoneArmy,
  AllSkillType.Magic
);
export const VerdantPath = new Skill(
  'Verdant Path',
  Types.VerdantPath,
  AllSkillType.Magic
);
export const CreepingPath = new Skill(
  'Creeping Path',
  Types.CreepingPath,
  AllSkillType.Magic
);
export const ArborealPath = new Skill(
  'Arboreal Path',
  Types.ArborealPath,
  AllSkillType.Magic
);
export const Scythe = new Skill('Scythe', Types.Scythe, AllSkillType.Melee);
export const ThrownWeapons = new Skill('Thrown Weapons', Types.ThrownWeapons);
export const HandToHand = new Skill(
  'Hand To Hand',
  Types.HandToHand,
  AllSkillType.Melee
);
export const ShortBow = new Skill('Short Bow', Types.ShortBow);
export const Pacification = new Skill(
  'Pacification',
  Types.Pacification,
  AllSkillType.Magic
);
export const Savagery = new Skill('Savagery', Types.Savagery);
export const Nightshade = new Skill('Nightshade', Types.Nightshade);
export const Pathfinding = new Skill('Pathfinding', Types.Pathfinding);
export const Summoning = new Skill(
  'Summoning',
  Types.Summoning,
  AllSkillType.Magic
);
export const Archery = new Skill('Archery', Types.Archery);
