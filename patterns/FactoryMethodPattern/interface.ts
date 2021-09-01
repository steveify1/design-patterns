export interface EnemyShip {
    power: number;
    speed: number;
    lives: number;
    shoot: () => any;
    aimAtTarget: () => any;

}

export  interface EnemyShipFactory {
    createEnemyShip: Function;
}