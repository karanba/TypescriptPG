import { ISample } from "../../../ISample";

// Step 1: Define interfaces
interface Expression {
  accept<T>(visitor: ExpressionVisitor<T>): T;
}

interface ExpressionVisitor<T> {
  visitNumberLiteral(node: NumberLiteral): T;
  visitAddExpression(node: AddExpression): T;
  visitMultiplyExpression(node: MultiplyExpression): T;
}

// Step 2: Define node types
class NumberLiteral implements Expression {
  constructor(public value: number) {}
  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitNumberLiteral(this);
  }
}

class AddExpression implements Expression {
  constructor(
    public left: Expression,
    public right: Expression,
  ) {}
  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitAddExpression(this);
  }
}

class MultiplyExpression implements Expression {
  constructor(
    public left: Expression,
    public right: Expression,
  ) {}
  accept<T>(visitor: ExpressionVisitor<T>): T {
    return visitor.visitMultiplyExpression(this);
  }
}

// Step 3: Implement visitors

class Evaluator implements ExpressionVisitor<number> {
  visitNumberLiteral(node: NumberLiteral): number {
    return node.value;
  }
  visitAddExpression(node: AddExpression): number {
    return node.left.accept(this) + node.right.accept(this);
  }
  visitMultiplyExpression(node: MultiplyExpression): number {
    return node.left.accept(this) * node.right.accept(this);
  }
}

class PrettyPrinter implements ExpressionVisitor<string> {
  visitNumberLiteral(node: NumberLiteral): string {
    return node.value.toString();
  }
  visitAddExpression(node: AddExpression): string {
    return `(${node.left.accept(this)} + ${node.right.accept(this)})`;
  }
  visitMultiplyExpression(node: MultiplyExpression): string {
    return `(${node.left.accept(this)} * ${node.right.accept(this)})`;
  }
}

export class Ats implements ISample {
  getName(): string {
    return "Ats Sample";
  }
  run(): string {
    const expr: Expression = new MultiplyExpression(
      new AddExpression(new NumberLiteral(2), new NumberLiteral(3)),
      new NumberLiteral(4),
    );

    const evaluator = new Evaluator();
    const printer = new PrettyPrinter();

    console.log("Evaluated:", expr.accept(evaluator)); // Output: Evaluated: 20
    console.log("Printed: ", expr.accept(printer)); // Output: Printed: ((2 + 3) * 4)

    return "Ats Sample Invoked";
  }
}
