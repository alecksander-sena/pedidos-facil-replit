import { 
  Product, 
  InsertProduct, 
  Order, 
  InsertOrder,
  products,
  orders
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// Interface de armazenamento
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

// Implementação usando banco de dados PostgreSQL
export class DatabaseStorage implements IStorage {
  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return await db.select().from(products).orderBy(products.name);
  }

  async getProduct(id: number): Promise<Product | undefined> {
    const result = await db.select().from(products).where(eq(products.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const result = await db.insert(products).values(insertProduct).returning();
    return result[0];
  }

  // Order methods
  async getAllOrders(): Promise<Order[]> {
    return await db.select().from(orders).orderBy(desc(orders.createdAt));
  }

  async getOrder(id: number): Promise<Order | undefined> {
    const result = await db.select().from(orders).where(eq(orders.id, id));
    return result.length > 0 ? result[0] : undefined;
  }

  async createOrder(insertOrder: InsertOrder): Promise<Order> {
    const result = await db.insert(orders).values(insertOrder).returning();
    return result[0];
  }
}

// Dados iniciais para inserir no banco de dados, caso necessário
const initialProducts: InsertProduct[] = [
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

// Função para inicializar o banco de dados
async function initDb() {
  try {
    // Verificar se já existem produtos no banco
    const existingProducts = await db.select().from(products);
    
    // Se não existirem produtos, inserir os dados iniciais
    if (existingProducts.length === 0) {
      console.log('Inicializando banco de dados com produtos padrão...');
      await db.insert(products).values(initialProducts);
      console.log('Produtos iniciais inseridos com sucesso!');
    }
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
}

// Exporta a instância de armazenamento
export const storage = new DatabaseStorage();

// Inicializa o banco de dados ao importar este módulo
initDb();
