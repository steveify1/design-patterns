/**
 * @module Singleton Pattern
 * 
 *@description
    The singleton pattern is a way to have private constructors and ensuring
    that a class can only have one instance throughout an application. The class
    must hence expose a way to access this single instance

    @example In this example we create a `ProductManager` singleton.
 */
class ProductManager {
    private static instance: ProductManager;
    private quantity = 10;

    private constructor() {}

    public static getInstance(): ProductManager {
        this.instance =  this.instance ? this.instance : new ProductManager();
        return this.instance;
    }

    getProductQuantity(): void {
        console.log('Fetched product quantity', this.quantity);
    }

    restock(unit: number): void {
        this.quantity += unit;
    }
}

const productManager1 = ProductManager.getInstance();
const productManager2 = ProductManager.getInstance();

productManager1.restock(2);
productManager2.getProductQuantity();
