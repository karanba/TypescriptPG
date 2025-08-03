// Component interface
interface FileSystemItem {
  getName(): string;
  getSize(): number;
  print(indent: string): void;
}

// Leaf class representing a File
class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  print(indent: string): void {
    console.log(`${indent}📄 ${this.name} (${this.size}KB)`);
  }
}

// Composite class representing a Directory
class Directory implements FileSystemItem {
  private items: FileSystemItem[] = [];

  constructor(private name: string) {}

  getName(): string {
    return this.name;
  }

  add(item: FileSystemItem): void {
    this.items.push(item);
  }

  remove(item: FileSystemItem): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getSize(): number {
    return this.items.reduce((total, item) => total + item.getSize(), 0);
  }

  print(indent: string): void {
    console.log(`${indent}📁 ${this.name} (${this.getSize()}KB)`);
    this.items.forEach(item => item.print(indent + "  "));
  }
}



export class FileSystemSample implements ISample {
  getName(): string {
    return "File System Sample";
  }
  run(): string {
    // Sample operation - Creating a file system structure
    const rootDir = new Directory("Root");

    const documentsDir = new Directory("Documents");
    const picturesDir = new Directory("Pictures");

    const resume = new File("resume.pdf", 2048);
    const coverLetter = new File("cover_letter.docx", 512);

    const vacation = new File("vacation.jpg", 4096);
    const family = new File("family.png", 3072);

    // Building the structure
    documentsDir.add(resume);
    documentsDir.add(coverLetter);

    picturesDir.add(vacation);
    picturesDir.add(family);

    rootDir.add(documentsDir);
    rootDir.add(picturesDir);

    // Print the entire structure
    rootDir.print("");

    // Calculate total size
    console.log(`Total size: ${rootDir.getSize()}KB`);

    /* Output:
    📁 Root (9728KB)
      📁 Documents (2560KB)
        📄 resume.pdf (2048KB)
        📄 cover_letter.docx (512KB)
      📁 Pictures (7168KB)
        📄 vacation.jpg (4096KB)
        📄 family.png (3072KB)
    Total size: 9728KB
    */
    return "File System Sample Invoked";
  }
}