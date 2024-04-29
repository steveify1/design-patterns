import { BasicEnemyShip, UFOEnemyShip } from "./enemy-ships";
import { EnemyShipFactory, EnemyShip } from "./interface";

export class LevelBasedEnemyShipFactory implements EnemyShipFactory {
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