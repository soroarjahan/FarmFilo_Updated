
import React, { useState } from 'react';
import { Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product';
import { formatDistanceToNow } from '@/utils/dateUtils';

interface BidSectionProps {
  product: Product;
}

const BidSection: React.FC<BidSectionProps> = ({ product }) => {
  const [bidAmount, setBidAmount] = useState<number>(Math.ceil(product.price * 1.1));
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleBidAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setBidAmount(value);
    }
  };

  const handlePlaceBid = () => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please log in to place a bid",
        variant: "destructive",
      });
      navigate('/login', { state: { from: window.location.pathname } });
      return;
    }
    
    if (bidAmount <= product.price) {
      toast({
        title: "Bid too low",
        description: "Your bid must be higher than the current price",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Bid placed successfully!",
      description: `Your bid of ৳${bidAmount} has been placed. You will be notified if you win the auction.`,
      duration: 5000,
    });
  };
  
  const auctionEndsDate = product.auctionEnds ? new Date(product.auctionEnds) : null;
  const timeRemaining = auctionEndsDate ? formatDistanceToNow(auctionEndsDate) : '';

  return (
    <div className="border border-farmfilo-accent/50 rounded-lg p-6 bg-farmfilo-accent/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-farmfilo-primary" />
          Auction
        </h3>
        
        <div className="flex items-center gap-2 text-farmfilo-darkGreen">
          <Clock className="h-4 w-4" />
          <span className="text-sm font-medium">
            {timeRemaining ? `Ends in ${timeRemaining}` : 'Auction in progress'}
          </span>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Current Price</p>
        <p className="text-2xl font-bold text-farmfilo-primary">৳{product.price}/{product.unit}</p>
        <p className="text-xs text-gray-500 mt-1">Starting price • 3 bids so far</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="bid-amount" className="text-sm font-medium block mb-1">Your Bid (৳)</label>
          <Input
            id="bid-amount"
            type="number"
            min={product.price + 1}
            value={bidAmount}
            onChange={handleBidAmountChange}
            className="text-lg font-medium"
          />
          <p className="text-xs text-gray-500 mt-1">
            Minimum bid: ৳{product.price + 1}
          </p>
        </div>
        
        <Button 
          className="w-full bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white"
          onClick={handlePlaceBid}
        >
          Place Bid
        </Button>
        
        <div className="text-xs text-gray-500">
          <p>By placing a bid, you agree to pay the amount if you win the auction.</p>
          <p className="mt-1">All bids are binding and cannot be retracted.</p>
        </div>
      </div>
    </div>
  );
};

export default BidSection;
