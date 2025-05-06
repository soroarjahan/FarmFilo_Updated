
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  farmer: string;
  farm: string;
  category: string;
  inStock: boolean;
  unit: string;
  ecoFriendly: boolean;
  organic: boolean;
  description: string;
  rating?: number;
  reviews?: number;
  location: string;
  quantityAvailable: number;
  sellingMethod: 'fixed' | 'auction';
  auctionEnds?: string;
}

export interface ImageAnalysisResult {
  id: string;
  fieldName: string;
  date: string;
  imageUrl: string;
  healthyPercentage: number;
  stressPercentage: number;
  diseasePercentage: number;
  notes?: string;
}

export interface FilterOptions {
  category: string;
  priceRange: [number, number];
  organicOnly: boolean;
  location: string;
  sortBy: 'default' | 'price-low' | 'price-high' | 'rating';
}
