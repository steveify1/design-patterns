/**
 * @module Decorator Pattern
 * 
 * @description
 *  This pattern allows us to extend the features or functionalities of an
 * object/class without creating an unneccessary inheritance tree.
 * 
 * A `decorator` is basically a class or function that takes another class or object,
 * extends it, and then returns it. A decorator, in this context, is usually not expected to modify
 * existing features, but only add new ones.
 */

/** 
 * @example
 * This example uses the decorator pattern to make computers of with a base feature set and individually distintive feature sets
 */

/**
 * @name Step 1
 * @todo Create a base computer
 * 
 * Below is the most basic computer class from which other kinds of computers will emerge
 */
class Computer {
    boot(): void {
        console.log('Booting computer...');
    }

    shutDown(): void {
        console.log('Shutting down');
    }

    display(): void {
        console.log('Displaying content on the single screen');
    }

    print(): void {
        console.log('No printer detected');
    }

    renderVideo(): void {
        console.log('Unable to render a video without the dedicated GPU');
    }
}

/**
 * @name ComputerComponentDecorator
 * @description This is a base decorator class that accepts a computer class, extends it and returns it.
 */
class ComputerComponentDecorator extends Computer {
    constructor(private computer: Computer) {
        super();
    }

    boot(): void {
        this.computer.boot();
    }

    shutDown(): void {
        this.computer.shutDown();
    }

    display(): void {
        this.computer.display();
    }

    print(): void {
        this.computer.print();
    }

    renderVideo(): void {
        this.computer.renderVideo();
    }
}

/**
 * Computer with printer decorator
 */
class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    print(): void {
        console.log('Printing content');
    }
}

/**
 * Computer with a dedicated GPU
 */
class ComputerWithDedicatedGPUDecorator extends ComputerComponentDecorator {
    constructor(computer: Computer) {
        super(computer);
    }

    renderVideo(): void {
        this.generateMetaData();
        console.log('Rendering video')
    }

    generateMetaData(): void {
        console.log('Generating video metadata');
    }
}

/**
 * Here we begin to make concrete implementations
 */
class ServerComputer extends Computer {
    boot(): void {
        console.log('Booting server');
    }
}

let server = new ServerComputer();
server = new ComputerWithPrinterDecorator(server);
server = new ComputerWithDedicatedGPUDecorator(server);

server.renderVideo();
