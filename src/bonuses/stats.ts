import {Bonus, Cap, CraftAbleBonus, ImbuePoints} from '.';

const cap: Cap = {cap_add: 0, cap_mult: 1.5};
const gem_values = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];
const imbue: ImbuePoints = {imbue_add: 1, imbue_mult: 0.67};
const util = 2 / 3; //0.6666667;

export class Stat extends CraftAbleBonus {
  constructor(name: string, id: number) {
    super(name, id, cap, gem_values, imbue, util);
  }
}

export enum Types {
  Strength = 1,
  Dexterity,
  Constitution,
  Quickness,
  Intelligence,
  Piety,
  Empathy,
  Charisma,
  Power,
  HitPoints,
  Acuity = 156,
  ArmorFactor = 148,
}

export const Strength = new Stat('Strength', Types.Strength);
export const Constitution = new Stat('Constitution', Types.Constitution);
export const Dexterity = new Stat('Dexterity', Types.Dexterity);
export const Quickness = new Stat('Quickness', Types.Quickness);
export const Intelligence = new Stat('Intelligence', Types.Intelligence);
export const Piety = new Stat('Piety', Types.Piety);
export const Charisma = new Stat('Charisma', Types.Charisma);
export const Empathy = new Stat('Empathy', Types.Empathy);

export const Power = new CraftAbleBonus(
  'Hit Points',
  Types.Power,
  {cap_add: 1, cap_mult: 0.5},
  [4, 12, 20, 28, 36, 44, 52, 60, 68, 76],
  {imbue_add: -2, imbue_mult: 2},
  2.0
);

export const HitPoints = new CraftAbleBonus(
  'Hit Points',
  Types.HitPoints,
  {cap_add: 0, cap_mult: 4},
  [1, 2, 3, 5, 7, 9, 11, 13, 15, 17],
  {imbue_add: 0, imbue_mult: 0.25},
  0.25
);

// non-craft able
export const Acuity = new Bonus('Acuity', Types.Acuity, cap, util);
export const ArmorFactor = new Bonus(
  'Armor Factor',
  Types.ArmorFactor,
  {cap_add: 0, cap_mult: 1},
  1
);
