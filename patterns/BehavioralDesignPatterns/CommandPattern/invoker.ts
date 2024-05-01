import { ICommand } from "./interface";

/**
 *
 */
export class Invoker {
  constructor(
    private readonly commandA: ICommand,
    private readonly commandB: ICommand
  ) {}

  triggerCommandA() {
    this.commandA.execute();
  }

  triggerCommandB() {
    this.commandB.execute();
  }
}
