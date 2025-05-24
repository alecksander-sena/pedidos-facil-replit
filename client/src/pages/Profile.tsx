import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Profile() {
  const isAdmin = true;
  const establishmentName = "Lanchonete Exemplo";
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header establishmentName={establishmentName} isAdmin={isAdmin} />
      <main className="pt-16 px-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold my-4">Perfil do Administrador</h2>
        <div className="text-gray-500 mt-8">Aqui você poderá editar os dados do estabelecimento e produtos.</div>
      </main>
      <BottomNav isAdmin={isAdmin} />
    </div>
  );
}