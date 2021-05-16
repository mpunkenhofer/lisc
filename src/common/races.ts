import { Bonus } from "./bonuses";
import * as Resist from "./bonuses/resistance";
export interface Race {
  readonly name: string;
  readonly resists: [Bonus, number][];
}

export const Avalonian: Race = {
  name: "Avalonian",
  resists: [
    [Resist.Crush, 2],
    [Resist.Slash, 3],
    [Resist.Spirit, 5],
  ],
};

export const Briton: Race = {
  name: "Briton",
  resists: [
    [Resist.Crush, 2],
    [Resist.Slash, 3],
    [Resist.Spirit, 5],
  ],
};

export const HalfOgre: Race = {
  name: "HalOgre",
  resists: [
    [Resist.Thrust, 2],
    [Resist.Slash, 3],
    [Resist.Matter, 5],
  ],
};

export const Highlander: Race = {
  name: "Highlander",
  resists: [
    [Resist.Crush, 3],
    [Resist.Slash, 2],
    [Resist.Cold, 5],
  ],
};

export const Inconnu: Race = {
  name: "Inconnu",
  resists: [
    [Resist.Crush, 2],
    [Resist.Thrust, 3],
    [Resist.Heat, 5],
    [Resist.Spirit, 5],
  ],
};

export const Saracen: Race = {
  name: "Saracen",
  resists: [
    [Resist.Slash, 2],
    [Resist.Thrust, 3],
    [Resist.Heat, 5],
  ],
};

export const Celt: Race = {
  name: "Celt",
  resists: [
    [Resist.Crush, 2],
    [Resist.Slash, 3],
    [Resist.Spirit, 5],
  ],
};

export const Elf: Race = {
  name: "Elf",
  resists: [
    [Resist.Slash, 2],
    [Resist.Thrust, 3],
    [Resist.Spirit, 5],
  ],
};

export const Firbolg: Race = {
  name: "Firbolg",
  resists: [
    [Resist.Crush, 3],
    [Resist.Slash, 2],
    [Resist.Heat, 5],
  ],
};

export const Lurikeen: Race = {
  name: "Lurikeen",
  resists: [
    [Resist.Crush, 5],
    [Resist.Energy, 5],
  ],
};

export const Shar: Race = {
  name: "Shar",
  resists: [
    [Resist.Crush, 5],
    [Resist.Energy, 5],
  ],
};

export const Sylvan: Race = {
  name: "Sylvan",
  resists: [
    [Resist.Crush, 3],
    [Resist.Thrust, 2],
    [Resist.Matter, 5],
    [Resist.Energy, 5],
  ],
};

export const Dwarf: Race = {
  name: "Dwarf",
  resists: [
    [Resist.Slash, 2],
    [Resist.Thrust, 3],
    [Resist.Body, 5],
  ],
};

export const Frostalf: Race = {
  name: "Frostalf",
  resists: [
    [Resist.Slash, 2],
    [Resist.Thrust, 3],
    [Resist.Spirit, 5],
  ],
};

export const Kobold: Race = {
  name: "Kobold",
  resists: [
    [Resist.Crush, 5],
    [Resist.Energy, 5],
  ],
};

export const Troll: Race = {
  name: "Troll",
  resists: [
    [Resist.Slash, 3],
    [Resist.Thrust, 2],
    [Resist.Matter, 5],
  ],
};

export const Norseman: Race = {
  name: "Norseman",
  resists: [
    [Resist.Crush, 2],
    [Resist.Slash, 3],
    [Resist.Cold, 5],
  ],
};

export const Valkyn: Race = {
  name: "Valkyn",
  resists: [
    [Resist.Slash, 3],
    [Resist.Thrust, 2],
    [Resist.Cold, 5],
    [Resist.Body, 5],
  ],
};
