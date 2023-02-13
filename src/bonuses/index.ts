import {Jewel} from '../materials';

export class Bonus {
  readonly name: string;
  readonly util: number = 0;
  value: number = 0;

  constructor(name: string, util = 0) {
    this.name = name;
    this.util = util;
  }
}

export class CraftAbleBonus extends Bonus {
  readonly jewel: Jewel;

  constructor(name: string, jewel: Jewel, util = 0) {
    super(name, util);
    this.jewel = jewel;
  }
}
