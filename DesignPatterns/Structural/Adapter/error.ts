import { ISample } from "../../../ISample";

interface Error {
  errorMessage: string;
  createdAt: Date;
}

class DivideByZeroError implements Error {
  public errorMessage: string;
  public createdAt: Date;

  constructor() {
    this.errorMessage = "Divide by zero error";
    this.createdAt = new Date();
  }
}

class COMError {
  public errorMessage: string;
  constructor() {
    this.errorMessage = "COM Error";
  }
}

class COMErrorAdapter implements Error {
  public errorMessage: string;
  public createdAt: Date;

  constructor(private comError: COMError) {
    this.errorMessage = comError.errorMessage;
    this.createdAt = new Date();
  }
}

export class ErrorSample implements ISample {
  
    getName(): string {
        return "Error Sample";
    }
    run(): string {
        const error = new DivideByZeroError();
        console.log(error.errorMessage);

        const comError = new COMError();
        const comErrorAdapter = new COMErrorAdapter(comError);

        console.log(comErrorAdapter.errorMessage);
      return "Error Sample Invoked";
    }
}

