import {Bonus, Cap} from '.';

const cap: Cap = {cap_add: 1, cap_mult: 0.5};
const util = 2;

export class StatCaps extends Bonus {
  constructor(name: string, id: number) {
    super(name, id, cap, util);
  }
}

export class ResistanceCaps extends Bonus {
  constructor(name: string, id: number) {
    super(name, id, {cap_add: 1, cap_mult: 0.25}); //util = 0 for Resist Caps
  }
}

export enum Types {
  Strength = 201,
  Dexterity,
  Constitution,
  Quickness,
  Intelligence,
  Piety,
  Empathy,
  Charisma,
  Acuity,
  HitPoints,
  Power,
  Body = 221,
  Cold,
  Crush,
  Energy,
  Heat,
  Matter,
  Slash,
  Spirit,
  Thrust,
}

export const Strength = new StatCaps('Strength Cap', Types.Strength);
export const Constitution = new StatCaps(
  'Constitution Cap',
  Types.Constitution
);
export const Dexterity = new StatCaps('Dexterity Cap', Types.Dexterity);
export const Quickness = new StatCaps('Quickness Cap', Types.Quickness);
export const Intelligence = new StatCaps(
  'Intelligence Cap',
  Types.Intelligence
);
export const Piety = new StatCaps('Piety Cap', Types.Piety);
export const Charisma = new StatCaps('Charisma Cap', Types.Charisma);
export const Empathy = new StatCaps('Empathy Cap', Types.Empathy);
export const Acuity = new StatCaps('Acuity Cap', Types.Acuity);

export const HitPoints = new Bonus(
  'Hit Points Cap',
  Types.HitPoints,
  {cap_add: 0, cap_mult: 4},
  0.25
);

export const Power = new Bonus(
  'Power Cap',
  Types.Power,
  {cap_add: 0, cap_mult: 1},
  2
);

export const Body = new ResistanceCaps('Body Cap', Types.Body);
export const Cold = new ResistanceCaps('Cold Cap', Types.Cold);
export const Crush = new ResistanceCaps('Crush Cap', Types.Crush);
export const Energy = new ResistanceCaps('Energy Cap', Types.Energy);
export const Heat = new ResistanceCaps('Heat Cap', Types.Heat);
export const Matter = new ResistanceCaps('Matter Cap', Types.Matter);
export const Slash = new ResistanceCaps('Slash Cap', Types.Slash);
export const Spirit = new ResistanceCaps('Spirit Cap', Types.Spirit);
export const Thrust = new ResistanceCaps('Thrust Cap', Types.Thrust);
