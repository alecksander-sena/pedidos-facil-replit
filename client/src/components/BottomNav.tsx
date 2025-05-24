import React from "react";
import { Home, ShoppingCart, User } from "lucide-react";
import { useLocation, Link } from "wouter";

type Props = {
  isAdmin: boolean;
};

export default function BottomNav({ isAdmin }: Props) {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-lg flex justify-around items-center py-2 z-30">
      <Link href="/">
        <button className={`flex flex-col items-center ${location === "/" ? "text-primary" : "text-gray-400"}`}>
          <Home size={24} />
          <span className="text-xs">Início</span>
        </button>
      </Link>
      <Link href="/cart">
        <button className={`flex flex-col items-center ${location === "/cart" ? "text-primary" : "text-gray-400"}`}>
          <ShoppingCart size={24} />
          <span className="text-xs">Carrinho</span>
        </button>
      </Link>
      {isAdmin && (
        <Link href="/profile">
          <button className={`flex flex-col items-center ${location === "/profile" ? "text-primary" : "text-gray-400"}`}>
            <User size={24} />
            <span className="text-xs">Perfil</span>
          </button>
        </Link>
      )}
    </nav>
  );
}