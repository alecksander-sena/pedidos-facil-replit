import React from "react";
import { Home, ShoppingCart, User } from "lucide-react";

type Props = {
  isOwner?: boolean;
};

export default function BottomNav({ isOwner = false }: Props) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around items-center py-2 z-20">
      <button className="flex flex-col items-center text-primary">
        <Home size={24} />
        <span className="text-xs">Início</span>
      </button>
      <button className="flex flex-col items-center text-primary">
        <ShoppingCart size={24} />
        <span className="text-xs">Carrinho</span>
      </button>
      {isOwner && (
        <button className="flex flex-col items-center text-primary">
          <User size={24} />
          <span className="text-xs">Perfil</span>
        </button>
      )}
    </nav>
  );
}