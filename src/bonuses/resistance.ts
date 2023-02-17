import {Cap, CraftAbleBonus, ImbuePoints} from '.';

const cap: Cap = {cap_add: 1, cap_mult: 0.5};
const imbue: ImbuePoints = {imbue_add: -2, imbue_mult: 2};
const gem_values = [1, 2, 3, 5, 7, 9, 11, 13, 15, 17];
const util = 2.0;

export class Resistance extends CraftAbleBonus {
  constructor(name: string, id: number) {
    super(name, id, cap, gem_values, imbue, util);
  }
}

export enum ResistanceTypes {
  Body = 11,
  Cold,
  Crush,
  Energy,
  Heat,
  Matter,
  Slash,
  Spirit,
  Thrust,
}

export const Body = new Resistance('Body', ResistanceTypes.Body);
export const Cold = new Resistance('Cold', ResistanceTypes.Cold);
export const Crush = new Resistance('Crush', ResistanceTypes.Crush);
export const Energy = new Resistance('Energy', ResistanceTypes.Energy);
export const Heat = new Resistance('Heat', ResistanceTypes.Heat);
export const Matter = new Resistance('Matter', ResistanceTypes.Matter);
export const Slash = new Resistance('Slash', ResistanceTypes.Slash);
export const Spirit = new Resistance('Spirit', ResistanceTypes.Spirit);
export const Thrust = new Resistance('Thrust', ResistanceTypes.Thrust);
