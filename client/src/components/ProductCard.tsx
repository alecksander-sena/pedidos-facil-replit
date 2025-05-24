import React from "react";

type ProductCardProps = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  onAdd: () => void;
};

export default function ProductCard({ name, category, description, price, image, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-3 flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg duration-200">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg mb-2" />
      <div className="font-semibold text-base text-center">{name}</div>
      <div className="text-xs text-secondary mb-1">{category}</div>
      <div className="text-sm text-gray-500 text-center mb-2">{description}</div>
      <div className="text-primary font-bold text-lg mt-1">{price}</div>
      <button
        className="mt-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 active:scale-95 transition"
        onClick={onAdd}
      >
        Adicionar
      </button>
    </div>
  );
}