import {Jewel} from '../materials';

// Bonus Cap
// e.g. lvl 50 spell duration cap:
// add = 0; multi = 0.5
// cap = LVL * multiplier + add
//     = 50 * 0.5 + 0 = 25

export interface Cap {
  readonly cap_add: number;
  readonly cap_mult: number;
}

export class Bonus {
  readonly name: string;
  readonly util: number = 0;
  readonly cap: Cap;
  value: number = 0;

  constructor(name: string, cap: Cap = {cap_add: 0, cap_mult: 0}, util = 0) {
    this.name = name;
    this.util = util;
    this.cap = cap;
  }

  getCap(level: number): number {
    return level * this.cap.cap_mult + this.cap.cap_add;
  }

  getUtil(): number {
    return this.util * this.value;
  }
}

export interface ImbuePoints {
  readonly imbue_add: number;
  readonly imbue_mult: number;
}

export class CraftAbleBonus extends Bonus {
  readonly tiers: number[];
  readonly imbue: ImbuePoints;
  readonly jewel: Jewel;

  constructor(
    name: string,
    cap: Cap,
    bonus: number[],
    imbue: ImbuePoints,
    jewel: Jewel,
    util = 0
  ) {
    super(name, cap, util);
    this.tiers = bonus;
    this.imbue = imbue;
    this.jewel = jewel;
  }

  getImbuePoints(tier: number): number {
    return (tier + this.imbue.imbue_add) * this.imbue.imbue_mult; // TODO not correct yet
  }
}
