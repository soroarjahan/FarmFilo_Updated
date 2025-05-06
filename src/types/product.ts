
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
}
