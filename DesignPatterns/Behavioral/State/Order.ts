// --- State Interface ---
interface OrderState {
  next(order: Order): void;
  cancel(order: Order): void;
  printStatus(): void;
}

// --- Concrete States ---
class NewOrderState implements OrderState {
  next(order: Order): void {
    order.setState(new ShippedState());
  }
  cancel(order: Order): void {
    order.setState(new CancelledState());
  }
  printStatus(): void {
    console.log("Order placed. Waiting to be shipped.");
  }
}

class ShippedState implements OrderState {
  next(order: Order): void {
    order.setState(new DeliveredState());
  }
  cancel(order: Order): void {
    console.log("Cannot cancel. Order already shipped.");
  }
  printStatus(): void {
    console.log("Order shipped. On the way.");
  }
}

class DeliveredState implements OrderState {
  next(order: Order): void {
    console.log("Order already delivered. No next state.");
  }
  cancel(order: Order): void {
    console.log("Cannot cancel. Order already delivered.");
  }
  printStatus(): void {
    console.log("Order delivered to customer.");
  }
}

class CancelledState implements OrderState {
  next(order: Order): void {
    console.log("Order is cancelled. No next state.");
  }
  cancel(order: Order): void {
    console.log("Order already cancelled.");
  }
  printStatus(): void {
    console.log("Order has been cancelled.");
  }
}

// --- Context ---
class Order {
  private state: OrderState;

  constructor() {
    this.state = new NewOrderState();
  }

  setState(state: OrderState): void {
    this.state = state;
    this.state.printStatus();
  }

  next(): void {
    this.state.next(this);
  }

  cancel(): void {
    this.state.cancel(this);
  }

  printStatus(): void {
    this.state.printStatus();
  }
}

export class OrderSample implements ISample {
  getName(): string {
    return "Order Sample";
  }
  run(): string {
    // --- Usage ---
    const order = new Order();
    order.printStatus(); // New order

    order.next(); // Shipped
    order.next(); // Delivered
    order.cancel(); // Can't cancel

    return "Order Sample Invoked";
  }
}
