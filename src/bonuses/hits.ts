import {Bonus, Cap, CraftAbleBonus, ImbuePoints} from '.';
import {Dust, Liquid} from '../materials';

const cap: Cap = {cap_add: 0, cap_mult: 4};
const imbue: ImbuePoints = {imbue_add: 0, imbue_mult: 0.25};
const bonuses = [4, 12, 20, 28, 36, 44, 52, 60, 68, 76];
const util = 0.25;

export const HitPoints = new CraftAbleBonus(
  'Hit Points',
  cap,
  bonuses,
  imbue,
  {
    name: 'BLOOD_ESSENCE_JEWEL',
    dust: Dust.EssenceOfLife,
    liquid: Liquid.GiantBlood,
    dust_amount: [1, 4],
    liquid_amount: [1, 1],
  },
  util
);

// hit point cap is +200 as well (at 50) so we can use the same cap
export const HitPointsCap = new Bonus('Hit Points Cap', cap, util);
