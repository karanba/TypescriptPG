import { ISample } from "../../../ISample";

// Command interface
interface Command {
  execute(): void;
  undo(): void;
}

// Receiver
class Light {
  private isOn = false;

  turnOn(): void {
    this.isOn = true;
    console.log("Light is now ON");
  }

  turnOff(): void {
    this.isOn = false;
    console.log("Light is now OFF");
  }
}

// Concrete Command
class LightOnCommand implements Command {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  private command!: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }

  pressUndo(): void {
    this.command.undo();
  }
}

export class RemoteControlSample implements ISample {
  getName(): string {
    return "Remote Control Sample";
  }
  run(): string {
    // Client code
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    const remote = new RemoteControl();

    remote.setCommand(lightOn);
    remote.pressButton(); // Light is now ON
    remote.pressUndo(); // Light is now OFF

    return "Remote Control Sample Invoked";
  }
}
