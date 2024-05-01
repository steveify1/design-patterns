import { ICommand } from "./interface";
import { Receiver } from "./receiver";

export class CommandA implements ICommand {
  constructor(private readonly receiver: Receiver) {}

  execute(): void | Promise<void> {
    this.receiver.doA();
  }

  unexecute(): void | Promise<void> {
    throw new Error(
      "This feature is supposed to simply do the opposite of what the execute method calls on the receiver"
    );
  }
}

export class CommandB implements ICommand {
  constructor(private readonly receiver: Receiver) {}

  execute(): void | Promise<void> {
    this.receiver.doB();
  }

  unexecute(): void | Promise<void> {
    throw new Error(
      "This feature is supposed to simply do the opposite of what the execute method calls on the receiver"
    );
  }
}
