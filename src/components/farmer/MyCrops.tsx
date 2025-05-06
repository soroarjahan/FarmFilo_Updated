
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Plus, Leaf, Calendar, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertDialog } from '@/components/ui/alert-dialog';

interface CropData {
  id: string;
  name: string;
  fieldName: string;
  plantingDate: string;
  expectedHarvestDate: string;
  status: 'Growing' | 'Ready to Harvest' | 'Harvested';
  progress: number;
  variety: string;
}

const mockCrops: CropData[] = [
  {
    id: '1',
    name: 'Rice',
    fieldName: 'North Field',
    plantingDate: '2025-03-15',
    expectedHarvestDate: '2025-07-10',
    status: 'Growing',
    progress: 65,
    variety: 'Basmati'
  },
  {
    id: '2',
    name: 'Wheat',
    fieldName: 'East Field',
    plantingDate: '2025-02-20',
    expectedHarvestDate: '2025-06-25',
    status: 'Growing',
    progress: 75,
    variety: 'Winter Wheat'
  },
  {
    id: '3',
    name: 'Vegetables',
    fieldName: 'South Field',
    plantingDate: '2025-04-05',
    expectedHarvestDate: '2025-05-30',
    status: 'Ready to Harvest',
    progress: 95,
    variety: 'Mixed Greens'
  },
  {
    id: '4',
    name: 'Corn',
    fieldName: 'West Field',
    plantingDate: '2025-01-10',
    expectedHarvestDate: '2025-04-01',
    status: 'Harvested',
    progress: 100,
    variety: 'Sweet Corn'
  }
];

const MyCrops = () => {
  const [crops, setCrops] = useState<CropData[]>(mockCrops);
  
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM d, yyyy');
    } catch (error) {
      return 'Invalid date';
    }
  };
  
  const daysRemaining = (dateString: string) => {
    try {
      const harvestDate = new Date(dateString);
      const today = new Date();
      const diffTime = harvestDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    } catch (error) {
      return 0;
    }
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Growing':
        return 'bg-blue-500';
      case 'Ready to Harvest':
        return 'bg-green-500';
      case 'Harvested':
        return 'bg-gray-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-farmfilo-darkGreen">Active Crops</h2>
        <Button className="bg-farmfilo-primary hover:bg-farmfilo-darkGreen">
          <Plus className="mr-2 h-4 w-4" />
          Add New Crop
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Growing Crops</CardTitle>
            <Leaf className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'Growing').length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ready to Harvest</CardTitle>
            <Leaf className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'Ready to Harvest').length}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Harvested this Season</CardTitle>
            <Leaf className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {crops.filter(c => c.status === 'Harvested').length}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-farmfilo-darkGreen">Crop Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Crop</TableHead>
                <TableHead>Field</TableHead>
                <TableHead>Planting Date</TableHead>
                <TableHead>Expected Harvest</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progress</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {crops.map((crop) => (
                <TableRow key={crop.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{crop.name}</p>
                      <p className="text-xs text-gray-500">{crop.variety}</p>
                    </div>
                  </TableCell>
                  <TableCell>{crop.fieldName}</TableCell>
                  <TableCell>{formatDate(crop.plantingDate)}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{formatDate(crop.expectedHarvestDate)}</span>
                      {crop.status !== 'Harvested' && (
                        <span className="text-xs text-gray-500">
                          {daysRemaining(crop.expectedHarvestDate)} days remaining
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(crop.status)}>
                      {crop.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={crop.progress} className="h-2" />
                      <span className="text-xs font-medium">{crop.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <span className="sr-only">Open menu</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                          >
                            <path
                              d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem className="flex items-center">
                          <Edit2 className="mr-2 h-4 w-4" /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600 flex items-center">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyCrops;
