class ElsaStateManager<T = any> {
  private static instance: ElsaStateManager;
  public state = new Map<string, T>();

  private constructor() {}

  static getInstance<T>(): ElsaStateManager<T> {
    if (!ElsaStateManager.instance) {
      ElsaStateManager.instance = new ElsaStateManager<T>();
    }

    return ElsaStateManager.instance;
  }

  getState(): Map<string, any> {
    return this.state;
  }

  updateState(key: string, value: T): void {
    this.state.set(key, value);
  }
}

// Tests:
const manager1 = ElsaStateManager.getInstance<string>();
manager1.updateState("name", "seyi");
console.log(manager1.getState());

const manager2 = ElsaStateManager.getInstance<string>();
manager2.updateState("age", "26");
console.log(manager1.getState());

const manager3 = ElsaStateManager.getInstance<string>();
manager3.updateState("name", "ogadagidi");
console.log(manager1.getState().get("name"));
