
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, ChartPie, CloudSun, Gauge, Leaf, Sun, TrendingUp, TrendingDown } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-farmfilo-darkGreen font-montserrat mb-2">Smart Farming Dashboard</h1>
            <p className="text-gray-600 font-montserrat">Monitor your farm performance and environmental conditions</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="overview" className="font-montserrat">Overview</TabsTrigger>
              <TabsTrigger value="crops" className="font-montserrat">Crops</TabsTrigger>
              <TabsTrigger value="weather" className="font-montserrat">Weather</TabsTrigger>
              <TabsTrigger value="equipment" className="font-montserrat">Equipment</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <Leaf className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Active Crops
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">8</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +2 since last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Crop Health
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">87%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-farmfilo-primary h-2.5 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <Sun className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Soil Moisture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">68%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                      <div className="bg-farmfilo-primary h-2.5 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
                      <ChartPie className="h-4 w-4 mr-2 text-farmfilo-primary" />
                      Yield Forecast
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-farmfilo-darkGreen">92%</div>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +5% from previous harvest
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="col-span-1 lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Monthly Harvest Projection</CardTitle>
                    <CardDescription>Estimated crop yields for the next 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 flex items-center justify-center bg-gray-100 rounded-md">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 mx-auto text-farmfilo-primary mb-2" />
                        <p className="text-gray-500 font-montserrat">Harvest Projection Chart</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Weather Forecast</CardTitle>
                    <CardDescription>Next 7 days prediction</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CloudSun className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Today</p>
                          <p className="text-sm text-gray-500">Partly cloudy</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">32°C</p>
                        <p className="text-sm text-gray-500">24°C</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Sun className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Tomorrow</p>
                          <p className="text-sm text-gray-500">Sunny</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">34°C</p>
                        <p className="text-sm text-gray-500">25°C</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CloudSun className="h-8 w-8 text-farmfilo-primary mr-3" />
                        <div>
                          <p className="font-medium">Wednesday</p>
                          <p className="text-sm text-gray-500">Partly cloudy</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">33°C</p>
                        <p className="text-sm text-gray-500">25°C</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Task Schedule</CardTitle>
                    <CardDescription>Upcoming farming activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-primary mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Apply organic fertilizer to rice field</p>
                          <p className="text-sm text-gray-500">Tomorrow, 7:00 AM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-secondary mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Inspect tomato crops for pests</p>
                          <p className="text-sm text-gray-500">Wednesday, 9:30 AM</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-3 h-3 rounded-full bg-farmfilo-accent mt-1.5 mr-3"></div>
                        <div>
                          <p className="font-medium">Harvest lettuce crop</p>
                          <p className="text-sm text-gray-500">Friday, 6:00 AM</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Resource Utilization</CardTitle>
                    <CardDescription>Current farm resource usage</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Water Usage</span>
                        <span className="text-sm font-medium">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Fertilizer Stock</span>
                        <span className="text-sm font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-secondary h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Seed Inventory</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-accent h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Equipment Usage</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-farmfilo-brown h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="crops">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Crop Management</CardTitle>
                  <CardDescription>Monitor and manage your current crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Leaf className="h-16 w-16 mx-auto text-farmfilo-primary mb-4" />
                    <p className="text-gray-500 font-montserrat">Crop management details will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="weather">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Weather Monitoring</CardTitle>
                  <CardDescription>Detailed weather analysis and forecasts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <CloudSun className="h-16 w-16 mx-auto text-farmfilo-primary mb-4" />
                    <p className="text-gray-500 font-montserrat">Weather monitoring details will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="equipment">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Equipment Status</CardTitle>
                  <CardDescription>Track and manage your agricultural equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Gauge className="h-16 w-16 mx-auto text-farmfilo-primary mb-4" />
                    <p className="text-gray-500 font-montserrat">Equipment status details will appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
