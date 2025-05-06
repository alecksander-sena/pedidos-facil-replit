import { 
  Product, 
  InsertProduct, 
  Order, 
  InsertOrder 
} from "@shared/schema";

// Modify the interface with CRUD methods we need
export interface IStorage {
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Order methods
  getAllOrders(): Promise<Order[]>;
  getOrder(id: number): Promise<Order | undefined>;
  createOrder(order: InsertOrder): Promise<Order>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private orders: Map<number, Order>;
  private productCurrentId: number;
  private orderCurrentId: number;

  constructor() {
    this.products = new Map();
    this.orders = new Map();
    this.productCurrentId = 1;
    this.orderCurrentId = 1;
    
    // Add some sample products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "Hamburger Clássico",
        description: "Pão, carne 180g, queijo, alface, tomate e molho especial",
        price: 28.90,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Hamburgers"
      },
      {
        name: "Pizza Pepperoni",
        description: "Molho de tomate, mussarela e pepperoni",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Pizzas"
      },
      {
        name: "Refrigerante Cola",
        description: "Lata 350ml",
        price: 5.90,
        image: "https://images.unsplash.com/photo-1613167362488-b1ca2113373c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Bebidas"
      },
      {
        name: "Batata Frita",
        description: "Porção grande com molho especial",
        price: 18.90,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Combos"
      },
      {
        name: "Milkshake de Chocolate",
        description: "Copo 400ml com calda e chantilly",
        price: 15.90,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Sobremesas"
      },
      {
        name: "Salada com Frango",
        description: "Mix de folhas, frango grelhado, tomate e molho",
        price: 25.90,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        category: "Hamburgers"
      }
    ];
    
    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productCurrentId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  // Order methods
  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }

  async getOrder(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const id = this.orderCurrentId++;
    const now = new Date();
    const order: Order = { 
      ...insertOrder, 
      id,
      createdAt: now
    };
    this.orders.set(id, order);
    return order;
  }
}

export const storage = new MemStorage();
