import { EnemyShip } from "./interface";

export class BasicEnemyShip implements EnemyShip {
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

export class UFOEnemyShip implements EnemyShip {
    power = 400;
    speed = 50;
    lives = 5;

    constructor(propensity: number = 1) {
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