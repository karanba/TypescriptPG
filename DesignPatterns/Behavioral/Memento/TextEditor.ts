import { ISample } from "../../../ISample";

// --- Memento ---
class TextMemento {
  constructor(private readonly state: string) {}

  getState(): string {
    return this.state;
  }
}

// --- Originator ---
class TextEditor {
  private content = "";

  type(words: string): void {
    this.content += words;
  }

  save(): TextMemento {
    return new TextMemento(this.content);
  }

  restore(memento: TextMemento): void {
    this.content = memento.getState();
  }

  getContent(): string {
    return this.content;
  }
}

// --- Caretaker ---
class History {
  private mementos: TextMemento[] = [];

  push(memento: TextMemento): void {
    this.mementos.push(memento);
  }

  pop(): TextMemento | undefined {
    return this.mementos.pop();
  }
}


export class TextEditorSample implements ISample {
  getName(): string {
    return "Text Editor Sample";
  }
  run(): string {
    // --- Usage ---
    const editor = new TextEditor(); // Originator
    const history = new History(); // Caretaker

    editor.type("Hello, ");
    history.push(editor.save()); // Save state 1

    editor.type("world!");
    history.push(editor.save()); // Save state 2

    editor.type(" This will be undone.");

    console.log("Before undo:", editor.getContent());

    editor.restore(history.pop()!); // Undo last
    console.log("After first undo:", editor.getContent());

    editor.restore(history.pop()!); // Undo again
    console.log("After second undo:", editor.getContent());

    return "Text Editor Sample Invoked";
  }
}