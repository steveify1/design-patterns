import { GlobalStateManager } from "./publisher";
import { ISubscriber } from "./subscriber.interface";

export class Category implements ISubscriber {
    private state = {
        categories: [
            {
                name: 'Phone and accessories',
                slug: 'phone-and-accessories'
            },
            {
                name: 'Children clothing',
                slug: 'children-clothing'
            },
        ],
    };

    constructor(private readonly globalStateManager: GlobalStateManager) {
        this.globalStateManager.subscribe(this, this.state);
    }

    setState(state: object) {
        this.globalStateManager.setState(state);
    }
    
    update(state: any): void {
        this.state = state
    }
}
