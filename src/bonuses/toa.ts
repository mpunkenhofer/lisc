import {Bonus} from '.';

const cap_10 = {cap_add: 0, cap_mult: 0.2};

export enum ToaBonusTypes {
  MeleeDamage,
}

export const MeleeDamage = new Bonus(
  'Melee Damage',
  ToaBonusTypes.MeleeDamage,
  cap_10,
  5.0
);
