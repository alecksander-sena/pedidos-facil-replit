import React from "react";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { items, removeFromCart, clearCart } = useCart();

  return (
    <div className="pt-16 pb-24 px-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>
      {items.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.name} className="bg-white rounded-lg p-3 flex justify-between items-center shadow">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs text-gray-500">{item.category}</div>
                <div className="text-primary">{item.price}</div>
                <div className="text-xs">Qtd: {item.quantity}</div>
              </div>
              <button className="text-red-500" onClick={() => removeFromCart(item.name)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button className="mt-4 w-full bg-secondary text-white py-2 rounded" onClick={clearCart}>
          Limpar Carrinho
        </button>
      )}
    </div>
  );
}