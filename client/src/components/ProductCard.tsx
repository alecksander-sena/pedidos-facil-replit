import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  return (
    <div className="product-card bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-200 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x300?text=Imagem+indisponível';
          }}
        />
        <span className="absolute top-2 right-2 bg-[#eea530] text-white text-xs px-2 py-1 rounded-full font-medium">
          {product.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-poppins font-semibold text-lg">{product.name}</h3>
            <p className="text-[#737373] text-sm mt-1">{product.description}</p>
          </div>
          <div className="font-poppins font-bold text-lg text-[#af1a2d]">
            {formatCurrency(product.price)}
          </div>
        </div>
        <button 
          className="btn-primary mt-4 w-full bg-[#af1a2d] text-white py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-[#9a1626] transition-colors"
          onClick={() => addToCart(product)}
        >
          <Plus size={18} />
          <span>Adicionar</span>
        </button>
      </div>
    </div>
  );
}
