export interface ICommand {
  execute(): void | Promise<void>;
  unexecute(): void | Promise<void>;
}
