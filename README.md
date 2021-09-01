# Design Patterns

This repo discusses a number of design patterns using code examples. Although, the code samples are written in Typescript, I try to ensure that the basic idea and purpose of any given pattern is well relayed.

For questions and suggestions, you can create an issue, leave a comment or shoot me a direct message at hello@nwakasistephen.com

#### Outline

- Observer Pattern
- Singleton Pattern
- Decorator Pattern
- Adapter Pattern
- Command Pattern
- Factory Method Pattern
- Abstract Factory Pattern
- Strategy Pattern
- Facade Pattern
- Proxy Pattern
- Bridge Pattern
- Structural Patterns
- Template Method Pattern
- Composite Pattern
- Iterator Pattern
- State Pattern
- Null Object Pattern
- Builder Pattern
- Prototype Pattern
- Flywweight Pattern
- Chain of Responsibility Pattern
- Mediator Pattern
- Visitor Pattern


```typescript
/**@module getting-started.ts */
const mood = 'Study Time!';
```

#### Factory Method Pattern

This pattern delegates the instantiation of a given class (or set of classes of the same interface) to another class (or a set of classes of the same interface). The purpose of the factory method pattern is to assign the responsiblity of instantiating a given class (let's call it the Subject) to another class which  we'll call the Creator. In other words, the Creator hold the responsiblity if instatiating the Subject; the Creator encapsulates some logic required for the determination of the creation/instantiation of the Subject or a given type of the Subject.

The Factory Method pattern is useful in the following scenarios where we have different types of the Subject and we want to logically determine which type we'll instantiate at different times in our project. For example, let's assume we are building a game with different types of `EnemyShip`s  showing up at different levels in our program. We can decide to have an `EnemyShipFactory` whose purpose is to logically determine which type of `EnemyShip` is created at different levels.

Let's define these interfaces below.
```typescript
interface EnemyShip {
    power: number;
    speed: number;
    lives: number;
    shoot: () => any;
    aimAtTarget: () => any;

}

interface EnemyShipFactory {
    createEnemyShip(): EnemyShip;
}
```

We'll create two types of enemy ships. A `BasicEnemyShip` and a `UFOEnemyShip`. Both ship will be flexible enough to be upgraded at run time at different levels.

```typescript
class BasicEnemyShip implements EnemyShip {
    power = 100;
    speed = 20;
    lives = 1;

    constructor(propensity: number = 1) {
        this.power = this.power * propensity;
        this.speed = this.speed * propensity;
        this.lives = this.lives * propensity;
    }

    shoot() {
        console.log('Basic enemy ship is shooting at player');
    }

    aimAtTarget() {
        console.log('Basic enemy ship is aiming at player');
    }
}

class UFOEnemyShip implements EnemyShip {
    power = 400;
    speed = 50;
    lives = 5;

    constructor(propensity: number =  1) {
        this.power = this.power * propensity;
        this.speed = this.speed * propensity;
        this.lives = this.lives * propensity;
    }

    shoot() {
        console.log('UFO enemy ship is shooting at player');
    }

    aimAtTarget() {
        console.log('UFO enemy ship is aiming at player');
    }
}
```

Now, the `EnemyShipFactory` interface we created is going to allow have multiple enemy ship factory classes that handle specialized logic for creating enemy ships. In this example, we are only going to have on `EnemyShipFactory` class whose logic is based on the game levels. But, Hey!! The sky is the limit with this. :-D

```typescript
class LevelBasedEnemyShipFactory implements EnemyShipFactory {
    // A method with some basic logic for creating enemy ships.
    createEnemyShip(level: number): EnemyShip {
        let ship: EnemyShip;

        if (level < 5) {
            ship = new BasicEnemyShip();
        } else if (level < 10) {
            ship = new UFOEnemyShip();
        } else if (level < 15){
            ship = new BasicEnemyShip(2);
        } else {
            ship = new UFOEnemyShip(2);
        }

        return ship;
    }
}
```

Time to create some enemy ships!

```typescript
let level: number;

const levelBasedEnemyShipFactory = new LevelBasedEnemyShipFactory();

// Level 1
level = 1;
const enemyShip1A = levelBasedEnemyShipFactory.createEnemyShip(level);
const enemyShip1B = levelBasedEnemyShipFactory.createEnemyShip(level);

// Level 2
level = 2;
const enemyShip2A = levelBasedEnemyShipFactory.createEnemyShip(level);
const enemyShip2B = levelBasedEnemyShipFactory.createEnemyShip(level);

// ... Fast forward to level 9
level = 9;
const enemyShip9A = levelBasedEnemyShipFactory.createEnemyShip(level);
const enemyShip9B = levelBasedEnemyShipFactory.createEnemyShip(level);
```

>  Tips
    Instead of manually creating the ships like we did at every level, you can have a class whose job is to create ships at a given level after a specified interval, or at random intervals to make it more dynamic.

In conclusion, the Factory Method pattern is truly a power way of making certain business operation very flexible.
