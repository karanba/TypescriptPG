// Mediator interface
interface ChatMediator {
  sendMessage(message: string, user: User): void;
}

// Concrete Mediator
class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  sendMessage(message: string, sender: User): void {
    // Distribute the message to all users except sender
    this.users.forEach(user => {
      if (user !== sender) {
        user.receive(message, sender);
      }
    });
  }
}

// Colleague class
class User {
  private name: string;
  private mediator: ChatMediator;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message: string): void {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.sendMessage(message, this);
  }

  receive(message: string, sender: User): void {
    console.log(`${this.name} received from ${sender.name}: ${message}`);
  }
}



export class ChatRoomSample implements ISample{
  getName(): string {
    return "Chat Room Sample";
  }
  run(): string {
    // Usage
    const chatroom = new ChatRoom();

    const alice = new User("Alice", chatroom);
    const bob = new User("Bob", chatroom);
    const charlie = new User("Charlie", chatroom);

    chatroom.addUser(alice);
    chatroom.addUser(bob);
    chatroom.addUser(charlie);

    alice.send("Hello everyone!");
    // Output:
    // Alice sends: Hello everyone!
    // Bob received from Alice: Hello everyone!
    // Charlie received from Alice: Hello everyone!

    return "Chat Room Sample Invoked";
  }
}