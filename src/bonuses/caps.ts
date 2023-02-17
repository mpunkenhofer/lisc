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

export enum CapTypes {
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

export const Strength = new StatCaps('Strength Cap', CapTypes.Strength);
export const Constitution = new StatCaps(
  'Constitution Cap',
  CapTypes.Constitution
);
export const Dexterity = new StatCaps('Dexterity Cap', CapTypes.Dexterity);
export const Quickness = new StatCaps('Quickness Cap', CapTypes.Quickness);
export const Intelligence = new StatCaps(
  'Intelligence Cap',
  CapTypes.Intelligence
);
export const Piety = new StatCaps('Piety Cap', CapTypes.Piety);
export const Charisma = new StatCaps('Charisma Cap', CapTypes.Charisma);
export const Empathy = new StatCaps('Empathy Cap', CapTypes.Empathy);
export const Acuity = new StatCaps('Acuity Cap', CapTypes.Acuity);

export const HitPoints = new Bonus(
  'Hit Points Cap',
  CapTypes.HitPoints,
  {cap_add: 0, cap_mult: 4},
  0.25
);

export const Power = new Bonus(
  'Power Cap',
  CapTypes.Power,
  {cap_add: 0, cap_mult: 1},
  2
);

export const Body = new ResistanceCaps('Body Cap', CapTypes.Body);
export const Cold = new ResistanceCaps('Cold Cap', CapTypes.Cold);
export const Crush = new ResistanceCaps('Crush Cap', CapTypes.Crush);
export const Energy = new ResistanceCaps('Energy Cap', CapTypes.Energy);
export const Heat = new ResistanceCaps('Heat Cap', CapTypes.Heat);
export const Matter = new ResistanceCaps('Matter Cap', CapTypes.Matter);
export const Slash = new ResistanceCaps('Slash Cap', CapTypes.Slash);
export const Spirit = new ResistanceCaps('Spirit Cap', CapTypes.Spirit);
export const Thrust = new ResistanceCaps('Thrust Cap', CapTypes.Thrust);
