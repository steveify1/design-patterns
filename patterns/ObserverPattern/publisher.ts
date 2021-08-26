
import { ISubscriber } from './subscriber.interface';

export interface UseGlobalState {
    globalState: object;
    setGlobalState(state: object): void;
}

export class GlobalStateManager {
    private static instance: GlobalStateManager = null;
    private state = Object.create({});
    private subscribers: ISubscriber[] = [];

    private constructor() {}

    public static createStateManager(): GlobalStateManager {
        if (!GlobalStateManager.instance) {
            GlobalStateManager.instance = new GlobalStateManager();
        }

        return GlobalStateManager.instance;
    }

    subscribe(subscriber: ISubscriber, state?: object): void {
        const duplicateEntry = this.subscribers.filter(storedSubscriber => storedSubscriber == subscriber)[0];

        if (!duplicateEntry) {
            this.subscribers.push(subscriber);
            this.setState(state);
        }
    }

    public setState(state: object): void {
        if (state) {
            this.state = { ...this.state, ...state };
            this.publish();
        }
    }

    private publish(): void {
        this.subscribers.forEach(subscriber => {
            if (subscriber.update) {
                subscriber.update(this.state);
            }
        });
    }

    useGlobalState(initialState?: object): UseGlobalState {
        GlobalStateManager.instance.setState(initialState);

        return {
            globalState: GlobalStateManager.instance.state,
            setGlobalState: GlobalStateManager.instance.setState,
        }
    }
}

export const globalStateManager = GlobalStateManager.createStateManager();
