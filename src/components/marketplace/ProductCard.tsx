
import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, onAddToCart }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      <div 
        className="relative h-48 overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
        />
        {product.organic && (
          <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
            <Leaf className="h-3 w-3 mr-1" /> Organic
          </Badge>
        )}
        {product.sellingMethod === 'auction' && (
          <Badge className="absolute top-2 left-2 bg-farmfilo-accent hover:bg-farmfilo-accent/90 text-farmfilo-darkGreen">
            Auction
          </Badge>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 
            className="text-lg font-semibold text-farmfilo-darkGreen hover:text-farmfilo-primary cursor-pointer transition-colors"
            onClick={onClick}
          >
            {product.name}
          </h3>
          <span className="font-bold text-farmfilo-primary">৳{product.price}/{product.unit}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-500">Farmer: {product.farmer}</span>
          <span className="text-xs font-medium text-farmfilo-darkGreen">
            Available: {product.quantityAvailable} {product.unit}
          </span>
        </div>
        <Button 
          variant="outline" 
          className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white flex items-center justify-center gap-2"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart();
          }}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
