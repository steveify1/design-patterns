export class Receiver {
  doA(): void | Promise<void> {
    console.log("Doing A on the receiver");
  }

  doB(): void | Promise<void> {
    console.log("Doing B on the receiver");
  }
}
