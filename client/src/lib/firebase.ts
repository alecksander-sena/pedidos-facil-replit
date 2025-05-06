import { Product, Order } from "@/types";

// Sample product data for development
const sampleProducts: Product[] = [
  {
    id: "1",
    name: "X-Burguer",
    description: "Hambúrguer com queijo, alface, tomate e molho especial",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500",
    category: "Hambúrgueres"
  },
  {
    id: "2",
    name: "X-Bacon",
    description: "Hambúrguer com queijo, bacon crocante, alface, tomate e molho especial",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500",
    category: "Hambúrgueres"
  },
  {
    id: "3",
    name: "X-Salada",
    description: "Hambúrguer com queijo, alface, tomate, cebola e maionese",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?q=80&w=500",
    category: "Hambúrgueres"
  },
  {
    id: "4",
    name: "Batata Frita",
    description: "Porção de batatas fritas crocantes",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=500",
    category: "Acompanhamentos"
  },
  {
    id: "5",
    name: "Onion Rings",
    description: "Anéis de cebola empanados e fritos",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=500",
    category: "Acompanhamentos"
  },
  {
    id: "6",
    name: "Refrigerante",
    description: "Lata 350ml - Coca-Cola, Guaraná ou Sprite",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1629203432180-71e9b18d856e?q=80&w=500",
    category: "Bebidas"
  },
  {
    id: "7",
    name: "Suco Natural",
    description: "Copo 400ml - Laranja, Limão ou Abacaxi",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=500",
    category: "Bebidas"
  },
  {
    id: "8",
    name: "Milk-shake",
    description: "Copo 400ml - Chocolate, Morango ou Baunilha",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1626078427704-5cc048397cf3?q=80&w=500",
    category: "Bebidas"
  },
  {
    id: "9",
    name: "Brownie",
    description: "Brownie de chocolate com calda e sorvete de baunilha",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500",
    category: "Sobremesas"
  },
  {
    id: "10",
    name: "Pudim",
    description: "Pudim de leite condensado cremoso",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1614171643011-a1f4352d3f5f?q=80&w=500",
    category: "Sobremesas"
  }
];

// Mock order IDs
let orderIdCounter = 1;

// Function to fetch products
export const fetchProducts = async (): Promise<Product[]> => {
  // For demo purposes, we're returning sample products
  console.log("Using sample products");
  return sampleProducts;
};

// Function to save order
export const saveOrder = async (order: Omit<Order, "id" | "createdAt">): Promise<string> => {
  // For demo purposes, we're just returning a mock order ID
  const orderId = `order-${orderIdCounter++}`;
  console.log(`Created order with ID: ${orderId}`, order);
  return orderId;
};
