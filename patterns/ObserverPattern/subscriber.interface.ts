export interface ISubscriber {
    update?<T=any>(state: T): void;
}
