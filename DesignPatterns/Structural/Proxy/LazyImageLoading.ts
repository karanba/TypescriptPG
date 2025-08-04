import { ISample } from "../../../ISample";

// Subject interface
interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading image: ${this.filename}`);
  }

  display(): void {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy
class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  display(): void {
    // Lazy initialization - create the RealImage only when needed
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

export class LazyImageLoadingSample implements ISample {
  getName(): string {
    return "Lazy Image Loading Sample";
  }
  run(): string {
    // Client code
    const image: Image = new ProxyImage("photo.jpg");
    // Image is not loaded at this point
    console.log("Image will be loaded on first display call");
    image.display(); // Loading and displaying happens here
    image.display(); // Only displaying happens here (no loading)

    return "Lazy Image Loading Sample Invoked";
  }
}
