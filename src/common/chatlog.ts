import { ArmorType, Item, Realm, Slot } from "./types";

const matcher = (regex: RegExp, data: string): string | null => {
    const m = regex.exec(data);
    return (m && m.length > 1) ? m[1] : null;
}

const slots = new Map([
    ['robe', Slot.Body],
    ['robes', Slot.Body],
    ['skin', Slot.Body],
    ['vest', Slot.Body],
    ['warchain', Slot.Body],
    ['warplate', Slot.Body],
    ['chitin', Slot.Body],
    ['hauberk', Slot.Body],
    ['vambraces', Slot.Arms],
    ['sleeves', Slot.Arms],
    ['greaves', Slot.Legs],
    ['leggings', Slot.Legs],
    ['leggins', Slot.Legs],
    ['pants', Slot.Legs],
    ['cap', Slot.Head],
    ['crown', Slot.Head],
    ['gauntlets', Slot.Hands],
    ['gloves', Slot.Hands],
    ['boots', Slot.Feet],
    ['ring', Slot.Ring],
    ['wrap', Slot.Bracer],
    ['bracer', Slot.Bracer],
    ['cowl', Slot.Cloak],
    ['cloak', Slot.Cloak],
    ['necklace', Slot.Necklace],
    ['medallion', Slot.Necklace],
    ['choker', Slot.Necklace],
    ['belt', Slot.Belt],
    ['girdle', Slot.Belt],
    ['jewel', Slot.Jewel],
    ['flayer', Slot.TwoHanded],
    ['ravager', Slot.TwoHanded],
    ['slicer', Slot.TwoHanded],
    ['glaive', Slot.TwoHanded],
    ['breaker', Slot.TwoHanded],
    ['staff', Slot.TwoHanded],
    ['harp', Slot.Ranged],
    ['bow', Slot.Ranged],
    ['shield', Slot.RightHand],
    ['defender', Slot.RightHand],
    ['protector', Slot.RightHand]
]);

const inferSlot = (name: string | null): Slot | null => {
    if (name) {
        const words = name.toLowerCase().split(' ');

        for (const word of words) {
            const slot = slots.get(word.trim())

            if (slot !== undefined)
                return slot;
        }
    }

    return null;
}

const inferArmorType = (abs: number, realm: Realm): ArmorType | null => {
    switch(abs) {
        case 0: return ArmorType.Cloth;
        case 10: return ArmorType.Leather;
        case 19: return realm != Realm.Hibernia ? ArmorType.Studded : ArmorType.Reinforced;
        case 27: return realm != Realm.Hibernia ? ArmorType.Chain : ArmorType.Scale;
        case 34: return ArmorType.Plate;
        default: return null;
    }
}

export type ParseLogOptions = {
    realm?: Realm;
    slot?: Slot;
    source?: string;
}

export const parseLog = (data: string, options?: ParseLogOptions): Item[] => {
    const matches = [...data.matchAll(/<Begin Info:[^>]+>[^<]+?<End Info>/gi)];
    const items: Item[] = []

    for (const match of matches) {
        if (match.length > 0) {
            //const item = match[0].replace(/\[\d+:\d+:\d+\] */g, '');  //remove log timestamps
            const item = match[0];

            const name = matcher(/<Begin Info: ([^>]+)>/i, item);
            const realm = (options && options.realm) ? options.realm : Realm.All;
            const slot = (options && options.slot) ? options.slot : inferSlot(name);
            const source = (options && options.source) ? options.source : '';
            const util = matcher(/Total Utility: (\d+)/i, item);
            const sutil = matcher(/Single Skill Utility: (\d+)/i, item);
            const qual = matcher(/- (\d+)% Quality/i, item);
            const abs = matcher(/- (\d+)% Absorption/i, item);
            const af = matcher(/- (\d+) Base Factor/i, item);
            const dps = matcher(/- ([+-]?([0-9]*[.])?[0-9]+) Base DPS/i, item);
            const speed = matcher(/([+-]?([0-9]*[.])?[0-9]+) Weapon Speed/i, item);

            const bonus_matches = [...item.matchAll(/(((\w+\s)+)?\w+): ([+-]?\d+) (pts|lvls|%)/gi)];

           // console.log(item)
        }
    }

    return items;
}

