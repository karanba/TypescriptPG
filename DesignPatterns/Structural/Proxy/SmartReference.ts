import { ISample } from "../../../ISample";

interface UserProfile {
  getName(): string;
  setName(name: string): void;
}

class RealUserProfile implements UserProfile {
  private name: string;

  constructor(name: string) {
    console.log("💾 Heavy UserProfile object created!");
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

class UserProfileProxy implements UserProfile {
  private realProfile: RealUserProfile | null = null;
  private accessCount = 0;

  constructor(private initialName: string) {}

  private ensureLoaded() {
    if (!this.realProfile) {
      this.realProfile = new RealUserProfile(this.initialName);
    }
  }

  getName(): string {
    this.ensureLoaded();
    this.accessCount++;
    console.log(`📊 Access count: ${this.accessCount}`);
    return this.realProfile!.getName();
  }

  setName(name: string): void {
    this.ensureLoaded();
    this.realProfile!.setName(name);
  }
}

function clientCode() {
  const user = new UserProfileProxy("Alice");

  console.log("Before first access...");
  console.log("User name:", user.getName()); // RealUserProfile created here
  console.log("User name again:", user.getName()); // No new object created
  user.setName("Bob");
  console.log("Updated user name:", user.getName());
}

export class SmartReferenceSample implements ISample {
  getName(): string {
    return "Smart Reference Sample";
  }
  run(): string {
    clientCode();
    return "Smart Reference Sample Invoked";
  }
}
