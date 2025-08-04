import { ISample } from "../../../ISample";

// Abstract Products
interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

// Concrete Products
class WindowsButton implements Button {
  render() {
    console.log("Rendering Windows button");
  }
  onClick(f: Function) {
    console.log("Windows button clicked");
    f();
  }
}

class MacButton implements Button {
  render() {
    console.log("Rendering Mac button");
  }
  onClick(f: Function) {
    console.log("Mac button clicked");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  render() {
    console.log("Rendering Windows checkbox");
  }
  toggle() {
    console.log("Windows checkbox toggled");
  }
}

class MacCheckbox implements Checkbox {
  render() {
    console.log("Rendering Mac checkbox");
  }
  toggle() {
    console.log("Mac checkbox toggled");
  }
}

// Abstract Factory
interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Concrete Factories
class WindowsFactory implements GUIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}

class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Client code
function createUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

export class GUICreatorSample implements ISample {
  getName(): string {
    return "GUI Creator Sample";
  }
  run(): string {
    // Usage
    const windowsFactory = new WindowsFactory();
    const macFactory = new MacFactory();

    createUI(windowsFactory); // Creates Windows UI
    createUI(macFactory); // Creates Mac UI
    return "GUI Creator Sample Invoked";
  }
}
