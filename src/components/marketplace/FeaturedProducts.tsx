
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { mockProducts } from '@/data/mockProducts';
import { useCart } from '@/contexts/CartContext';
import ProductCard from './ProductCard';

const FeaturedProducts: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Get 4 featured products
  const featuredProducts = mockProducts.slice(0, 4);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Fresh organic produce directly from our network of certified farmers. Sustainably grown and harvested for you.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" asChild>
            <Link to="/marketplace">View All Products</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => navigate(`/product/${product.id}`)}
              onAddToCart={() => addToCart(product, 1)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white px-8">
            <Link to="/marketplace" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Browse All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
