// Prototype interface
interface Prototype {
  clone(): Prototype;
}

// Concrete prototype
class ConcretePrototype implements Prototype {
  private field: string;

  constructor(field: string) {
    this.field = field;
  }

  clone(): Prototype {
    return new ConcretePrototype(this.field);
  }

  getField(): string {
    return this.field;
  }
}

export class PrototypeSample implements ISample {
  getName(): string {
    return "Prototype Sample";
  }
  run(): string {
    // Client code
    const prototype = new ConcretePrototype("original");
    const clone = prototype.clone() as ConcretePrototype;
    console.log(clone.getField()); // Output: "original"
    return "Prototype Sample Invoked";
  }
}
