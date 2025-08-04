// Builder Pattern Example

import { ISample } from "../../../ISample";

// Product
class House {
  private windows: number = 0;
  private doors: number = 0;
  private hasGarage: boolean = false;
  private hasSwimmingPool: boolean = false;

  setWindows(windows: number): void {
    this.windows = windows;
  }

  setDoors(doors: number): void {
    this.doors = doors;
  }

  setGarage(hasGarage: boolean): void {
    this.hasGarage = hasGarage;
  }

  setSwimmingPool(hasSwimmingPool: boolean): void {
    this.hasSwimmingPool = hasSwimmingPool;
  }

  describe(): string {
    return `House with ${this.windows} windows, ${this.doors} doors, ${this.hasGarage ? "a" : "no"} garage, and ${this.hasSwimmingPool ? "a" : "no"} swimming pool.`;
  }
}

// Builder interface
interface HouseBuilder {
  buildWindows(count: number): HouseBuilder;
  buildDoors(count: number): HouseBuilder;
  buildGarage(): HouseBuilder;
  buildSwimmingPool(): HouseBuilder;
  build(): House;
}

// Concrete Builder
class ConcreteHouseBuilder implements HouseBuilder {
  private house: House = new House();

  buildWindows(count: number): HouseBuilder {
    this.house.setWindows(count);
    return this;
  }

  buildDoors(count: number): HouseBuilder {
    this.house.setDoors(count);
    return this;
  }

  buildGarage(): HouseBuilder {
    this.house.setGarage(true);
    return this;
  }

  buildSwimmingPool(): HouseBuilder {
    this.house.setSwimmingPool(true);
    return this;
  }

  build(): House {
    return this.house;
  }
}

export class HouseBuilderSample implements ISample {
  getName(): string {
    return "House Builder Sample";
  }
  run(): string {
    // Client code
    const builder = new ConcreteHouseBuilder();
    const house = builder.buildWindows(4).buildDoors(2).buildGarage().build();

    console.log(house.describe());
    return "House Builder Sample Invoked";
  }
}
