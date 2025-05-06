import React, { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Product, FilterOptions } from '@/types/product';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Filter, 
  Leaf, 
  Star, 
  MapPin, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Layout from '@/components/layout/Layout';
import { Drawer, DrawerTrigger, DrawerContent } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';

// Mock product data with locations
const productsData: Product[] = [
  {
    id: "1",
    name: "Organic Rice",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=400&q=80",
    price: 65,
    farmer: "Rahman Ali",
    farm: "Green Paddy Farms",
    category: "Grains",
    inStock: true,
    unit: "kg",
    ecoFriendly: true,
    organic: true,
    location: "Dhaka",
    description: "Premium quality organic rice grown with traditional farming methods. No chemicals, no pesticides."
  },
  {
    id: "2",
    name: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1518160140141-23ab08b6be02?auto=format&fit=crop&w=400&q=80",
    price: 45,
    farmer: "Amina Begum",
    farm: "Natural Harvest",
    category: "Vegetables",
    inStock: true,
    unit: "kg",
    ecoFriendly: true,
    organic: true,
    location: "Rajshahi",
    description: "Freshly harvested organic vegetables. Direct from farm to your table."
  },
  {
    id: "3",
    name: "Organic Fruits",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&q=80",
    price: 120,
    farmer: "Karim Hossain",
    farm: "Sunshine Orchard",
    category: "Fruits",
    inStock: true,
    unit: "kg",
    ecoFriendly: true,
    organic: true,
    location: "Sylhet",
    description: "Sweet and nutritious organic fruits. Grown with care and harvested at peak ripeness."
  },
  {
    id: "4",
    name: "Farm-Fresh Eggs",
    image: "https://images.unsplash.com/photo-1569127959161-2b1297b2d9a4?auto=format&fit=crop&w=400&q=80",
    price: 75,
    farmer: "Mohammad Hassan",
    farm: "Happy Hen Farm",
    category: "Dairy & Eggs",
    inStock: true,
    unit: "dozen",
    ecoFriendly: true,
    organic: false,
    location: "Khulna",
    description: "Free-range eggs from happy, healthy hens."
  },
  {
    id: "5",
    name: "Natural Honey",
    image: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&fit=crop&w=400&q=80",
    price: 150,
    farmer: "Fatima Akter",
    farm: "Floral Meadows",
    category: "Pantry",
    inStock: true,
    unit: "jar",
    ecoFriendly: true,
    organic: true,
    location: "Barisal",
    description: "Pure, unprocessed honey from local beekeepers."
  },
  {
    id: "6",
    name: "Traditional Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    price: 90,
    farmer: "Ahmed Khan",
    farm: "Aromatic Harvests",
    category: "Pantry",
    inStock: true,
    unit: "set",
    ecoFriendly: false,
    organic: false,
    location: "Dhaka",
    description: "A collection of authentic Bangladeshi spices."
  }
];

// Available locations
const locations = ["All Locations", "Dhaka", "Rajshahi", "Sylhet", "Khulna", "Barisal", "Chittagong"];

// Available categories
const categories = [
  "All Categories",
  "Vegetables",
  "Fruits",
  "Grains",
  "Dairy & Eggs",
  "Pantry",
  "Herbs",
  "Meat"
];

const Marketplace = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productsData);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: "All Categories",
    priceRange: [0, 200],
    organicOnly: false,
    location: "All Locations",
    sortBy: 'default'
  });
  
  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Apply search term
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filters.category !== "All Categories") {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Apply price filter
    result = result.filter(
      product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );
    
    // Apply organic filter
    if (filters.organicOnly) {
      result = result.filter(product => product.organic);
    }
    
    // Apply location filter
    if (filters.location !== "All Locations") {
      result = result.filter(product => product.location === filters.location);
    }
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        // Default sorting - keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [products, filters, searchTerm]);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters({...filters, priceRange: value as [number, number]});
  };
  
  const toggleOrganicFilter = () => {
    setFilters({...filters, organicOnly: !filters.organicOnly});
  };
  
  const resetFilters = () => {
    setFilters({
      category: "All Categories",
      priceRange: [0, 200],
      organicOnly: false,
      location: "All Locations",
      sortBy: 'default'
    });
    setSearchTerm('');
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-farmfilo-darkGreen mb-4">
            FarmFilo Marketplace
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Direct farm-to-table marketplace connecting you with the freshest organic produce from local farmers.
          </p>
        </div>
        
        {/* Mobile Filter Drawer */}
        <div className="block md:hidden mb-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex justify-between items-center"
              >
                <div className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Products
                </div>
                <Badge className="ml-2 bg-farmfilo-primary">
                  {filteredProducts.length}
                </Badge>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-4">Filter Options</h4>
                
                <div className="space-y-6">
                  {/* Search */}
                  <div>
                    <Label htmlFor="mobile-search">Search Products</Label>
                    <Input
                      id="mobile-search"
                      type="search"
                      placeholder="Search by name or description"
                      className="mt-1"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  {/* Category filter */}
                  <div>
                    <Label htmlFor="mobile-category">Category</Label>
                    <Select
                      value={filters.category}
                      onValueChange={(value) =>
                        setFilters({ ...filters, category: value })
                      }
                    >
                      <SelectTrigger id="mobile-category" className="mt-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Location filter */}
                  <div>
                    <Label htmlFor="mobile-location">Location</Label>
                    <Select
                      value={filters.location}
                      onValueChange={(value) =>
                        setFilters({ ...filters, location: value })
                      }
                    >
                      <SelectTrigger id="mobile-location" className="mt-1">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Organic filter */}
                  <div className="flex items-center space-x-2">
                    <Switch 
                      checked={filters.organicOnly}
                      onCheckedChange={toggleOrganicFilter}
                      id="mobile-organic"
                    />
                    <Label htmlFor="mobile-organic" className="flex items-center gap-2">
                      <Leaf className="h-4 w-4 text-green-500" />
                      Organic Only
                    </Label>
                  </div>
                  
                  {/* Price range */}
                  <div>
                    <Label>Price Range (৳{filters.priceRange[0]} - ৳{filters.priceRange[1]})</Label>
                    <Slider
                      defaultValue={[0, 200]}
                      max={200}
                      step={5}
                      value={filters.priceRange}
                      onValueChange={handlePriceChange}
                      className="mt-2"
                    />
                  </div>
                  
                  {/* Sort by */}
                  <div>
                    <Label htmlFor="mobile-sort">Sort By</Label>
                    <Select
                      value={filters.sortBy}
                      onValueChange={(value: any) =>
                        setFilters({ ...filters, sortBy: value })
                      }
                    >
                      <SelectTrigger id="mobile-sort" className="mt-1">
                        <SelectValue placeholder="Sort products" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                        <SelectItem value="rating">Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    onClick={resetFilters}
                    className="w-full mt-4"
                  >
                    Reset Filters
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        
        {/* Desktop search bar */}
        <div className="mb-6">
          <Input
            type="search"
            placeholder="Search products by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-lg mx-auto"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop sidebar filters */}
          <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-farmfilo-darkGreen flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                  >
                    Reset
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Category filter */}
                <div>
                  <Label className="mb-2 block">Category</Label>
                  <Select 
                    value={filters.category} 
                    onValueChange={(value) => setFilters({...filters, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Location filter */}
                <div>
                  <Label className="mb-2 block">Location</Label>
                  <Select 
                    value={filters.location} 
                    onValueChange={(value) => setFilters({...filters, location: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Organic filter */}
                <div className="flex items-center space-x-2">
                  <Switch 
                    checked={filters.organicOnly}
                    onCheckedChange={toggleOrganicFilter}
                    id="organic-filter"
                  />
                  <Label htmlFor="organic-filter" className="flex items-center gap-2">
                    <Leaf className="h-4 w-4 text-green-500" />
                    Organic Only
                  </Label>
                </div>
                
                {/* Price range */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Price Range</Label>
                    <span className="text-sm text-gray-500">
                      ৳{filters.priceRange[0]} - ৳{filters.priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={5}
                    value={filters.priceRange}
                    onValueChange={handlePriceChange}
                  />
                </div>
                
                {/* Sort by */}
                <div>
                  <Label className="mb-2 block">Sort By</Label>
                  <Select 
                    value={filters.sortBy} 
                    onValueChange={(value: any) => setFilters({...filters, sortBy: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sort products" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              
              <CardFooter>
                <Badge className="bg-farmfilo-primary w-full justify-center">
                  {filteredProducts.length} Products
                </Badge>
              </CardFooter>
            </Card>
          </div>
          
          {/* Products grid */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            {filteredProducts.length === 0 ? (
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                <p className="text-gray-500">
                  Try changing your filters or search term.
                </p>
                <Button 
                  variant="outline" 
                  onClick={resetFilters} 
                  className="mt-4"
                >
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-video">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                      {product.organic && (
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">
                          <Leaf className="h-3 w-3 mr-1" /> Organic
                        </Badge>
                      )}
                      {product.ecoFriendly && (
                        <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">
                          Eco-friendly
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="py-4 flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg text-farmfilo-darkGreen">{product.name}</h3>
                        <span className="font-bold text-farmfilo-primary">৳{product.price}/{product.unit}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin className="h-3 w-3 mr-1" />
                        {product.location}
                      </div>
                      <p className="text-sm text-gray-500 mb-3">Farmer: {product.farmer}</p>
                      <p className="text-sm">{product.description}</p>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button 
                        className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen flex items-center justify-center gap-2"
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
