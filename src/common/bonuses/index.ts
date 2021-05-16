export enum Dust {
  EssenceOfLife = "Essence of Life",
  BloodiedBattlefieldDirt = "Bloodied Battlefield Dirt",
  GroundDraconicScales = "Ground Draconic Scales",
  GroundCaerStone = "Ground Caer Stone",
  GroundBlessedUndeadBone = "Ground Blessed Undead Bone",
  GroundVendoBone = "Ground Vendo Bone",
  GroundGiantBone = "Ground Giant Bone",
  GroundCaveCrystal = "Ground Cave Crystal",
  FairyDust = "Fairy Dust",
  OtherWorldlyDust = "Other Worldly Dust",
  UnseelieDust = "Unseelie Dust",
  SootFromNilfheim = "Soot From Nilfheim",
}

export enum Liquid {
  GiantBlood = "Giant Blood",
  MysticEnergy = "Mystic Energy",
  HeatFromAnUnearthlyPyre = "Heat From An Unearthly Pyre",
  LeviathanBlood = "Leviathan Blood",
  FrostFromAWasteland = "Frost From A Wasteland",
  SunLight = "Sun Light",
  SwampFog = "Swamp Fog",
  TreantBlood = "Treant Blood",
  UndeadAshAndHolyWater = "Undead Ash And Holy Water",
  DraconicFire = "Draconic Fire",
  AirElementalEssence = "Air Elemental Essence",
}

export interface Jewel {
  readonly name: string;
  readonly dust: Dust;
  readonly liquid: Liquid;
  readonly dust_amount: [number, number];
  readonly liquid_amount: [number, number];
}

export interface Bonus {
  name: string;
  jewel: Jewel;
}
