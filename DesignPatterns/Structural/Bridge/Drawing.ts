// Abstraction
abstract class Shape {
  protected implementation: DrawingAPI;

  constructor(implementation: DrawingAPI) {
    this.implementation = implementation;
  }

  abstract draw(): void;
}

// Implementation
interface DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void;
}

// Concrete Implementation 1
class SVGDrawingAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(
      `Drawing circle at (${x},${y}) with radius ${radius} using SVG`,
    );
  }
}

// Concrete Implementation 2
class CanvasDrawingAPI implements DrawingAPI {
  drawCircle(x: number, y: number, radius: number): void {
    console.log(
      `Drawing circle at (${x},${y}) with radius ${radius} using Canvas`,
    );
  }
}

// Refined Abstraction
class Circle extends Shape {
  private x: number;
  private y: number;
  private radius: number;

  constructor(
    x: number,
    y: number,
    radius: number,
    implementation: DrawingAPI,
  ) {
    super(implementation);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(): void {
    this.implementation.drawCircle(this.x, this.y, this.radius);
  }
}

export class DrawingSample implements ISample {
  getName(): string {
    return "Drawing Sample";
  }
  run(): string {
    // Client code
    const svgCircle = new Circle(1, 2, 3, new SVGDrawingAPI());
    const canvasCircle = new Circle(5, 7, 11, new CanvasDrawingAPI());

    svgCircle.draw();
    canvasCircle.draw();
    return "Drawing Sample Invoked";
  }
}
