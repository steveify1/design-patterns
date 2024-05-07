import { Pluggable } from "./interface";

/**
 * @module Adapter Pattern
 * @description
 *  The Adapter pattern is a way have distinct implementations of a similar functionality (say the
 * bank transfer features of payment gateways like Paystack, Monnify, Flutterwave, etc.) with each
 * implementation adhering to a set of common interfaces which will be exposed to consumers of the
 * functionality.
 */
class Client {
  constructor(private readonly pluggable: Pluggable) {}

  do() {
    this.pluggable.do();
  }
}

class Target {
  doInParticular() {
    console.log("Doing something specific in a particular way");
  }
}

class PluggableAdapter implements Pluggable {
  constructor(private readonly target: Target) {}

  do() {
    this.target.doInParticular();
  }
}

const target = new Target();
const adapter = new PluggableAdapter(target);
const client = new Client(adapter);

client.do();
