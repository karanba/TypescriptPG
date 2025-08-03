export enum PatternGroupType {
  Creational = "Creational",
  Structural = "Structural",
  Behavioral = "Behavioral",
}

export interface ISample {
  getName(): string;
  run(): string;
}

export interface PatternGroup {
  pattern: string;
  type: PatternGroupType;
  implementations: ISample[];
}
