// Component interface
interface Component {
  operation(): string;
}

// Leaf class
class Leaf implements Component {
  constructor(private name: string) {}

  operation(): string {
    return `Leaf ${this.name}`;
  }
}

// Composite class
class Composite implements Component {
  private children: Component[] = [];

  constructor(private name: string) {}

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  operation(): string {
    const results = this.children.map((child) => child.operation());
    return `Composite ${this.name}(${results.join(", ")})`;
  }
}

export class TreeSample implements ISample {
  getName(): string {
    return "Tree Sample";
  }
  run(): string {
    // Client code
    const tree = new Composite("Root");
    const branch1 = new Composite("Branch1");
    const branch2 = new Composite("Branch2");

    const leaf1 = new Leaf("Leaf1");
    const leaf2 = new Leaf("Leaf2");
    const leaf3 = new Leaf("Leaf3");

    branch1.add(leaf1);
    branch1.add(leaf2);
    branch2.add(leaf3);

    tree.add(branch1);
    tree.add(branch2);

    console.log(tree.operation());
    // Output: Composite Root(Composite Branch1(Leaf Leaf1, Leaf Leaf2), Composite Branch2(Leaf Leaf3))
    return "Tree Sample Invoked";
  }
}
