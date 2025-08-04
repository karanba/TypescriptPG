// Component interface
interface Coffee {
  getCost(): number;
  getDescription(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  getCost(): number {
    return 10;
  }

  getDescription(): string {
    return "Simple coffee";
  }
}

// Base Decorator
abstract class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    this.decoratedCoffee = coffee;
  }

  getCost(): number {
    return this.decoratedCoffee.getCost();
  }

  getDescription(): string {
    return this.decoratedCoffee.getDescription();
  }
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.decoratedCoffee.getCost() + 2;
  }

  getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", with milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  getCost(): number {
    return this.decoratedCoffee.getCost() + 1;
  }

  getDescription(): string {
    return this.decoratedCoffee.getDescription() + ", with sugar";
  }
}

export class CoffeeMakerSample implements ISample {
  getName(): string {
    return "Coffee Maker Sample";
  }
  run(): string {
    // Usage
    const coffee: Coffee = new SimpleCoffee();
    console.log(coffee.getDescription()); // "Simple coffee"
    console.log(coffee.getCost()); // 10

    const coffeeWithMilk: Coffee = new MilkDecorator(coffee);
    console.log(coffeeWithMilk.getDescription());
    // "Simple coffee, with milk"
    console.log(coffeeWithMilk.getCost()); // 12

    const coffeeWithMilkAndSugar: Coffee = new SugarDecorator(coffeeWithMilk);
    console.log(coffeeWithMilkAndSugar.getDescription());
    // "Simple coffee, with milk, with sugar"
    console.log(coffeeWithMilkAndSugar.getCost()); // 13
    return "Coffee Maker Sample Invoked";
  }
}
