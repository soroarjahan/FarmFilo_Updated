
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { LoadingSpinner } from '@/components/auth/LoadingSpinner';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';
import { useNavigate } from 'react-router-dom';
import { Package, Upload } from 'lucide-react';

// Categories for the product
const categories = [
  "Vegetables",
  "Fruits",
  "Grains",
  "Dairy & Eggs",
  "Other"
];

// Units for the product pricing
const units = [
  "kg",
  "piece",
  "dozen",
  "bundle",
  "liter",
  "bottle"
];

const FarmerProductUpload = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    unit: 'kg',
    description: '',
    ecoFriendly: false,
    image: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, ecoFriendly: checked }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, image: file }));
      
      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    if (!formData.name) {
      toast.error("Please enter a product name");
      return false;
    }
    if (!formData.category) {
      toast.error("Please select a category");
      return false;
    }
    if (!formData.price || isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      toast.error("Please enter a valid price");
      return false;
    }
    if (!formData.image) {
      toast.error("Please upload a product image");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsUploading(true);
    
    try {
      // In a real app, this would be an API call to upload the product
      // Here we're simulating the upload with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Assuming the product is successfully uploaded
      // For demonstration purposes, we're creating a product object
      const newProduct = {
        id: `prod-${Date.now()}`,
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        unit: formData.unit,
        description: formData.description,
        ecoFriendly: formData.ecoFriendly,
        farmer: user?.name || 'Unknown Farmer',
        farm: 'Local Farm', // Fixed value instead of trying to access user.farmName
        inStock: true,
        // In a real app, this would be the URL returned from the image upload service
        image: imagePreview || 'https://images.unsplash.com/photo-1518160140141-23ab08b6be02?auto=format&fit=crop&w=400&q=80',
      };
      
      // In a real app, we would store this in a database
      // For now, we'll store it in localStorage for demo purposes
      const existingProducts = JSON.parse(localStorage.getItem('farmfilo_products') || '[]');
      localStorage.setItem('farmfilo_products', JSON.stringify([...existingProducts, newProduct]));
      
      toast.success("Product uploaded successfully!");
      
      // Reset form after successful upload
      setFormData({
        name: '',
        category: '',
        price: '',
        unit: 'kg',
        description: '',
        ecoFriendly: false,
        image: null
      });
      setImagePreview(null);
      
    } catch (error) {
      console.error('Error uploading product:', error);
      toast.error("Failed to upload product. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen mb-2">Upload Your Products</h1>
            <p className="text-gray-600">
              Add your farm products to the Farmfilo Basket marketplace and connect directly with customers.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" /> Product Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Product Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter product name" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (৳)</Label>
                    <Input 
                      id="price" 
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="Enter price" 
                      type="number"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="unit">Unit</Label>
                    <Select value={formData.unit} onValueChange={(value) => handleSelectChange('unit', value)}>
                      <SelectTrigger id="unit">
                        <SelectValue placeholder="Select a unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {units.map(unit => (
                          <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Product Description</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your product" 
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image">Product Image</Label>
                  <div className="flex flex-col items-center space-y-4 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    {imagePreview ? (
                      <div className="w-full">
                        <img 
                          src={imagePreview} 
                          alt="Product preview" 
                          className="h-40 mx-auto object-contain mb-4"
                        />
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => {
                            setImagePreview(null);
                            setFormData(prev => ({ ...prev, image: null }));
                          }}
                        >
                          Remove Image
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-12 w-12 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-800">Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-500">PNG, JPG, JPEG (max. 5MB)</p>
                        </div>
                        <Input 
                          id="image" 
                          type="file" 
                          className="hidden" 
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={handleImageChange}
                        />
                        <Label 
                          htmlFor="image" 
                          className="bg-farmfilo-primary hover:bg-farmfilo-primary/90 text-white py-2 px-6 rounded-md cursor-pointer"
                        >
                          Select File
                        </Label>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="ecoFriendly" 
                    checked={formData.ecoFriendly}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="ecoFriendly">
                    This product is eco-friendly (grown without harmful chemicals or pesticides)
                  </Label>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex justify-end">
                  <Button 
                    type="submit" 
                    className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen text-white"
                    disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Upload Product'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-8 bg-farmfilo-lightGreen rounded-lg p-6">
            <h3 className="text-xl font-bold text-farmfilo-darkGreen mb-2">Tips for Effective Product Listings</h3>
            <ul className="space-y-2 list-disc list-inside text-gray-700">
              <li>Use high-quality images with good lighting</li>
              <li>Write clear, detailed descriptions</li>
              <li>Be accurate with pricing and availability</li>
              <li>Highlight eco-friendly and organic attributes</li>
              <li>Update your inventory regularly</li>
            </ul>
          </div>
        </div>
      </div>
      
      {isUploading && <LoadingSpinner />}
    </Layout>
  );
};

export default FarmerProductUpload;
