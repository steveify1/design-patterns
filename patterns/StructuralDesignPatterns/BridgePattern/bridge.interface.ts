export interface TargetAdapter {
  run(): void;
}

export interface IExecutor {
  target: TargetAdapter;
  exec(): void;
}
