export interface Pluggable {
  do(): void | Promise<void>;
}
