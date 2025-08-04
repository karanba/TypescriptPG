import { ISample } from "../../../ISample";

interface Doc {
  display(): void;
}

class RealDocument implements Doc {
  constructor(
    private title: string,
    private content: string,
  ) {}

  display(): void {
    console.log(`📄 ${this.title}: ${this.content}`);
  }
}

class DocumentProxy implements Doc {
  private realDocument: RealDocument;

  constructor(
    private userRole: string,
    title: string,
    content: string,
  ) {
    this.realDocument = new RealDocument(title, content);
  }

  display(): void {
    if (this.userRole === "admin" || this.userRole === "manager") {
      this.realDocument.display();
    } else {
      console.log(
        "⛔ Access Denied: You do not have permission to view this document.",
      );
    }
  }
}

export class DocumentProtectionSample implements ISample {
  getName(): string {
    return "Document Protection Sample";
  }
  run(): string {
    const adminDoc = new DocumentProxy(
      "admin",
      "Finance Report",
      "All financial details",
    );
    const guestDoc = new DocumentProxy(
      "guest",
      "Finance Report",
      "All financial details",
    );

    adminDoc.display(); // ✅ Allowed
    guestDoc.display(); // ⛔ Denied

    return "Document Protection Sample Invoked";
  }
}
