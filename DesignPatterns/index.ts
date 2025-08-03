import * as StrategySamples from "./Behavioral/Strategy";
import * as AdapterSamples from "./Structural/Adapter";
import * as CommandSamples from "./Behavioral/Command";
import * as VisitorSamples from "./Behavioral/Visitor";
import { ISample, PatternGroupType, PatternGroup } from "../ISample";

const registry: PatternGroup[] = [
  {
    pattern: "Strategy",
    type: PatternGroupType.Behavioral,
    implementations: StrategySamples.Samples,
  },
  {
    pattern: "Adapter",
    type: PatternGroupType.Structural,
    implementations: AdapterSamples.Samples,
  },
  {
    pattern: "Command",
    type: PatternGroupType.Behavioral,
    implementations: CommandSamples.Samples,
  },
  {
    pattern: "Visitor",
    type: PatternGroupType.Behavioral,
    implementations: VisitorSamples.Samples,
  },
];

export default registry;
