// Abstract Expression
interface Expression {
  interpret(context: Context): number;
}

// Terminal Expressions
class NumberExpression implements Expression {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  interpret(context: Context): number {
    return this.value;
  }
}

// Non-terminal Expression
class AddExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(context: Context): number {
    return this.left.interpret(context) + this.right.interpret(context);
  }
}

// Context
class Context {
  private variables: Map<string, number> = new Map();

  setVariable(name: string, value: number): void {
    this.variables.set(name, value);
  }

  getVariable(name: string): number {
    return this.variables.get(name) || 0;
  }
}

export class ExpressionSample implements ISample {
  getName(): string {
    return "Expression Sample";
  }
  run(): string {
    const context = new Context();
    const expression = new AddExpression(
      new NumberExpression(5),
      new NumberExpression(10),
    );
    console.log(expression.interpret(context)); // 15
    return "Expression Sample Invoked";
  }
}
