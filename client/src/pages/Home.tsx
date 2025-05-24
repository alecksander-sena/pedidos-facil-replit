import React from "react";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import BottomNav from "@/components/BottomNav";
import FloatingCartButton from "@/components/FloatingCartButton";

const products = [
  {
    name: "Hambúrguer Artesanal",
    description: "Hambúrguer suculento, queijo cheddar e molho especial.",
    category: "Lanches",
    price: "R$ 19,90",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco.",
    category: "Pizza",
    price: "R$ 29,90",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Pastel de Carne",
    description: "Pastel crocante recheado com carne bem temperada.",
    category: "Pastel",
    price: "R$ 8,00",
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  },
];

export default function Home() {
  const isAdmin = false; // Troque para true para testar visão do administrador
  const establishmentName = "Lanchonete Exemplo";
  const cartItemCount = 2; // Exemplo

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header establishmentName={establishmentName} isAdmin={isAdmin} onLoginClick={() => alert("Login/Edição")} />
      <main className="pt-16 px-4 max-w-md mx-auto">
        <div className="space-y-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              category={product.category}
              price={product.price}
              image={product.image}
              onAdd={() => alert(`Adicionado: ${product.name}`)}
            />
          ))}
        </div>
      </main>
      <FloatingCartButton itemCount={cartItemCount} />
      <BottomNav isAdmin={isAdmin} />
    </div>
  );
}