
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Product } from '@/types/product';
import { mockProducts } from '@/data/mockProducts';
import { Search, Package, RefreshCw, AlertTriangle } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface InventoryItem extends Product {
  updatedQuantity?: number;
}

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [inventory, setInventory] = useState<InventoryItem[]>(mockProducts);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [updateQuantityDialog, setUpdateQuantityDialog] = useState(false);
  const [newQuantity, setNewQuantity] = useState<number>(0);
  const [lowStockThreshold] = useState(20);
  
  // Filter inventory based on search term
  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleUpdateStock = (item: InventoryItem) => {
    setSelectedItem(item);
    setNewQuantity(item.quantityAvailable);
    setUpdateQuantityDialog(true);
  };
  
  const confirmUpdateStock = () => {
    if (selectedItem) {
      // In a real app, this would make an API call
      setInventory(inventory.map(item => 
        item.id === selectedItem.id ? 
        {...item, quantityAvailable: newQuantity} : 
        item
      ));
      
      toast.success(`Updated ${selectedItem.name} quantity to ${newQuantity}`);
      setUpdateQuantityDialog(false);
    }
  };
  
  const lowStockItems = inventory.filter(item => item.quantityAvailable <= lowStockThreshold);

  return (
    <div className="space-y-6">
      {lowStockItems.length > 0 && (
        <Alert className="bg-amber-50 border-amber-200">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Low Stock Alert</AlertTitle>
          <AlertDescription className="text-amber-700">
            {lowStockItems.length} product{lowStockItems.length > 1 ? 's are' : ' is'} running low on stock.
          </AlertDescription>
        </Alert>
      )}
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl font-bold">Inventory Management</CardTitle>
            <CardDescription>Track and update your product inventory</CardDescription>
          </div>
          <Button 
            variant="outline" 
            onClick={() => toast.info("Inventory report downloaded")}
          >
            Download Report
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 pb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search inventory..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button 
              variant="outline"
              onClick={() => toast.success("Inventory refreshed")}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="hidden md:table-cell">Category</TableHead>
                  <TableHead>Stock Qty</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInventory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                      No inventory found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center space-x-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-10 w-10 rounded-md object-cover"
                          />
                          <div>{item.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">{item.category}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span 
                            className={`font-medium ${
                              item.quantityAvailable <= lowStockThreshold ? "text-red-600" : "text-green-600"
                            }`}>
                            {item.quantityAvailable}
                          </span>
                          <span className="text-gray-500">{item.unit}</span>
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        {item.quantityAvailable > lowStockThreshold ? (
                          <Badge className="bg-green-500">In Stock</Badge>
                        ) : item.quantityAvailable > 0 ? (
                          <Badge variant="outline" className="text-amber-600 border-amber-600">Low Stock</Badge>
                        ) : (
                          <Badge variant="destructive">Out of Stock</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => handleUpdateStock(item)}
                        >
                          <Package className="h-4 w-4 mr-2" />
                          Update Stock
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={updateQuantityDialog} onOpenChange={setUpdateQuantityDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Stock Quantity</DialogTitle>
            <DialogDescription>
              Update the available quantity for {selectedItem?.name}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <img 
                src={selectedItem?.image}
                alt={selectedItem?.name}
                className="col-span-1 h-20 w-20 rounded-md object-cover"
              />
              <div className="col-span-3">
                <h4 className="font-medium">{selectedItem?.name}</h4>
                <p className="text-sm text-gray-500">Current quantity: {selectedItem?.quantityAvailable} {selectedItem?.unit}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="quantity" className="text-right col-span-1">
                New Quantity
              </label>
              <Input
                id="quantity"
                type="number"
                min="0"
                value={newQuantity}
                onChange={(e) => setNewQuantity(Number(e.target.value))}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setUpdateQuantityDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmUpdateStock}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InventoryManagement;
