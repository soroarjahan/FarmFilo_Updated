
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ShoppingCart, ArrowUpDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/marketplace/ProductCard';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/types/product';
import { Skeleton } from '@/components/ui/skeleton';
import { mockProducts } from '@/data/mockProducts';

const Marketplace = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'name_asc' | 'name_desc'>('price_asc');
  
  // Get unique categories from products
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      const filteredProducts = mockProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
        
        return matchesSearch && matchesCategory;
      });
      
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortBy) {
          case 'price_asc':
            return a.price - b.price;
          case 'price_desc':
            return b.price - a.price;
          case 'name_asc':
            return a.name.localeCompare(b.name);
          case 'name_desc':
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
      
      setProducts(sortedProducts);
      setLoading(false);
    }, 600);
    
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, sortBy]);
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setLoading(true);
  };
  
  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">FarmFilo Basket - Organic Marketplace</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Browse fresh organic produce directly from our farmers. Every purchase supports sustainable farming and healthy communities.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-10"
              placeholder="Search products, farmers, or keywords"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" /> 
                {selectedCategory || "All Categories"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => handleCategoryChange(null)}>
                  All Categories
                </DropdownMenuItem>
                {categories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => handleCategoryChange(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" /> Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Sort Products</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => setSortBy('price_asc')}>
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price_desc')}>
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('name_asc')}>
                  Name: A to Z
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('name_desc')}>
                  Name: Z to A
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {selectedCategory && (
          <div className="mb-4 flex items-center">
            <span className="text-sm mr-2">Active filter:</span>
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory}
              <button 
                onClick={() => handleCategoryChange(null)} 
                className="ml-1 hover:bg-gray-100 rounded-full h-4 w-4 inline-flex items-center justify-center"
              >
                ×
              </button>
            </Badge>
          </div>
        )}
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={() => handleProductClick(product.id)}
                  onAddToCart={() => addToCart(product, 1)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No Products Found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter to find what you're looking for.</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}>
                Clear Filters
              </Button>
            </div>
          )
        )}
      </div>
    </Layout>
  );
};

export default Marketplace;
