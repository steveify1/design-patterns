import { IExecutor, TargetAdapter } from "./bridge.interface";

class ExecutorA implements IExecutor {
  constructor(public readonly target: TargetAdapter) {}

  exec(): void {
    this.target.run();
  }
}

// Define Adapters
class AdapterA implements TargetAdapter {
  constructor(private target: TargetA) {}

  run(): void {
    this.target.doSomeTargetSpecificTask();
  }
}

class AdapterB implements TargetAdapter {
  constructor(private target: TargetB) {}

  run(): void {
    this.target.doSomeTargetSpecificTask();
  }
}

// Define Targets
class TargetA {
  doSomeTargetSpecificTask() {
    console.log("Doing some targetA-specific task");
  }
}

class TargetB {
  doSomeTargetSpecificTask() {
    console.log("Doing some targetB-specific task");
  }
}

// Testing things out
const targetA = new TargetA();
const adapterA = new AdapterA(targetA);

const targetB = new TargetB();
const adapterB = new AdapterA(targetB);

const executorA1 = new ExecutorA(adapterA);
executorA1.exec();

const executorA2 = new ExecutorA(adapterB);
executorA2.exec();
