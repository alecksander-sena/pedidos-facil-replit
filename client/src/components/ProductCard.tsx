import React from "react";

type ProductCardProps = {
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
  onAdd: () => void;
};

export default function ProductCard({ name, description, category, price, image, onAdd }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 flex flex-col items-center animate-pop hover:shadow-lg transition-all duration-200 relative">
      <img src={image} alt={name} className="w-24 h-24 object-cover rounded-lg mb-2 shadow border" />
      <div className="font-bold text-base text-center">{name}</div>
      <div className="text-xs text-secondary font-semibold mt-0.5">{category}</div>
      <div className="text-sm text-gray-600 text-center my-1">{description}</div>
      <div className="text-primary font-bold text-lg mt-1">{price}</div>
      <button
        className="mt-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow active:scale-95"
        onClick={onAdd}
      >
        Adicionar
      </button>
    </div>
  );
}