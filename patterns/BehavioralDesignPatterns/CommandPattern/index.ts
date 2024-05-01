import { CommandA, CommandB } from "./command";
import { Invoker } from "./invoker";
import { Receiver } from "./receiver";

// 1. First, the receiver of the commands needs to exists and must be a concrete implementation not necessary of any shared interface
const receiver = new Receiver();

// 2. Defining commands
const commandA = new CommandA(receiver);
const commandB = new CommandB(receiver);

// 3. Define the invoker of these commands
const receiverCommandInvoker = new Invoker(commandA, commandB);

// 4. Now, let's trigger some commands
receiverCommandInvoker.triggerCommandA();
receiverCommandInvoker.triggerCommandB();
