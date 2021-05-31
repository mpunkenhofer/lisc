REALM_NAMES = [
    'Albion',
    'Hibernia',
    'Midgard',
    'All'
]

CLASS_NAMES = [
    'Berserker',
    'Bonedancer',
    'Healer',
    'Hunter',
    'Runemaster',
    'Savage',
    'Shadowblade',
    'Shaman',
    'Skald',
    'Spiritmaster',
    'Thane',
    'Warrior',
    'Animist',
    'Bard',
    'Blademaster',
    'Champion',
    'Druid',
    'Eldritch',
    'Enchanter',
    'Hero',
    'Mentalist',
    'Nightshade',
    'Ranger',
    'Warden',
    'Valewalker',
    'Armsman',
    'Cabalist',
    'Cleric',
    'Friar',
    'Heretic',
    'Infiltrator',
    'Mercenary',
    'Minstrel',
    'Necromancer',
    'Paladin',
    'Reaver',
    'Scout',
    'Sorcerer',
    'Theurgist',
    'Wizard',
    'All'
]

SLOT_NAMES = [
    'Torso',
    'Arms',
    'Legs',
    'Head',
    'Hands',
    'Feet',
    'Necklace',
    'Cloak',
    'Belt',
    'Jewel',
    'Ring',
    'Bracer',
    'Left Hand',
    'Right Hand',
    'Two-Handed',
    'Ranged'
]

WEAPON_NAMES = [
    'Small Shield',
    'Medium Shield',
    'Large Shield',
    'Staff',
    'Instrument',
    'Bow',
    'Axe',
    'Hammer',
    'Sword',
    'Hand to Hand',
    'Spear',
    'Throwing',
    'Composite Bow',
    'Blunt',
    'Blade',
    'Piercing',
    'Large Weapon',
    'Celtic Spear',
    'Scythe',
    'Short Bow',
    'Recurve Bow',
    'Crush',
    'Slash',
    'Thrust',
    'Flexible',
    'Polearm',
    'Two Handed',
    'Crossbow',
    'Longbow',
    'Unspecified'
]

ARMOR_NAMES = [
    'Cloth',
    'Leather',
    'Studded',
    'Reinforced',
    'Chain',
    'Scale',
    'Plate',
    'Unspecified'
]

BONUSES = [
    ('Strength', 'Stat'),
    ('Constitution', 'Stat'),
    ('Dexterity', 'Stat'),
    ('Quickness', 'Stat'),
    ('Intelligence', 'Stat'),
    ('Piety', 'Stat'),
    ('Charisma', 'Stat'),
    ('Empathy', 'Stat'),
    ('Hits', 'Stat'),
    ('Power', 'Stat'),
    ('Acuity', 'Stat'),
    ('Body', 'Resistance'),
    ('Cold', 'Resistance'),
    ('Heat', 'Resistance'),
    ('Energy', 'Resistance'),
    ('Matter', 'Resistance'),
    ('Spirit', 'Resistance'),
    ('Crush', 'Resistance'),
    ('Thrust', 'Resistance'),
    ('Slash', 'Resistance')
]


def create_dict(n): return dict(zip(range(len(n)), n))


CLASSES = create_dict(CLASS_NAMES)
REALMS = create_dict(REALM_NAMES)
SLOTS = create_dict(SLOT_NAMES)
WEAPON_TYPES = create_dict(WEAPON_NAMES)
ARMOR_TYPES = create_dict(ARMOR_NAMES)
