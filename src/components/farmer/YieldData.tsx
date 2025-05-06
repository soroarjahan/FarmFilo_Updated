
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ChartLine,
  Calendar,
  ArrowUpRight,
  Wheat,
  LeafyGreen,
} from 'lucide-react';
import { format } from 'date-fns';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  TooltipProps,
} from 'recharts';

const mockYieldData = [
  { month: 'Jan', actual: 0, expected: 0 },
  { month: 'Feb', actual: 0, expected: 0 },
  { month: 'Mar', actual: 5, expected: 4 },
  { month: 'Apr', actual: 12, expected: 10 },
  { month: 'May', actual: 18, expected: 20 },
  { month: 'Jun', actual: 25, expected: 28 },
  { month: 'Jul', actual: 32, expected: 30 },
  { month: 'Aug', actual: 28, expected: 25 },
  { month: 'Sep', actual: 20, expected: 18 },
  { month: 'Oct', actual: 15, expected: 12 },
  { month: 'Nov', actual: 8, expected: 5 },
  { month: 'Dec', actual: 0, expected: 0 },
];

const mockCropData = [
  { name: 'Rice', yield: 450, area: 2.5, efficiency: 180 },
  { name: 'Wheat', yield: 380, area: 3, efficiency: 127 },
  { name: 'Vegetables', yield: 520, area: 1.5, efficiency: 347 },
  { name: 'Fruits', yield: 280, area: 1, efficiency: 280 },
];

const chartConfig = {
  actual: {
    label: 'Actual Yield',
    theme: {
      light: '#4ade80',
      dark: '#22c55e',
    },
  },
  expected: {
    label: 'Expected Yield',
    theme: {
      light: '#94a3b8',
      dark: '#64748b',
    },
  },
};

const YieldData = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Yield</CardTitle>
            <Wheat className="h-4 w-4 text-farmfilo-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,630 kg</div>
            <p className="text-xs text-green-500 flex items-center">
              +8% from last year <ArrowUpRight className="ml-1 h-3 w-3" />
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cultivated Area</CardTitle>
            <LeafyGreen className="h-4 w-4 text-farmfilo-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8 acres</div>
            <p className="text-xs text-green-500 flex items-center">
              +2 acres from last year <ArrowUpRight className="ml-1 h-3 w-3" />
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Yield Efficiency</CardTitle>
            <ChartLine className="h-4 w-4 text-farmfilo-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">204 kg/acre</div>
            <p className="text-xs text-green-500 flex items-center">
              +5% from last year <ArrowUpRight className="ml-1 h-3 w-3" />
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">Monthly Yield Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ChartContainer config={chartConfig}>
                <LineChart data={mockYieldData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip 
                    content={(props) => {
                      return props.active && props.payload && props.payload.length ? (
                        <ChartTooltipContent {...props} indicator="dot" />
                      ) : null;
                    }}
                  />
                  <Legend 
                    content={(props) => {
                      return <ChartLegendContent {...props} />;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="actual"
                    stroke="var(--color-actual)"
                    strokeWidth={3}
                    dot={{ r: 3 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="expected"
                    name="expected"
                    stroke="var(--color-expected)"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-farmfilo-darkGreen">Crop Yield Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mockCropData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="yield" name="Yield (kg)" fill="#4ade80" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default YieldData;
