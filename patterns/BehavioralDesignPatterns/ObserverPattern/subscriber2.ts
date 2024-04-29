import { GlobalStateManager } from "./publisher";
import { ISubscriber } from "./subscriber.interface";

export class Subscriber2 implements ISubscriber {
    constructor(private readonly globalStateManager: GlobalStateManager) {
        this.globalStateManager.subscribe(this);
    }

    setState(state: object) {
        this.globalStateManager.setState(state);
    }
    
    update(state: any): void {
        console.log('State in subscriber 2 ', state);
    }
}
