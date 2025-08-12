# TypescriptPG

## About

**TypescriptPG** is a lightweight, experimental playground for **TypeScript**.  
It’s designed for **learning, prototyping, and documenting** core TypeScript concepts and software design approaches through small, focused examples.

**Key areas:**
- **Design Patterns** — Implementations of patterns like Strategy, Factory, Observer, State, Singleton, and more, each in self-contained folders for quick reference.
- **Frontend Demos** — Simple browser-based examples in the `views/` directory showcasing DOM manipulation, component logic, and UI behavior.
- **Rapid Experimentation** — `index.ts` and other root-level files serve as quick “scratchpads” for testing new ideas or language features without project overhead.
- **TypeScript Setup** — Includes a configured `tsconfig.json` and `package.json` scripts to compile and run code easily.

**Goals:**
- Keep examples **clear, minimal, and reusable**.  
- Provide a personal **reference library** for design patterns and TypeScript techniques.  
- Serve as a **learning hub** for both fundamental and advanced concepts.

## Table of Contents

- [`DesignPatterns/`](./DesignPatterns/)
  - [`Behavioral/`](./DesignPatterns/Behavioral/)
    - [`ChainOfResponsibility/`](./DesignPatterns/Behavioral/ChainOfResponsibility/)
      - [`Compiler.ts`](./DesignPatterns/Behavioral/ChainOfResponsibility/Compiler.ts)
      - [`index.ts`](./DesignPatterns/Behavioral/ChainOfResponsibility/index.ts)
    - [`Command/`](./DesignPatterns/Behavioral/Command/)
      - [`index.ts`](./DesignPatterns/Behavioral/Command/index.ts)
      - [`RemoteControl.ts`](./DesignPatterns/Behavioral/Command/RemoteControl.ts)
    - [`Interpreter/`](./DesignPatterns/Behavioral/Interpreter/)
      - [`Expression.ts`](./DesignPatterns/Behavioral/Interpreter/Expression.ts)
      - [`index.ts`](./DesignPatterns/Behavioral/Interpreter/index.ts)
    - [`Iterator/`](./DesignPatterns/Behavioral/Iterator/)
      - [`index.ts`](./DesignPatterns/Behavioral/Iterator/index.ts)
      - [`MusicPlayer.ts`](./DesignPatterns/Behavioral/Iterator/MusicPlayer.ts)
    - [`Mediator/`](./DesignPatterns/Behavioral/Mediator/)
      - [`ChatRoom.ts`](./DesignPatterns/Behavioral/Mediator/ChatRoom.ts)
      - [`index.ts`](./DesignPatterns/Behavioral/Mediator/index.ts)
    - [`Memento/`](./DesignPatterns/Behavioral/Memento/)
      - [`index.ts`](./DesignPatterns/Behavioral/Memento/index.ts)
      - [`TextEditor.ts`](./DesignPatterns/Behavioral/Memento/TextEditor.ts)
    - [`Observer/`](./DesignPatterns/Behavioral/Observer/)
      - [`index.ts`](./DesignPatterns/Behavioral/Observer/index.ts)
      - [`NewsPublisher.ts`](./DesignPatterns/Behavioral/Observer/NewsPublisher.ts)
    - [`State/`](./DesignPatterns/Behavioral/State/)
      - [`index.ts`](./DesignPatterns/Behavioral/State/index.ts)
      - [`Order.ts`](./DesignPatterns/Behavioral/State/Order.ts)
    - [`Strategy/`](./DesignPatterns/Behavioral/Strategy/)
      - [`index.ts`](./DesignPatterns/Behavioral/Strategy/index.ts)
      - [`Sorting.ts`](./DesignPatterns/Behavioral/Strategy/Sorting.ts)
    - [`TemplateMethod/`](./DesignPatterns/Behavioral/TemplateMethod/)
      - [`EventManagementSystem.ts`](./DesignPatterns/Behavioral/TemplateMethod/EventManagementSystem.ts)
    - [`Visitor/`](./DesignPatterns/Behavioral/Visitor/)
      - [`Ats.ts`](./DesignPatterns/Behavioral/Visitor/Ats.ts)
      - [`index.ts`](./DesignPatterns/Behavioral/Visitor/index.ts)
  - [`Creational/`](./DesignPatterns/Creational/)
    - [`AbstractFactory/`](./DesignPatterns/Creational/AbstractFactory/)
      - [`GUICreator.ts`](./DesignPatterns/Creational/AbstractFactory/GUICreator.ts)
      - [`index.ts`](./DesignPatterns/Creational/AbstractFactory/index.ts)
    - [`Builder/`](./DesignPatterns/Creational/Builder/)
      - [`HouseBuilder.ts`](./DesignPatterns/Creational/Builder/HouseBuilder.ts)
      - [`index.ts`](./DesignPatterns/Creational/Builder/index.ts)
    - [`FactoryMethod/`](./DesignPatterns/Creational/FactoryMethod/)
      - [`FactoryMethod.ts`](./DesignPatterns/Creational/FactoryMethod/FactoryMethod.ts)
      - [`index.ts`](./DesignPatterns/Creational/FactoryMethod/index.ts)
    - [`Prototype/`](./DesignPatterns/Creational/Prototype/)
      - [`index.ts`](./DesignPatterns/Creational/Prototype/index.ts)
      - [`Prototype.ts`](./DesignPatterns/Creational/Prototype/Prototype.ts)
    - [`Singelton/`](./DesignPatterns/Creational/Singelton/)
      - [`index.ts`](./DesignPatterns/Creational/Singelton/index.ts)
      - [`Singelton.ts`](./DesignPatterns/Creational/Singelton/Singelton.ts)
  - [`Structural/`](./DesignPatterns/Structural/)
    - [`Adapter/`](./DesignPatterns/Structural/Adapter/)
      - [`error.ts`](./DesignPatterns/Structural/Adapter/error.ts)
      - [`index.ts`](./DesignPatterns/Structural/Adapter/index.ts)
    - [`Bridge/`](./DesignPatterns/Structural/Bridge/)
      - [`Drawing.ts`](./DesignPatterns/Structural/Bridge/Drawing.ts)
      - [`index.ts`](./DesignPatterns/Structural/Bridge/index.ts)
    - [`Composite/`](./DesignPatterns/Structural/Composite/)
      - [`FileSystem.ts`](./DesignPatterns/Structural/Composite/FileSystem.ts)
      - [`index.ts`](./DesignPatterns/Structural/Composite/index.ts)
      - [`Tree.ts`](./DesignPatterns/Structural/Composite/Tree.ts)
    - [`Decorator/`](./DesignPatterns/Structural/Decorator/)
      - [`CoffeeMaker.ts`](./DesignPatterns/Structural/Decorator/CoffeeMaker.ts)
      - [`index.ts`](./DesignPatterns/Structural/Decorator/index.ts)
    - [`Facade/`](./DesignPatterns/Structural/Facade/)
      - [`index.ts`](./DesignPatterns/Structural/Facade/index.ts)
      - [`VideoPlayer.ts`](./DesignPatterns/Structural/Facade/VideoPlayer.ts)
    - [`Flyweight/`](./DesignPatterns/Structural/Flyweight/)
      - [`CharacterFlyweight.ts`](./DesignPatterns/Structural/Flyweight/CharacterFlyweight.ts)
      - [`index.ts`](./DesignPatterns/Structural/Flyweight/index.ts)
    - [`Proxy/`](./DesignPatterns/Structural/Proxy/)
      - [`CachingData.ts`](./DesignPatterns/Structural/Proxy/CachingData.ts)
      - [`DocumentProtection.ts`](./DesignPatterns/Structural/Proxy/DocumentProtection.ts)
      - [`index.ts`](./DesignPatterns/Structural/Proxy/index.ts)
      - [`LazyImageLoading.ts`](./DesignPatterns/Structural/Proxy/LazyImageLoading.ts)
      - [`RemoteUserServiceProxy.ts`](./DesignPatterns/Structural/Proxy/RemoteUserServiceProxy.ts)
      - [`SmartReference.ts`](./DesignPatterns/Structural/Proxy/SmartReference.ts)
  - [`index.ts`](./DesignPatterns/index.ts)
- [`scripts/`](./scripts/)
  - [`generate_readme.py`](./scripts/generate_readme.py)
- [`views/`](./views/)
  - [`index.ejs.html`](./views/index.ejs.html)
  - [`run.ejs.html`](./views/run.ejs.html)
- [`index.ts`](./index.ts)
- [`ISample.ts`](./ISample.ts)

## Installation

```bash
git clone https://github.com/karanba/TypescriptPG.git
cd TypescriptPG
npm install
```

## Usage

```bash
npm run start   # tsx ./index.ts
```
