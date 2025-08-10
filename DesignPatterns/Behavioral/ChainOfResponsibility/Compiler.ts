// Handler interface
interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(request: string): string | null;
}

// Abstract handler
abstract class AbstractHandler implements IHandler {
    private nextHandler: IHandler | null = null;

    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

// Concrete handler: Lexer
class Lexer extends AbstractHandler {
    public handle(request: string): string | null {
        if (request.startsWith("Source Code: ")) {
            const lexedCode = request.replace("Source Code: ", "Lexed Code: ");
            console.log("Lexer: Lexing the source code.");
            return super.handle(lexedCode);
        }
        return super.handle(request);
    }
}

// Concrete handler: Parser
class Parser extends AbstractHandler {
    public handle(request: string): string | null {
        if (request.startsWith("Lexed Code: ")) {
            const parsedCode = request.replace("Lexed Code: ", "Parsed Code: ");
            console.log("Parser: Parsing the lexed code.");
            return super.handle(parsedCode);
        }
        return super.handle(request);
    }
}

// Concrete handler: Code Generator
class CodeGenerator extends AbstractHandler {
    public handle(request: string): string | null {
        if (request.startsWith("Parsed Code: ")) {
            const generatedCode = request.replace(
                "Parsed Code: ",
                "Generated Code: ",
            );
            console.log("CodeGenerator: Generating code.");
            return super.handle(generatedCode);
        }
        return super.handle(request);
    }
}

// Concrete handler: Compiler
class Compiler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request.startsWith("Generated Code: ")) {
            const executable = request.replace(
                "Generated Code: ",
                "Executable: ",
            );
            console.log("Compiler: Compiling the generated code.");
            return executable + ".exe";
        }
        return super.handle(request);
    }
}

// Client code
function clientCode(handler: IHandler) {
    const sourceCode = "Source Code: int main() { return 0; }";
    console.log(`Client: Processing ${sourceCode}`);

    const result = handler.handle(sourceCode);
    if (result) {
        console.log(`Client: Result: ${result}`);
    } else {
        console.log(`Client: Process is stopped.`);
    }
}

export class CompilerSample implements ISample {
    getName(): string {
        return "Compiler Sample";
    }
    run(): string {
        // Build the chain
        const lexer = new Lexer();
        const parser = new Parser();
        const codeGenerator = new CodeGenerator();
        const compiler = new Compiler();

        lexer.setNext(parser).setNext(codeGenerator).setNext(compiler);
        clientCode(lexer);
        return "Compiler Sample Invoked";
    }
}
