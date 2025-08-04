import * as StrategySamples from "./Behavioral/Strategy";
import * as AdapterSamples from "./Structural/Adapter";
import * as CommandSamples from "./Behavioral/Command";
import * as VisitorSamples from "./Behavioral/Visitor";
import * as BridgeSamples from "./Structural/Bridge";
import * as CompositeSamples from "./Structural/Composite";
import * as DecoratorSamples from "./Structural/Decorator";
import * as InterpreterSamples from "./Behavioral/Interpreter";
import * as PrototypeSamples from "./Creational/Prototype";
import * as SingletonSamples from "./Creational/Singelton";
import * as FactoryMethodSamples from "./Creational/FactoryMethod";
import * as AbstractFactorySamples from "./Creational/AbstractFactory";
import * as BuilderSamples from "./Creational/Builder";
import * as FacadeSamples from "./Structural/Facade";
import * as FlyweightSamples from "./Structural/Flyweight";

import { PatternGroupType, PatternGroup } from "../ISample";
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
  {
    pattern: "Bridge",
    type: PatternGroupType.Structural,
    implementations: BridgeSamples.Samples,
  },
  {
    pattern: "Composite",
    type: PatternGroupType.Structural,
    implementations: CompositeSamples.Samples,
  },
  {
    pattern: "Decorator",
    type: PatternGroupType.Structural,
    implementations: DecoratorSamples.Samples,
  },
  {
    pattern: "Interpreter",
    type: PatternGroupType.Behavioral,
    implementations: InterpreterSamples.Samples,
  },
  {
    pattern: "Prototype",
    type: PatternGroupType.Creational,
    implementations: PrototypeSamples.Samples,
  },
  {
    pattern: "Singleton",
    type: PatternGroupType.Creational,
    implementations: SingletonSamples.Samples,
  },
  {
    pattern: "FactoryMethod",
    type: PatternGroupType.Creational,
    implementations: FactoryMethodSamples.Samples,
  },
  {
    pattern: "AbstractFactory",
    type: PatternGroupType.Creational,
    implementations: AbstractFactorySamples.Samples,
  },
  {
    pattern: "Builder",
    type: PatternGroupType.Creational,
    implementations: BuilderSamples.Samples,
  },
  {
    pattern: "Facade",
    type: PatternGroupType.Structural,
    implementations: FacadeSamples.Samples,
  },
  {
    pattern: "Flyweight",
    type: PatternGroupType.Structural,
    implementations: FlyweightSamples.Samples,
  },
];

export default registry;
