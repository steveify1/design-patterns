// Time to create some enemy ships!
import { LevelBasedEnemyShipFactory } from "./enemy-ship-factories";

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

console.log(enemyShip1A.lives);
console.log(enemyShip9A.lives);