
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  farmer: string;
  farm: string;
  unit: string;
  organic: boolean;
  quantityAvailable: number;
  sellingMethod: 'fixed' | 'auction';
  deliveryWindow?: {
    start: string;
    end: string;
  };
  auctionEnds?: string;
  cropData?: {
    plantingDate?: string;
    expectedHarvestDate?: string;
    actualYield?: number;
    expectedYield?: number;
    fieldLocation?: string;
  };
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
