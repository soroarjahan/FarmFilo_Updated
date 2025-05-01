
import React from 'react';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: "Organic Rice",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=400&q=80",
    price: "৳65/kg",
    farmer: "Rahman Ali"
  },
  {
    name: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1518160140141-23ab08b6be02?auto=format&fit=crop&w=400&q=80",
    price: "৳45/kg",
    farmer: "Amina Begum"
  },
  {
    name: "Organic Fruits",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    price: "৳120/kg",
    farmer: "Karim Hossain"
  }
];

const MarketplaceSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">AgriHaat Marketplace</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Direct farm-to-table marketplace connecting organic farmers with consumers for fair trade and fresh produce.
            </p>
          </div>
          <Button className="mt-6 md:mt-0 bg-farmfilo-accent text-farmfilo-darkGreen hover:bg-farmfilo-accent/90 font-medium">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-farmfilo-darkGreen">{product.name}</h3>
                  <span className="font-bold text-farmfilo-primary">{product.price}</span>
                </div>
                <p className="text-gray-500 mb-4">Farmer: {product.farmer}</p>
                <Button variant="outline" className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-farmfilo-darkGreen mb-2">Become a Partner Farmer</h3>
              <p className="text-gray-700 max-w-xl">
                Join our growing network of organic farmers. Get training, resources, and direct access to consumers.
              </p>
            </div>
            <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen">
              Register as Farmer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
