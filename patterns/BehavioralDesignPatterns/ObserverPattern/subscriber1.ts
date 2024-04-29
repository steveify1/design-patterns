import { GlobalStateManager } from "./publisher";
import { ISubscriber } from "./subscriber.interface";

export class Profile implements ISubscriber {
    private state: any;

    constructor(private readonly globalStateManager: GlobalStateManager) {
        this.globalStateManager.subscribe(this, {
            currentUser: {
                firstName: 'Steve',
                lastName: 'Nwakasi',
                email: 'nwakasistephen@gmail.com',
                role: 'customer',
            }
        });
    }

    updateProfile(data: object) {
        this.globalStateManager.setState({
            currentUser: {
                ...this.state.currentUser,
                ...data,
            }
        });
    }

    update(state: any): void {
        this.state = state;
    }
}
