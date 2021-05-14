import * as Race from "./races";
import { Stat, ArmorType, Realm, ShieldSize, Skill, WeaponType } from "./types";

export interface Class {
    name: string;
    realm: Realm;
    races: Race.Race[];
    skills: Skill[];
    magic?: Stat;
    armor: ArmorType;
    shield: ShieldSize;
    weapon?: WeaponType[];
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
        Race.Saracen
    ],
    skills: [
        Skill.Crush,
        Skill.Slash,
        Skill.Thrust,
        Skill.Polearm,
        Skill.Two_Handed,
        Skill.Shield,
        Skill.Parry,
        Skill.Crossbow
    ],
    armor: ArmorType.Plate,
    shield: ShieldSize.Large
}
export const Cleric: Class = {
    name: 'Cleric',
    realm: Realm.Albion,
    races: [
        Race.Avalonian,
        Race.Briton,
        Race.Highlander,
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Rejuvenation,
        Skill.Enhancement,
        Skill.Smite,
    ],
    armor: ArmorType.Chain,
    shield: ShieldSize.Medium,
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Friar: Class = {
    name: 'Friar',

    realm: Realm.Albion,
    armor: ArmorType.Leather,
    races: [
        Race.Briton
    ],
    magic: Stat.Piety,
    shield: ShieldSize.Small,
    skills: [
        Skill.Rejuvenation,
        Skill.Enhancement,
        Skill.Staff,
        Skill.Parry
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Necromancer: Class = {
    name: 'Necromancer',

    realm: Realm.Albion,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Briton,
        Race.Inconnu,
        Race.Saracen
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Deathsight,
        Skill.Painworking,
        Skill.Death_Servant
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Theurgist: Class = {
    name: 'Theurgist',

    realm: Realm.Albion,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Avalonian,
        Race.Briton,
        Race.HalfOgre
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Earth_Magic,
        Skill.Cold_Magic,
        Skill.Wind_Magic
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Wizard: Class = {
    name: 'Wizard',

    realm: Realm.Albion,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Avalonian,
        Race.Briton,
        Race.HalfOgre
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Earth_Magic,
        Skill.Cold_Magic,
        Skill.Fire_Magic
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Reaver: Class = {
    name: 'Reaver',

    realm: Realm.Albion,
    armor: ArmorType.Chain,
    races: [
        Race.Briton,
        Race.Inconnu,
        Race.Saracen
    ],
    magic: Stat.Piety,
    shield: ShieldSize.Large,
    skills: [
        Skill.Crush,
        Skill.Slash,
        Skill.Thrust,
        Skill.Flexible,
        Skill.Shield,
        Skill.Parry,
        Skill.Soulrending
    ]
}
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
        Race.Saracen
    ],
    skills: [
        Skill.Crush,
        Skill.Slash,
        Skill.Thrust,
        Skill.Shield,
        Skill.Parry,
        Skill.Dual_Wield
    ],
    weapon: [
        WeaponType.Short_Bow
    ]
}
export const Paladin: Class = {
    name: 'Paladin',

    realm: Realm.Albion,
    armor: ArmorType.Plate,
    shield: ShieldSize.Large,
    races: [
        Race.Avalonian,
        Race.Briton,
        Race.Highlander,
        Race.Saracen
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Crush,
        Skill.Slash,
        Skill.Thrust,
        Skill.Chants,
        Skill.Parry,
        Skill.Shield,
        Skill.Two_Handed
    ]
}
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
        Race.Saracen
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Body_Magic,
        Skill.Matter_Magic,
        Skill.Sprit_Magic
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
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
        Race.Saracen
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Mind_Magic,
        Skill.Body_Magic,
        Skill.Matter_Magic
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Slash,
        WeaponType.Thrust,
        WeaponType.Shield
    ]
}
export const Infiltrator: Class = {
    name: 'Infiltrator',

    realm: Realm.Albion,
    armor: ArmorType.Leather,
    shield: ShieldSize.Small,
    races: [
        Race.Briton,
        Race.Inconnu,
        Race.Saracen
    ],
    skills: [
        Skill.Stealth,
        Skill.Slash,
        Skill.Thrust,
        Skill.Critical_Strike,
        Skill.Envenom,
        Skill.Dual_Wield
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Shield,
        WeaponType.Crossbow
    ]
}
export const Minstrel: Class = {
    name: 'Minstrel',
    realm: Realm.Albion,
    armor: ArmorType.Chain,
    shield: ShieldSize.Small,
    races: [
        Race.Briton,
        Race.Highlander,
        Race.Saracen
    ],
    magic: Stat.Charisma,
    skills: [
        Skill.Stealth,
        Skill.Slash,
        Skill.Thrust,
        Skill.Instruments
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Shield
    ]
}
export const Scout: Class = {
    name: 'Scout',

    realm: Realm.Albion,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Briton,
        Race.Highlander,
        Race.Inconnu,
        Race.Saracen
    ],
    skills: [
        Skill.Stealth,
        Skill.Slash,
        Skill.Thrust,
        Skill.Shield,
        Skill.Longbow
    ],
    weapon: [
        WeaponType.Crush,
        WeaponType.Short_Bow
    ]
}

export const Animist: Class = {
    name: 'Animist',

    realm: Realm.Hibernia,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Firbolg,
        Race.Sylvan
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Arboreal_Path,
        Skill.Creeping_Path,
        Skill.Verdant_Path
    ],
    weapon: [
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}

export const Bard: Class = {
    name: 'Bard',

    realm: Realm.Hibernia,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Firbolg,
    ],
    magic: Stat.Charisma,
    skills: [
        Skill.Blades,
        Skill.Blunt,
        Skill.Regrowth,
        Skill.Nurture,
        Skill.Music
    ],
    weapon: [
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}
export const Blademaster: Class = {
    name: 'Blademaster',

    realm: Realm.Hibernia,
    armor: ArmorType.Studded,
    shield: ShieldSize.Medium,

    races: [
        Race.Celt,
        Race.Elf,
        Race.Firbolg,
        Race.Shar
    ],
    skills: [
        Skill.Blades,
        Skill.Blunt,
        Skill.Piercing,
        Skill.Shield,
        Skill.Parry,
        Skill.Celtic_Dual
    ]
}
export const Champion: Class = {
    name: 'Champion',

    realm: Realm.Hibernia,
    armor: ArmorType.Chain,
    shield: ShieldSize.Medium,
    races: [
        Race.Celt,
        Race.Elf,
        Race.Lurikeen,
        Race.Shar
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Blades,
        Skill.Blunt,
        Skill.Piercing,
        Skill.Large_Weaponry,
        Skill.Shield,
        Skill.Parry,
        Skill.Valor
    ]
}
export const Druid: Class = {
    name: 'Druid',

    realm: Realm.Hibernia,
    armor: ArmorType.Chain,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Firbolg,
        Race.Sylvan
    ],
    magic: Stat.Empathy,
    skills: [
        Skill.Regrowth,
        Skill.Nurture,
        Skill.Nature
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing
    ]
}
export const Eldritch: Class = {
    name: 'Eldritch',

    realm: Realm.Hibernia,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Elf,
        Race.Lurikeen
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Light,
        Skill.Mana,
        Skill.Void
    ],
    weapon: [
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}
export const Enchanter: Class = {
    name: 'Enchanter',

    realm: Realm.Hibernia,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Elf,
        Race.Lurikeen
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Light,
        Skill.Mana,
        Skill.Enchantments
    ],
    weapon: [
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}
export const Hero: Class = {
    name: 'Hero',

    realm: Realm.Hibernia,
    armor: ArmorType.Chain,
    shield: ShieldSize.Large,
    races: [
        Race.Celt,
        Race.Firbolg,
        Race.Lurikeen,
        Race.Sylvan,
        Race.Shar
    ],
    skills: [
        Skill.Blades,
        Skill.Blunt,
        Skill.Piercing,
        Skill.Large_Weaponry,
        Skill.Celtic_Spear,
        Skill.Shield,
        Skill.Parry
    ]
}
export const Mentalist: Class = {
    name: 'Mentalist',

    realm: Realm.Hibernia,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Elf,
        Race.Lurikeen,
        Race.Shar,
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Light,
        Skill.Mana,
        Skill.Mentalism
    ],
    weapon: [
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}
export const Nightshade: Class = {
    name: 'Nightshade',

    realm: Realm.Hibernia,
    armor: ArmorType.Leather,
    shield: ShieldSize.Small,
    races: [
        Race.Elf,
        Race.Lurikeen,
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Stealth,
        Skill.Blades,
        Skill.Piercing,
        Skill.Critical_Strike,
        Skill.Envenom,
        Skill.Celtic_Dual
    ],
    weapon: [
        WeaponType.Blunt,
        WeaponType.Shield
    ]
}
export const Ranger: Class = {
    name: 'Ranger',

    realm: Realm.Hibernia,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Elf,
        Race.Lurikeen,
        Race.Shar
    ],
    skills: [
        Skill.Stealth,
        Skill.Blades,
        Skill.Piercing,
        Skill.Recurve_Bow,
        Skill.Celtic_Dual,
        Skill.Pathfinding
    ],
    weapon: [
        WeaponType.Blunt,
        WeaponType.Shield
    ]
}
export const Valewalker: Class = {
    name: 'Valewalker',

    realm: Realm.Hibernia,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Celt,
        Race.Firbolg,
        Race.Sylvan
    ],
    magic: Stat.Intelligence,
    skills: [
        Skill.Arboreal_Path,
        Skill.Scythe,
        Skill.Parry
    ],
    weapon: [
        WeaponType.Blades,
        WeaponType.Blunt,
        WeaponType.Piercing,
        WeaponType.Shield
    ]
}

export const Warden: Class = {
    name: 'Warden',

    realm: Realm.Hibernia,
    armor: ArmorType.Chain,
    shield: ShieldSize.Medium,
    races: [
        Race.Celt,
        Race.Firbolg,
        Race.Sylvan
    ],
    magic: Stat.Empathy,
    skills: [
        Skill.Blades,
        Skill.Blunt,
        Skill.Regrowth,
        Skill.Nurture,
        Skill.Parry,
        Skill.Shield
    ],
    weapon: [
        WeaponType.Piercing
    ]
}
export const Berserker: Class = {
    name: 'Berserker',

    realm: Realm.Midgard,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Troll,
        Race.Norseman,
        Race.Valkyn
    ],
    skills: [
        Skill.Axe,
        Skill.Hammer,
        Skill.Sword,
        Skill.Left_Axe,
        Skill.Parry
    ],
    weapon: [
        WeaponType.Shield
    ]
}
export const Bonedancer: Class = {
    name: 'Bonedancer',

    realm: Realm.Midgard,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Kobold,
        Race.Troll,
        Race.Valkyn
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Darkness,
        Skill.Suppression,
        Skill.Bone_Army
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer,
        WeaponType.Sword
    ]
}
export const Healer: Class = {
    name: 'Healer',

    realm: Realm.Midgard,
    armor: ArmorType.Chain,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Norseman,
        Race.Frostalf
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Mending,
        Skill.Augmentation,
        Skill.Pacification
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer,
        WeaponType.Sword
    ]
}
export const Hunter: Class = {
    name: 'Hunter',

    realm: Realm.Midgard,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Kobold,
        Race.Norseman,
        Race.Valkyn,
        Race.Frostalf
    ],
    skills: [
        Skill.Stealth,
        Skill.Sword,
        Skill.Spear,
        Skill.Composite_Bow,
        Skill.Beastcraft
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer
    ]
}
export const Runemaster: Class = {
    name: 'Runemaster',

    realm: Realm.Midgard,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Kobold,
        Race.Norseman,
        Race.Frostalf
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Darkness,
        Skill.Suppression,
        Skill.Runecarving
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer,
        WeaponType.Sword
    ]
}
export const Savage: Class = {
    name: 'Savage',

    realm: Realm.Midgard,
    armor: ArmorType.Studded,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Kobold,
        Race.Troll,
        Race.Norseman,
        Race.Valkyn],
    skills: [
        Skill.Axe,
        Skill.Hammer,
        Skill.Sword,
        Skill.Hand2hand,
        Skill.Parry,
        Skill.Savagery
    ],
    weapon: [
        WeaponType.Shield
    ]
}
export const Shadowblade: Class = {
    name: 'Shadowblade',

    realm: Realm.Midgard,
    armor: ArmorType.Leather,
    shield: ShieldSize.Small,
    races: [
        Race.Kobold,
        Race.Norseman,
        Race.Valkyn
    ],
    skills: [
        Skill.Stealth,
        Skill.Axe,
        Skill.Sword,
        Skill.Left_Axe,
        Skill.Critical_Strike,
        Skill.Envenom
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Hammer
    ]
}
export const Shaman: Class = {
    name: 'Shaman',

    realm: Realm.Midgard,
    armor: ArmorType.Chain,
    shield: ShieldSize.Small,
    races: [
        Race.Kobold,
        Race.Troll,
        Race.Frostalf
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Mending,
        Skill.Augmentation,
        Skill.Subterranean
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer,
        WeaponType.Sword
    ]
}
export const Skald: Class = {
    name: 'Skald',

    realm: Realm.Midgard,
    armor: ArmorType.Chain,
    shield: ShieldSize.Small,
    races: [
        Race.Dwarf,
        Race.Kobold,
        Race.Troll,
        Race.Norseman,
        Race.Frostalf
    ],
    magic: Stat.Charisma,
    skills: [
        Skill.Axe,
        Skill.Hammer,
        Skill.Sword,
        Skill.Battlesongs,
        Skill.Parry
    ],
    weapon: [
        WeaponType.Shield
    ]
}
export const Spiritmaster: Class = {
    name: 'Spiritmaster',
    realm: Realm.Midgard,
    armor: ArmorType.Cloth,
    shield: ShieldSize.Small,
    races: [
        Race.Kobold,
        Race.Norseman,
        Race.Frostalf
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Darkness,
        Skill.Suppression,
        Skill.Summoning
    ],
    weapon: [
        WeaponType.Shield,
        WeaponType.Axe,
        WeaponType.Hammer,
        WeaponType.Sword
    ]
}
export const Thane: Class = {
    name: 'Thane',
    realm: Realm.Midgard,
    armor: ArmorType.Chain,
    shield: ShieldSize.Medium,
    races: [
        Race.Dwarf,
        Race.Troll,
        Race.Norseman,
        Race.Frostalf
    ],
    magic: Stat.Piety,
    skills: [
        Skill.Axe,
        Skill.Hammer,
        Skill.Sword,
        Skill.Shield,
        Skill.Parry,
        Skill.Stormcalling
    ]
}

export const Warrior: Class = {
    name: 'Warrior',
    realm: Realm.Midgard,
    armor: ArmorType.Chain,
    shield: ShieldSize.Large,
    races: [
        Race.Dwarf,
        Race.Kobold,
        Race.Troll,
        Race.Norseman,
        Race.Valkyn
    ],
    skills: [
        Skill.Axe,
        Skill.Hammer,
        Skill.Sword,
        Skill.Shield,
        Skill.Parry,
        Skill.Thrown_Weapons
    ]
}