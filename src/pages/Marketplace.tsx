
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const products = [
  {
    id: 1,
    name: "Organic Rice",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=400&q=80",
    price: "৳65/kg",
    farmer: "Rahman Ali",
    location: "Mymensingh",
    category: "Grains",
    rating: 4.8,
    availability: "In Stock"
  },
  {
    id: 2,
    name: "Fresh Vegetables Bundle",
    image: "https://images.unsplash.com/photo-1518160140141-23ab08b6be02?auto=format&fit=crop&w=400&q=80",
    price: "৳45/kg",
    farmer: "Amina Begum",
    location: "Rajshahi",
    category: "Vegetables",
    rating: 4.7,
    availability: "In Stock"
  },
  {
    id: 3,
    name: "Organic Fruits Mix",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    price: "৳120/kg",
    farmer: "Karim Hossain",
    location: "Khulna",
    category: "Fruits",
    rating: 4.9,
    availability: "In Stock"
  },
  {
    id: 4,
    name: "Organic Honey",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&fit=crop&w=400&q=80",
    price: "৳450/bottle",
    farmer: "Fazlur Rahman",
    location: "Sylhet",
    category: "Other",
    rating: 5.0,
    availability: "In Stock"
  },
  {
    id: 5,
    name: "Fresh Eggs",
    image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=400&q=80",
    price: "৳120/dozen",
    farmer: "Nasima Akther",
    location: "Dhaka",
    category: "Dairy & Eggs",
    rating: 4.6,
    availability: "Limited Stock"
  },
  {
    id: 6,
    name: "Organic Potatoes",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
    price: "৳35/kg",
    farmer: "Abdul Majid",
    location: "Rangpur",
    category: "Vegetables",
    rating: 4.5,
    availability: "In Stock"
  },
  {
    id: 7,
    name: "Organic Lentils",
    image: "https://images.unsplash.com/photo-1515543904379-3d757abe59e5?auto=format&fit=crop&w=400&q=80",
    price: "৳95/kg",
    farmer: "Hosneara Begum",
    location: "Barishal",
    category: "Grains",
    rating: 4.7,
    availability: "In Stock"
  },
  {
    id: 8,
    name: "Fresh Milk",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    price: "৳80/liter",
    farmer: "Mofizur Rahman",
    location: "Tangail",
    category: "Dairy & Eggs",
    rating: 4.8,
    availability: "In Stock"
  }
];

const categories = [
  "All Categories",
  "Vegetables",
  "Fruits",
  "Grains",
  "Dairy & Eggs",
  "Other"
];

const locations = [
  "All Locations",
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Mymensingh",
  "Sylhet",
  "Rangpur",
  "Barishal",
  "Tangail"
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [organicOnly, setOrganicOnly] = useState(false);

  // Filter products based on search term, category, location, and organic filter
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesLocation = selectedLocation === "All Locations" || product.location === selectedLocation;
    const matchesOrganic = !organicOnly || product.name.toLowerCase().includes("organic");
    
    return matchesSearch && matchesCategory && matchesLocation && matchesOrganic;
  });

  return (
    <Layout>
      <div className="pt-24 pb-16 leaf-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-farmfilo-darkGreen mb-4">AgriHaat Marketplace</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Direct farm-to-table marketplace connecting organic farmers with consumers for fair trade and fresh produce.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input
                  type="text"
                  placeholder="Search products or farmers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
              <div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="organic"
                  checked={organicOnly}
                  onCheckedChange={() => setOrganicOnly(!organicOnly)}
                />
                <label
                  htmlFor="organic"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Organic Products Only
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-farmfilo-darkGreen">{product.name}</h3>
                    <span className="font-bold text-farmfilo-primary">{product.price}</span>
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    <p>Farmer: {product.farmer}</p>
                    <p>Location: {product.location}</p>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </span>
                    <span className="text-xs px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen rounded-full">
                      {product.availability}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No products found matching your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Categories");
                  setSelectedLocation("All Locations");
                  setOrganicOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          <div className="mt-16 bg-farmfilo-lightGreen rounded-lg p-8 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-farmfilo-darkGreen mb-2">Become a Partner Farmer</h3>
                <p className="text-gray-700 max-w-xl">
                  Join our growing network of organic farmers. Get training, resources, and direct access to consumers through our AgriHaat marketplace.
                </p>
              </div>
              <Button className="bg-farmfilo-primary text-white hover:bg-farmfilo-darkGreen" size="lg">
                Register as Farmer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
