// Flyweight pattern implementation
class CharacterFlyweight {
  private character: string;

  constructor(character: string) {
    this.character = character;
  }

  display(font: string, size: number): void {
    console.log(`Character: ${this.character}, Font: ${font}, Size: ${size}`);
  }
}

class FlyweightFactory {
  private flyweights: { [key: string]: CharacterFlyweight } = {};

  getFlyweight(character: string): CharacterFlyweight {
    if (!this.flyweights[character]) {
      this.flyweights[character] = new CharacterFlyweight(character);
      console.log(`Creating flyweight for character: ${character}`);
    }
    return this.flyweights[character];
  }

  getFlyweightCount(): number {
    return Object.keys(this.flyweights).length;
  }
}

export class CharacterFlyweightSample implements ISample {
  getName(): string {
    return "Character Flyweight Sample";
  }
  run(): string {
    // Usage
    // Usage
    const factory = new FlyweightFactory();
    const text = "Hello World";

    // Extrinsic state
    const font = "Arial";
    const size = 12;

    // Render text using flyweights
    for (const char of text) {
      const flyweight = factory.getFlyweight(char);
      flyweight.display(font, size);
    }

    console.log(`Total flyweights created: ${factory.getFlyweightCount()}`);
    return "Character Flyweight Sample Invoked";
  }
}
