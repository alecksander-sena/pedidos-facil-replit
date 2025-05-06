import { useCart } from '@/context/CartContext';

interface FloatingCartButtonProps {
  onClick: () => void;
}

export default function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { totalItems } = useCart();
  
  return (
    <div 
      className="fixed bottom-6 right-6 bg-[#af1a2d] text-white rounded-full shadow-lg p-4 md:hidden z-30 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <i className="ri-shopping-cart-2-line text-xl"></i>
        <span 
          className="absolute -top-2 -right-2 bg-[#eea530] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
        >
          {totalItems}
        </span>
      </div>
    </div>
  );
}
