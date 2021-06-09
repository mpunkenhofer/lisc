import {ArmorType, Item, Realm, Slot, WeaponType} from './types';
import * as Stats from './../constants/bonuses/stat';
import * as Resists from './../constants/bonuses/resistance';
import * as Focuses from './../constants/bonuses/focus';
import * as Skills from './../constants/bonuses/skill';
import {Bonus} from '../constants/bonuses';
import {Class} from '../constants/classes';

const matcher = (regex: RegExp, data: string): string | null => {
  const m = regex.exec(data);
  return m && m.length > 1 ? m[1] : null;
};

const toNumber = (s: string | null) => {
  return s !== null ? Number(s) : null;
};

const makeBonusesMap = (): Map<string, Bonus> => {
  const map = new Map<string, Bonus>();
  const f = (stat: Bonus) =>
    map.set(stat.name.replace(/\s/g, '').toLowerCase(), stat);

  Object.values(Stats).map(f);
  Object.values(Resists).map(f);
  Object.values(Focuses).map(f);
  Object.values(Skills).map(f);

  return map;
};

const bonuses = makeBonusesMap();

const makeSlotsMap = (aliases: [string[], Slot][]): Map<string, Slot> => {
  const map = new Map<string, Slot>();
  const f = (n: string, s: Slot) => map.set(n, s);

  for (const pair of aliases) {
    const [item_aliases, slot] = pair;
    item_aliases.map(alias => f(alias, slot));
  }

  return map;
};

const jewelry_slots = makeSlotsMap([
  [['ring', 'band'], Slot.Ring],
  [['bracer', 'bracelet', 'wrap'], Slot.Bracer],
  [['cloak', 'cape', 'cowl', 'mantle'], Slot.Cloak],
  [['necklace', 'chain', 'choker', 'medallion'], Slot.Necklace],
  [['belt', 'girdle', 'sash'], Slot.Belt],
  [['jewel', 'gem', 'quiver'], Slot.Jewel],
]);

const armor_slots = makeSlotsMap([
  [
    [
      'robe',
      'robes',
      'skin',
      'vest',
      'mail',
      'warchain',
      'warplate',
      'chitin',
      'hauberk',
      'breastplate',
      'chestplate',
      'jerkin',
      'carapace',
    ],
    Slot.Body,
  ],
  [['sleeves', 'armguards', 'vambraces'], Slot.Arms],
  [['leggings', 'leggins', 'pants', 'greaves'], Slot.Legs],
  [['cap', 'crown', 'tiara'], Slot.Head],
  [['gloves', 'gauntlets'], Slot.Hands],
  [['boots'], Slot.Feet],
]);

const inferSlot = (name: string | null, map: Map<string, Slot>): Slot => {
  if (name) {
    const words = name.toLowerCase().split(' ');

    for (const word of words) {
      const slot = map.get(word.trim());

      if (slot !== undefined) return slot;
    }
  }

  return Slot.Unspecified;
};

const inferArmorType = (abs: number | null, realm: Realm): ArmorType => {
  if (abs !== null) {
    switch (abs) {
      case 0:
        return ArmorType.Cloth;
      case 10:
        return ArmorType.Leather;
      case 19:
        return realm !== Realm.Hibernia
          ? ArmorType.Studded
          : ArmorType.Reinforced;
      case 27:
        return realm !== Realm.Hibernia ? ArmorType.Chain : ArmorType.Scale;
      case 34:
        return ArmorType.Plate;
    }
  }

  return ArmorType.Unspecified;
};

const inferWeaponType = (
  _name: string,
  _realm: Realm,
  _dps: Number | null,
  _speed: Number | null,
  _dmg_type: string | null,
  shield_size: string | null
): [WeaponType, Slot] => {
  if (shield_size) {
    switch (shield_size) {
      case 'Small':
        return [WeaponType.SmallShield, Slot.RightHand];
      case 'Medium':
        return [WeaponType.MediumShield, Slot.RightHand];
      case 'Large':
        return [WeaponType.LargeShield, Slot.RightHand];
      default:
        return [WeaponType.SmallShield, Slot.RightHand];
    }
  }

  return [WeaponType.Unspecified, Slot.Unspecified];
};

const inferBonus = (s: string): Bonus | null => {
  const b = bonuses.get(s.replace(/\s/g, '').toLowerCase());
  return b !== undefined ? b : null;
};

export type ParseLogOptions = {
  realm?: Realm;
  slot?: Slot;
  source?: string;
};

export const parseLog = (
  data: string,
  options?: ParseLogOptions
): [Item[], Item[]] => {
  const matches = [...data.matchAll(/<Begin Info:[^>]+>[^<]+?<End Info>/gi)];
  const s_items: Item[] = [];
  const f_items: Item[] = [];

  for (const match of matches) {
    if (match.length > 0) {
      //const item = match[0].replace(/\[\d+:\d+:\d+\] */g, '');  //remove log timestamps
      const item = match[0];

      const name = matcher(/<Begin Info: ([^>]+)>/i, item);

      if (!name) {
        console.error(`Failed to parse item name on item: ${item}`);
        continue;
      }

      const realm = options && options.realm ? options.realm : Realm.All;
      let slot: Slot =
        options && options.slot ? options.slot : Slot.Unspecified;
      const source = options && options.source ? options.source : null;

      // use Number() conversion directly here since we always expect items to have a utility and quality
      const utility = Number(matcher(/Total Utility: (\d+)/i, item));
      const quality = Number(matcher(/- (\d+)% Quality/i, item));

      const sutility = toNumber(matcher(/Single Skill Utility: (\d+)/i, item));

      const abs = toNumber(matcher(/- (\d+)% Absorption/i, item));
      const af = toNumber(matcher(/- (\d+) Base Factor/i, item));

      const dps = toNumber(
        matcher(/- ([+-]?([0-9]*[.])?[0-9]+) Base DPS/i, item)
      );
      const speed = toNumber(
        matcher(/([+-]?([0-9]*[.])?[0-9]+) (Weapon|Shield) Speed/i, item)
      );
      const dmg_type = matcher(/- Damage Type: (\w+)/i, item);
      const shield_size = matcher(/- Shield Size: (\w+)/i, item);

      // TODO: parse usable by
      const bonus_matches = [
        ...item.matchAll(/(((\w+\s)+)?\w+): ([+-]?\d+) (pts|lvls|%)/gi),
      ];

      const bonuses: [Bonus, number][] = [];

      for (const match of bonus_matches) {
        const bonus = inferBonus(match[1]);
        if (bonus) bonuses.push([bonus, Number(match[4])]);
      }

      if (!(bonuses.length > 0)) {
        console.error(`Failed to parse item bonuses. Item: ${name}`);
        continue;
      }

      const classes: Class[] = [];

      const armor_type = inferArmorType(abs, realm);
      const [weapon_type, weapon_slot] = inferWeaponType(
        name,
        realm,
        dps,
        speed,
        dmg_type,
        shield_size
      );

      // Attempt to infer slot from item name and additional information
      if (slot !== Slot.Unspecified) {
        if (armor_type !== ArmorType.Unspecified) {
          slot = inferSlot(name, armor_slots);
        } else if (weapon_slot !== Slot.Unspecified) {
          slot = weapon_slot;
        } else {
          slot = inferSlot(name, jewelry_slots);
        }

        if (slot === Slot.Unspecified) {
          f_items.push({
            name,
            slot,
            realm,
            source,
            classes,
            bonuses,
            quality,
            utility,
            sutility,
            af,
            abs,
            dps,
            speed,
            armor_type,
            weapon_type,
          });

          continue;
        }
      }

      s_items.push({
        name,
        slot,
        realm,
        source,
        classes,
        bonuses,
        quality,
        utility,
        sutility,
        af,
        abs,
        dps,
        speed,
        armor_type,
        weapon_type,
      });
    }
  }

  return [s_items, f_items];
};
