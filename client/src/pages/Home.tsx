import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import ProductGrid from '@/components/ProductGrid';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import ConfirmationModal from '@/components/ConfirmationModal';
import FloatingCartButton from '@/components/FloatingCartButton';
import { fetchProducts } from '@/lib/firebase';
import { Product } from '@/types';

export default function Home() {
  // State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch products from Firebase
  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);
        const productsData = await fetchProducts();
        setProducts(productsData);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setIsLoading(false);
      }
    }
    
    loadProducts();
  }, []);

  // Filter products by category and search query
  const filteredProducts = products.filter((product: Product) => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Cart handlers
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  
  // Checkout handlers
  const openCheckout = () => {
    setIsCheckoutOpen(true);
    closeCart();
  };
  const closeCheckout = () => setIsCheckoutOpen(false);
  
  // Confirmation handlers
  const openConfirmation = () => {
    setIsConfirmationOpen(true);
    closeCheckout();
  };
  const closeConfirmation = () => setIsConfirmationOpen(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header openCart={openCart} />
      
      <main className="container mx-auto px-4 py-6 relative">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-poppins font-semibold">Cardápio</h2>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar produtos..." 
              className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <i className="ri-search-line absolute left-3 top-2.5 text-gray-400"></i>
          </div>
        </div>
        
        <ProductGrid 
          products={filteredProducts} 
          isLoading={isLoading} 
          error={error as Error} 
        />
      </main>
      
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={closeCart} 
        onCheckout={openCheckout} 
      />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={closeCheckout} 
        onConfirm={openConfirmation} 
      />
      
      <ConfirmationModal 
        isOpen={isConfirmationOpen} 
        onClose={closeConfirmation} 
      />
      
      <FloatingCartButton onClick={openCart} />
      
      {/* Cart overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeCart}
        ></div>
      )}
    </div>
  );
}
