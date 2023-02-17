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
  readonly id: number;
  readonly util: number = 0;
  readonly cap: Cap;
  value: number = 0;

  constructor(
    name: string,
    id: number,
    cap: Cap = {cap_add: 0, cap_mult: 0},
    util = 0
  ) {
    this.name = name;
    this.id = id;
    this.util = util;
    this.cap = cap;
  }

  getCap(level: number): number {
    return level * this.cap.cap_mult + this.cap.cap_add;
  }

  getUtil(): number {
    return this.util * this.value;
  }

  clone(): Bonus {
    return new Bonus(this.name, this.id, this.cap, this.util);
  }
}

export interface ImbuePoints {
  readonly imbue_add: number;
  readonly imbue_mult: number;
}

export class CraftAbleBonus extends Bonus {
  readonly gem_values: number[];
  readonly imbue: ImbuePoints;

  constructor(
    name: string,
    id: number,
    cap: Cap,
    gem_values: number[],
    imbue: ImbuePoints,
    util = 0
  ) {
    super(name, id, cap, util);
    this.gem_values = gem_values;
    this.imbue = imbue;
  }

  getImbuePoints(): number {
    // for item imbue points half this value
    return Math.max(
      Math.floor(this.value * this.imbue.imbue_mult + this.imbue.imbue_add),
      1
    );
  }

  clone(): CraftAbleBonus {
    return new CraftAbleBonus(
      this.name,
      this.id,
      this.cap,
      this.gem_values,
      this.imbue,
      this.util
    );
  }
}
