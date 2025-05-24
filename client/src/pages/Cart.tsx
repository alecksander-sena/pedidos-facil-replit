import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Cart() {
  const isAdmin = false;
  const establishmentName = "Lanchonete Exemplo";
  // Adapte para buscar itens do carrinho
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header establishmentName={establishmentName} isAdmin={isAdmin} />
      <main className="pt-16 px-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold my-4">Seu carrinho</h2>
        <div className="text-gray-500 mt-8">Seu carrinho está vazio.</div>
      </main>
      <BottomNav isAdmin={isAdmin} />
    </div>
  );
}