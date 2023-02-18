import {Bonus, Cap} from '.';

const cap: Cap = {cap_add: 1, cap_mult: 0.5};
const util = 2;

export class StatOverCaps extends Bonus {
  constructor(name: string, id: number) {
    super(name, id, cap, util);
  }
}

// export class ResistanceOverCaps extends Bonus {
//   constructor(name: string, id: number) {
//     super(name, id, {cap_add: 1, cap_mult: 0.25}); //util = 0 for Resist Caps
//   }
// }

export enum Types {
  Strength = 182,
  Dexterity,
  Constitution,
  Quickness,
  Acuity,
  //   Body,
  //   Cold,
  //   Crush,
  //   Energy,
  //   Heat,
  //   Matter,
  //   Slash,
  //   Spirit,
  //   Thrust,
}

export const Strength = new StatOverCaps('Strength Over Cap', Types.Strength);
export const Constitution = new StatOverCaps(
  'Constitution Over Cap',
  Types.Constitution
);
export const Dexterity = new StatOverCaps(
  'Dexterity Over Cap',
  Types.Dexterity
);
export const Quickness = new StatOverCaps(
  'Quickness Over Cap',
  Types.Quickness
);
export const Acuity = new StatOverCaps('Acuity Over Cap', Types.Acuity);

// export const Body = new ResistanceOverCaps('Body Over Cap', OverCapTypes.Body);
// export const Cold = new ResistanceOverCaps('Cold Over Cap', OverCapTypes.Cold);
// export const Crush = new ResistanceOverCaps(
//   'Crush Over Cap',
//   OverCapTypes.Crush
// );
// export const Energy = new ResistanceOverCaps(
//   'Energy Over Cap',
//   OverCapTypes.Energy
// );
// export const Heat = new ResistanceOverCaps('Heat Over Cap', OverCapTypes.Heat);
// export const Matter = new ResistanceOverCaps(
//   'Matter Over Cap',
//   OverCapTypes.Matter
// );
// export const Slash = new ResistanceOverCaps(
//   'Slash Over Cap',
//   OverCapTypes.Slash
// );
// export const Spirit = new ResistanceOverCaps(
//   'Spirit Over Cap',
//   OverCapTypes.Spirit
// );
// export const Thrust = new ResistanceOverCaps(
//   'Thrust Over Cap',
//   OverCapTypes.Thrust
// );
