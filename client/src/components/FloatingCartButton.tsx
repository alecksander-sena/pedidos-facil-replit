import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "wouter";

type Props = {
  itemCount: number;
};

export default function FloatingCartButton({ itemCount }: Props) {
  return (
    <Link href="/cart">
      <button
        className="fixed z-40 bottom-20 right-5 bg-primary text-white rounded-full shadow-lg p-4 flex items-center justify-center animate-pop hover:bg-primary/90 transition-all"
        style={{ boxShadow: "0 4px 24px 0 rgba(0,0,0,0.09)" }}
      >
        <ShoppingCart size={28} />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
            {itemCount}
          </span>
        )}
      </button>
    </Link>
  );
}