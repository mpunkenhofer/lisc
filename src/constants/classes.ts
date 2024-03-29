import * as Race from './races';
import * as Skill from '../bonuses/skill';
import {ArmorType, Realm, ShieldSize, WeaponType} from '../common/types';
import {Bonus} from '../bonuses';
import * as Stats from '../bonuses/stats';

export interface Class {
  readonly name: string;
  readonly realm: Realm;
  readonly races: Race.Race[];
  readonly skills: Bonus[];
  readonly magic?: Stats.Stat;
  readonly armor: ArmorType;
  readonly shield?: ShieldSize;
  readonly weapons?: WeaponType[];
}

export const Armsman: Class = {
  name: 'Armsman',
  realm: Realm.Albion,
  races: [
    Race.Avalonian,
    Race.Briton,
    Race.HalfOgre,
    Race.Highlander,
    Race.Inconnu,
    Race.Saracen,
  ],
  skills: [
    Skill.Crush,
    Skill.Slash,
    Skill.Thrust,
    Skill.Polearm,
    Skill.TwoHanded,
    Skill.Shield,
    Skill.Parry,
    Skill.Crossbow,
  ],
  armor: ArmorType.Plate,
  shield: ShieldSize.Large,
  weapons: [
    WeaponType.Crush,
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.TwoHanded,
    WeaponType.Polearm,
    WeaponType.Crossbow,
  ],
};
export const Cleric: Class = {
  name: 'Cleric',
  realm: Realm.Albion,
  races: [Race.Avalonian, Race.Briton, Race.Highlander],
  magic: Stats.Piety,
  skills: [Skill.Rejuvenation, Skill.Enhancement, Skill.Smite],
  armor: ArmorType.Chain,
  shield: ShieldSize.Medium,
  weapons: [WeaponType.Crush, WeaponType.Staff],
};

export const Friar: Class = {
  name: 'Friar',
  realm: Realm.Albion,
  armor: ArmorType.Leather,
  races: [Race.Briton],
  magic: Stats.Piety,
  shield: ShieldSize.Small,
  skills: [Skill.Rejuvenation, Skill.Enhancement, Skill.Staff, Skill.Parry],
  weapons: [WeaponType.Crush, WeaponType.Staff],
};

export const Necromancer: Class = {
  name: 'Necromancer',
  realm: Realm.Albion,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Briton, Race.Inconnu, Race.Saracen],
  magic: Stats.Intelligence,
  skills: [Skill.Deathsight, Skill.Painworking, Skill.DeathServant],
  weapons: [WeaponType.Staff],
};

export const Theurgist: Class = {
  name: 'Theurgist',
  realm: Realm.Albion,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Avalonian, Race.Briton, Race.HalfOgre],
  magic: Stats.Intelligence,
  skills: [Skill.EarthMagic, Skill.ColdMagic, Skill.WindMagic],
  weapons: [WeaponType.Staff],
};

export const Wizard: Class = {
  name: 'Wizard',
  realm: Realm.Albion,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Avalonian, Race.Briton, Race.HalfOgre],
  magic: Stats.Intelligence,
  skills: [Skill.EarthMagic, Skill.ColdMagic, Skill.FireMagic],
  weapons: [WeaponType.Staff],
};

export const Reaver: Class = {
  name: 'Reaver',
  realm: Realm.Albion,
  armor: ArmorType.Chain,
  races: [Race.Briton, Race.Inconnu, Race.Saracen],
  magic: Stats.Piety,
  shield: ShieldSize.Large,
  skills: [
    Skill.Crush,
    Skill.Slash,
    Skill.Thrust,
    Skill.Flexible,
    Skill.Shield,
    Skill.Parry,
    Skill.SoulRending,
  ],
  // 2, 3, 4, 24, 42
  weapons: [
    WeaponType.Crush,
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.Flexible,
  ],
};

export const Mercenary: Class = {
  name: 'Mercenary',
  realm: Realm.Albion,
  armor: ArmorType.Chain,
  shield: ShieldSize.Medium,
  races: [
    Race.Avalonian,
    Race.Briton,
    Race.HalfOgre,
    Race.Highlander,
    Race.Inconnu,
    Race.Saracen,
  ],
  skills: [
    Skill.Crush,
    Skill.Slash,
    Skill.Thrust,
    Skill.Shield,
    Skill.Parry,
    Skill.DualWield,
  ],
  weapons: [
    WeaponType.Crush,
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.ShortBow,
  ],
};

export const Paladin: Class = {
  name: 'Paladin',
  realm: Realm.Albion,
  armor: ArmorType.Plate,
  shield: ShieldSize.Large,
  races: [Race.Avalonian, Race.Briton, Race.Highlander, Race.Saracen],
  magic: Stats.Piety,
  skills: [
    Skill.Crush,
    Skill.Slash,
    Skill.Thrust,
    Skill.Chants,
    Skill.Parry,
    Skill.Shield,
    Skill.TwoHanded,
  ],
  weapons: [
    WeaponType.Crush,
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.TwoHanded,
  ],
};

export const Cabalist: Class = {
  name: 'Cabalist',
  realm: Realm.Albion,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [
    Race.Avalonian,
    Race.Briton,
    Race.HalfOgre,
    Race.Inconnu,
    Race.Saracen,
  ],
  magic: Stats.Intelligence,
  skills: [Skill.BodyMagic, Skill.MatterMagic, Skill.SpiritMagic],
  weapons: [WeaponType.Staff],
};

export const Sorcerer: Class = {
  name: 'Sorcerer',
  realm: Realm.Albion,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [
    Race.Avalonian,
    Race.Briton,
    Race.HalfOgre,
    Race.Inconnu,
    Race.Saracen,
  ],
  magic: Stats.Intelligence,
  skills: [Skill.MindMagic, Skill.BodyMagic, Skill.MatterMagic],
  weapons: [WeaponType.Staff],
};

export const Infiltrator: Class = {
  name: 'Infiltrator',
  realm: Realm.Albion,
  armor: ArmorType.Leather,
  shield: ShieldSize.Small,
  races: [Race.Briton, Race.Inconnu, Race.Saracen],
  skills: [
    Skill.Stealth,
    Skill.Slash,
    Skill.Thrust,
    Skill.CriticalStrike,
    Skill.Envenom,
    Skill.DualWield,
  ],
  weapons: [
    WeaponType.Crush,
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.Staff,
  ],
};

export const Minstrel: Class = {
  name: 'Minstrel',
  realm: Realm.Albion,
  armor: ArmorType.Chain,
  shield: ShieldSize.Small,
  races: [Race.Briton, Race.Highlander, Race.Saracen],
  magic: Stats.Charisma,
  skills: [Skill.Stealth, Skill.Slash, Skill.Thrust, Skill.Instruments],
  weapons: [
    WeaponType.Slash,
    WeaponType.Thrust,
    WeaponType.Staff,
    WeaponType.Instrument,
  ],
};

export const Scout: Class = {
  name: 'Scout',
  realm: Realm.Albion,
  armor: ArmorType.Studded,
  shield: ShieldSize.Small,
  races: [Race.Briton, Race.Highlander, Race.Inconnu, Race.Saracen],
  skills: [
    Skill.Stealth,
    Skill.Slash,
    Skill.Thrust,
    Skill.Shield,
    Skill.Archery,
  ],
  weapons: [WeaponType.Slash, WeaponType.Thrust, WeaponType.Longbow],
};

export const Animist: Class = {
  name: 'Animist',
  realm: Realm.Hibernia,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Firbolg, Race.Sylvan],
  magic: Stats.Intelligence,
  skills: [Skill.ArborealPath, Skill.CreepingPath, Skill.VerdantPath],
  weapons: [WeaponType.Staff],
};

export const Bard: Class = {
  name: 'Bard',
  realm: Realm.Hibernia,
  armor: ArmorType.Reinforced,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Firbolg],
  magic: Stats.Charisma,
  skills: [
    Skill.Blades,
    Skill.Blunt,
    Skill.Regrowth,
    Skill.Nurture,
    Skill.Music,
  ],
  weapons: [WeaponType.Blade, WeaponType.Blunt, WeaponType.Instrument],
};

export const Blademaster: Class = {
  name: 'Blademaster',
  realm: Realm.Hibernia,
  armor: ArmorType.Reinforced,
  shield: ShieldSize.Medium,

  races: [Race.Celt, Race.Elf, Race.Firbolg, Race.Shar],
  skills: [
    Skill.Blades,
    Skill.Blunt,
    Skill.Piercing,
    Skill.Shield,
    Skill.Parry,
    Skill.CelticDual,
  ],
  weapons: [WeaponType.Blade, WeaponType.Blunt, WeaponType.Piercing],
};

export const Champion: Class = {
  name: 'Champion',
  realm: Realm.Hibernia,
  armor: ArmorType.Scale,
  shield: ShieldSize.Medium,
  races: [Race.Celt, Race.Elf, Race.Lurikeen, Race.Shar],
  magic: Stats.Intelligence,
  skills: [
    Skill.Blades,
    Skill.Blunt,
    Skill.Piercing,
    Skill.LargeWeaponry,
    Skill.Shield,
    Skill.Parry,
    Skill.Valor,
  ],
  weapons: [
    WeaponType.Blade,
    WeaponType.Blunt,
    WeaponType.Piercing,
    WeaponType.LargeWeapons,
  ],
};

export const Druid: Class = {
  name: 'Druid',
  realm: Realm.Hibernia,
  armor: ArmorType.Scale,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Firbolg, Race.Sylvan],
  magic: Stats.Empathy,
  skills: [Skill.Regrowth, Skill.Nurture, Skill.Nature],
  weapons: [WeaponType.Blade, WeaponType.Blunt, WeaponType.Staff],
};

export const Eldritch: Class = {
  name: 'Eldritch',
  realm: Realm.Hibernia,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Elf, Race.Lurikeen],
  magic: Stats.Intelligence,
  skills: [Skill.LightMagic, Skill.ManaMagic, Skill.VoidMagic],
  weapons: [WeaponType.Staff],
};

export const Enchanter: Class = {
  name: 'Enchanter',
  realm: Realm.Hibernia,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Elf, Race.Lurikeen],
  magic: Stats.Intelligence,
  skills: [Skill.LightMagic, Skill.ManaMagic, Skill.Enchantments],
  weapons: [WeaponType.Staff],
};

export const Hero: Class = {
  name: 'Hero',
  realm: Realm.Hibernia,
  armor: ArmorType.Scale,
  shield: ShieldSize.Large,
  races: [Race.Celt, Race.Firbolg, Race.Lurikeen, Race.Sylvan, Race.Shar],
  skills: [
    Skill.Blades,
    Skill.Blunt,
    Skill.Piercing,
    Skill.LargeWeaponry,
    Skill.CelticSpear,
    Skill.Shield,
    Skill.Parry,
  ],
  weapons: [
    WeaponType.Blade,
    WeaponType.Blunt,
    WeaponType.Piercing,
    WeaponType.LargeWeapons,
    WeaponType.CelticSpear,
  ],
};

export const Mentalist: Class = {
  name: 'Mentalist',
  realm: Realm.Hibernia,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Elf, Race.Lurikeen, Race.Shar],
  magic: Stats.Intelligence,
  skills: [Skill.LightMagic, Skill.ManaMagic, Skill.Mentalism],
  weapons: [WeaponType.Staff],
};

export const Nightshade: Class = {
  name: 'Nightshade',
  realm: Realm.Hibernia,
  armor: ArmorType.Leather,
  shield: ShieldSize.Small,
  races: [Race.Elf, Race.Lurikeen],
  magic: Stats.Intelligence,
  skills: [
    Skill.Stealth,
    Skill.Blades,
    Skill.Piercing,
    Skill.CriticalStrike,
    Skill.Envenom,
    Skill.CelticDual,
  ],
  weapons: [WeaponType.Blade, WeaponType.Piercing, WeaponType.Staff],
};

export const Ranger: Class = {
  name: 'Ranger',
  realm: Realm.Hibernia,
  armor: ArmorType.Reinforced,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Elf, Race.Lurikeen, Race.Shar],
  skills: [
    Skill.Stealth,
    Skill.Blades,
    Skill.Piercing,
    Skill.Archery,
    Skill.CelticDual,
  ],
  weapons: [WeaponType.Blade, WeaponType.Piercing, WeaponType.RecursiveBow],
};

export const Valewalker: Class = {
  name: 'Valewalker',
  realm: Realm.Hibernia,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Celt, Race.Firbolg, Race.Sylvan],
  magic: Stats.Intelligence,
  skills: [Skill.ArborealPath, Skill.Scythe, Skill.Parry],
  weapons: [WeaponType.Scythe],
};

export const Warden: Class = {
  name: 'Warden',
  realm: Realm.Hibernia,
  armor: ArmorType.Scale,
  shield: ShieldSize.Medium,
  races: [Race.Celt, Race.Firbolg, Race.Sylvan],
  magic: Stats.Empathy,
  skills: [
    Skill.Blades,
    Skill.Blunt,
    Skill.Regrowth,
    Skill.Nurture,
    Skill.Parry,
    Skill.Shield,
  ],
  weapons: [WeaponType.Blade, WeaponType.Blunt],
};

export const Berserker: Class = {
  name: 'Berserker',
  realm: Realm.Midgard,
  armor: ArmorType.Studded,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Troll, Race.Norseman, Race.Valkyn],
  skills: [Skill.Axe, Skill.Hammer, Skill.Sword, Skill.LeftAxe, Skill.Parry],
  weapons: [
    WeaponType.Sword,
    WeaponType.Hammer,
    WeaponType.Axe,
    WeaponType.LeftAxe,
  ],
};

export const Bonedancer: Class = {
  name: 'Bonedancer',
  realm: Realm.Midgard,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Kobold, Race.Troll, Race.Valkyn],
  magic: Stats.Piety,
  skills: [Skill.Darkness, Skill.Suppression, Skill.BoneArmy],
  weapons: [WeaponType.Staff],
};

export const Healer: Class = {
  name: 'Healer',
  realm: Realm.Midgard,
  armor: ArmorType.Chain,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Norseman, Race.Frostalf],
  magic: Stats.Piety,
  skills: [Skill.Mending, Skill.Augmentation, Skill.Pacification],
  weapons: [WeaponType.Hammer, WeaponType.Staff],
};

export const Hunter: Class = {
  name: 'Hunter',
  realm: Realm.Midgard,
  armor: ArmorType.Studded,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Kobold, Race.Norseman, Race.Valkyn, Race.Frostalf],
  skills: [
    Skill.Stealth,
    Skill.Sword,
    Skill.Spear,
    Skill.Archery,
    Skill.Beastcraft,
  ],
  weapons: [
    WeaponType.Sword,
    WeaponType.Hammer,
    WeaponType.Axe,
    WeaponType.Spear,
    WeaponType.CompositeBow,
  ],
};

export const Runemaster: Class = {
  name: 'Runemaster',
  realm: Realm.Midgard,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Kobold, Race.Norseman, Race.Frostalf],
  magic: Stats.Piety,
  skills: [Skill.Darkness, Skill.Suppression, Skill.Runecarving],
  weapons: [WeaponType.Staff],
};

export const Savage: Class = {
  name: 'Savage',
  realm: Realm.Midgard,
  armor: ArmorType.Studded,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Kobold, Race.Troll, Race.Norseman, Race.Valkyn],
  skills: [
    // Skill.Savagery, //not craft able ?
    Skill.Axe,
    Skill.Hammer,
    Skill.Sword,
    Skill.HandToHand,
    Skill.Parry,
  ],
  weapons: [
    WeaponType.Sword,
    WeaponType.Hammer,
    WeaponType.Axe,
    WeaponType.HandToHand,
  ],
};

export const Shadowblade: Class = {
  name: 'Shadowblade',
  realm: Realm.Midgard,
  armor: ArmorType.Leather,
  shield: ShieldSize.Small,
  races: [Race.Kobold, Race.Norseman, Race.Valkyn],
  skills: [
    Skill.Stealth,
    Skill.Axe,
    Skill.Sword,
    Skill.LeftAxe,
    Skill.CriticalStrike,
    Skill.Envenom,
  ],
  weapons: [
    WeaponType.Sword,
    WeaponType.Axe,
    WeaponType.LeftAxe,
    WeaponType.Staff,
  ],
};

export const Shaman: Class = {
  name: 'Shaman',
  realm: Realm.Midgard,
  armor: ArmorType.Chain,
  shield: ShieldSize.Small,
  races: [Race.Kobold, Race.Troll, Race.Frostalf],
  magic: Stats.Piety,
  skills: [Skill.Mending, Skill.Augmentation, Skill.Subterranean],
  weapons: [WeaponType.Hammer, WeaponType.Staff],
};

export const Skald: Class = {
  name: 'Skald',
  realm: Realm.Midgard,
  armor: ArmorType.Chain,
  shield: ShieldSize.Small,
  races: [Race.Dwarf, Race.Kobold, Race.Troll, Race.Norseman, Race.Frostalf],
  magic: Stats.Charisma,
  skills: [
    Skill.Axe,
    Skill.Hammer,
    Skill.Sword,
    Skill.Battlesongs,
    Skill.Parry,
  ],
  weapons: [WeaponType.Sword, WeaponType.Hammer, WeaponType.Axe],
};

export const Spiritmaster: Class = {
  name: 'Spiritmaster',
  realm: Realm.Midgard,
  armor: ArmorType.Cloth,
  shield: ShieldSize.Small,
  races: [Race.Kobold, Race.Norseman, Race.Frostalf],
  magic: Stats.Piety,
  skills: [Skill.Darkness, Skill.Suppression, Skill.Summoning],
  weapons: [WeaponType.Staff],
};

export const Thane: Class = {
  name: 'Thane',
  realm: Realm.Midgard,
  armor: ArmorType.Chain,
  shield: ShieldSize.Medium,
  races: [Race.Dwarf, Race.Troll, Race.Norseman, Race.Frostalf],
  magic: Stats.Piety,
  skills: [
    Skill.Axe,
    Skill.Hammer,
    Skill.Sword,
    Skill.Shield,
    Skill.Parry,
    Skill.Stormcalling,
  ],
  weapons: [WeaponType.Sword, WeaponType.Hammer, WeaponType.Axe],
};

export const Warrior: Class = {
  name: 'Warrior',
  realm: Realm.Midgard,
  armor: ArmorType.Chain,
  shield: ShieldSize.Large,
  races: [Race.Dwarf, Race.Kobold, Race.Troll, Race.Norseman, Race.Valkyn],
  skills: [
    Skill.Axe,
    Skill.Hammer,
    Skill.Sword,
    Skill.Shield,
    Skill.Parry,
    Skill.ThrownWeapons,
  ],
  weapons: [WeaponType.Sword, WeaponType.Hammer, WeaponType.Axe],
};
