import React, { useState } from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import FloatingCartButton from "@/components/FloatingCartButton";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Hambúrguer Artesanal",
    category: "Sanduíche",
    description: "Hambúrguer suculento com queijo e bacon.",
    price: "R$ 19,90",
    image: "/img/hamburguer.jpg",
  },
  {
    name: "Pizza Calabresa",
    category: "Pizza",
    description: "Pizza de calabresa com muito queijo.",
    price: "R$ 29,90",
    image: "/img/pizza.jpg",
  },
  {
    name: "Pastel de Carne",
    category: "Pastel",
    description: "Pastel crocante recheado com carne.",
    price: "R$ 8,00",
    image: "/img/pastel.jpg",
  },
];

export default function Home() {
  const [cart, setCart] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header storeName="Seu Estabelecimento" />
      <main className="pt-16 px-4 max-w-md mx-auto">
        <div className="space-y-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              {...product}
              onAdd={() => setCart(c => c + 1)}
            />
          ))}
        </div>
      </main>
      <BottomNav />
      <FloatingCartButton count={cart} onClick={() => alert("Abrir carrinho")} />
    </div>
  );
}