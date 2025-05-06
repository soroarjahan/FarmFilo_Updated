
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Image as ImageIcon, Upload, Eye } from 'lucide-react';
import { format } from 'date-fns';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ImageAnalysisResult } from '@/types/product';
import { formatDistanceToNow } from '@/utils/dateUtils';

const mockAnalysisResults: ImageAnalysisResult[] = [
  {
    id: '1',
    fieldName: 'Rice Field',
    date: '2025-05-01',
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    healthyPercentage: 85,
    stressPercentage: 12,
    diseasePercentage: 3,
    notes: 'Some minor stress detected in the north corner of the field.'
  },
  {
    id: '2',
    fieldName: 'Wheat Field',
    date: '2025-04-25',
    imageUrl: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d',
    healthyPercentage: 92,
    stressPercentage: 8,
    diseasePercentage: 0,
    notes: 'Excellent crop health overall.'
  },
  {
    id: '3',
    fieldName: 'Vegetable Field',
    date: '2025-04-18',
    imageUrl: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f',
    healthyPercentage: 78,
    stressPercentage: 15,
    diseasePercentage: 7,
    notes: 'Possible disease detected in the southeast section.'
  }
];

const ImageAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<ImageAnalysisResult[]>(mockAnalysisResults);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    if (!selectedFile) return;
    
    setUploading(true);
    
    // Simulate upload and analysis process
    setTimeout(() => {
      setUploading(false);
      setSelectedFile(null);
      
      // In a real application, you would send the image to a server for analysis
      // and then update the results based on the response
      
      // For now, we'll just add a mock result
      const newResult: ImageAnalysisResult = {
        id: `${Date.now()}`,
        fieldName: 'New Field Analysis',
        date: new Date().toISOString().split('T')[0],
        imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a',
        healthyPercentage: Math.floor(Math.random() * 30) + 70,
        stressPercentage: Math.floor(Math.random() * 20),
        diseasePercentage: Math.floor(Math.random() * 10),
        notes: 'Analysis completed successfully.'
      };
      
      setAnalysisResults([newResult, ...analysisResults]);
    }, 2000);
  };
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">Upload New Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <div className="mb-4 p-3 rounded-full bg-farmfilo-lightGreen">
                <Upload className="h-6 w-6 text-farmfilo-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload a field image for analysis</h3>
              <p className="text-sm text-gray-500 mb-4">
                Supports JPG, PNG (up to 10MB)
              </p>
              <input
                type="file"
                id="image-upload"
                className="hidden"
                accept="image/jpeg,image/png"
                onChange={handleFileChange}
              />
              <label htmlFor="image-upload">
                <Button
                  variant="outline"
                  className="border-farmfilo-primary text-farmfilo-primary hover:bg-farmfilo-primary hover:text-white"
                  asChild
                >
                  <span>Select Image</span>
                </Button>
              </label>
              {selectedFile && (
                <div className="mt-4 text-sm">
                  <p className="font-medium">{selectedFile.name}</p>
                  <p className="text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  <Button 
                    className="mt-3 bg-farmfilo-primary hover:bg-farmfilo-darkGreen"
                    onClick={handleUpload}
                    disabled={uploading}
                  >
                    {uploading ? 'Analyzing...' : 'Upload & Analyze'}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">Recent Image Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {analysisResults.map((result) => (
                <div key={result.id} className="bg-white rounded-lg border overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 relative">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img 
                          src={result.imageUrl} 
                          alt={result.fieldName} 
                          className="object-cover h-full w-full"
                        />
                      </AspectRatio>
                    </div>
                    <div className="p-4 md:w-2/3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg">{result.fieldName} Analysis</h3>
                          <p className="text-sm text-gray-500">{formatDate(result.date)}</p>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-farmfilo-primary"
                        >
                          <Eye className="h-4 w-4 mr-1" /> View Full Analysis
                        </Button>
                      </div>
                      
                      <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium">Health Status</span>
                          <div className="flex space-x-2">
                            <Badge className="bg-green-500">Healthy: {result.healthyPercentage}%</Badge>
                            <Badge className="bg-yellow-500">Stress: {result.stressPercentage}%</Badge>
                            <Badge className="bg-red-500">Disease: {result.diseasePercentage}%</Badge>
                          </div>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="flex h-2.5 rounded-full overflow-hidden">
                            <div 
                              className="bg-green-500" 
                              style={{width: `${result.healthyPercentage}%`}}
                            ></div>
                            <div 
                              className="bg-yellow-500" 
                              style={{width: `${result.stressPercentage}%`}}
                            ></div>
                            <div 
                              className="bg-red-500" 
                              style={{width: `${result.diseasePercentage}%`}}
                            ></div>
                          </div>
                        </div>
                        
                        {result.notes && (
                          <p className="text-sm text-gray-600 mt-2">{result.notes}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImageAnalysis;
