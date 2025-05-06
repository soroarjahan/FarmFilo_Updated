
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockProducts } from '@/data/mockProducts';
import { useCart } from '@/contexts/CartContext';
import ProductCard from './ProductCard';
import { Product } from '@/types/product';

interface RelatedProductsProps {
  currentProductId: string;
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ currentProductId, category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Get products in the same category, excluding the current one
    const relatedProducts = mockProducts
      .filter(p => p.category === category && p.id !== currentProductId)
      .slice(0, 4);
      
    setProducts(relatedProducts);
  }, [currentProductId, category]);
  
  if (products.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-farmfilo-darkGreen mb-6">Related Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => navigate(`/product/${product.id}`)}
            onAddToCart={() => addToCart(product, 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
