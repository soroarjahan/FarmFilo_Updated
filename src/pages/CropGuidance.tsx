
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Calendar, Leaf, Sun, CloudSun } from 'lucide-react';

// Import specific icons and create custom icons for those not available
const Plant = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 8a5 5 0 0 0-9.7-1c-1.4 1.1-2.2 2.7-2.3 4.3-.1 2.3.9 4.7 2.5 6.5A3 3 0 0 0 8 21a3 3 0 0 0 4 0 3 3 0 0 0 2.5-3" />
    <path d="M10 17V5c0-1.7 1.3-3 3-3s3 1.3 3 3v12c0 1.7-1.3 3-3 3s-3-1.3-3-3z" />
    <path d="M13 14h1" />
    <path d="M13 10h1" />
    <path d="M13 6h1" />
    <path d="M13 2h1" />
  </svg>
);

const Rainfall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M8 19v1" />
    <path d="M8 14v1" />
    <path d="M16 19v1" />
    <path d="M16 14v1" />
    <path d="M12 21v1" />
    <path d="M12 16v1" />
  </svg>
);

const CropGuidance = () => {
  return (
    <Layout>
      <div className="relative">
        {/* Hero section with full-width agricultural image */}
        <div className="relative h-72 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80" 
            alt="Farming field"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-2">Crop Guidance System</h1>
              <p className="text-white/90 font-montserrat">Step-by-step crop calendar and AI recommendations</p>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-4 -mt-10 pb-16">
          <Tabs defaultValue="calendar" className="w-full">
            <Card className="mb-6 bg-white/95 backdrop-blur shadow-lg">
              <CardContent className="p-0">
                <TabsList className="w-full grid grid-cols-1 md:grid-cols-3 p-0 h-auto">
                  <TabsTrigger 
                    value="calendar" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Crop Calendar
                  </TabsTrigger>
                  <TabsTrigger 
                    value="recommendations" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Leaf className="h-4 w-4 mr-2" />
                    AI Recommendations
                  </TabsTrigger>
                  <TabsTrigger 
                    value="library" 
                    className="data-[state=active]:bg-farmfilo-primary data-[state=active]:text-white rounded-none py-4 font-montserrat"
                  >
                    <Plant className="h-4 w-4 mr-2" />
                    Crop Library
                  </TabsTrigger>
                </TabsList>
              </CardContent>
            </Card>

            {/* Crop Calendar Tab */}
            <TabsContent value="calendar" className="mt-2">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <Card className="xl:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Seasonal Crop Calendar</CardTitle>
                    <CardDescription>Region-specific planting and harvesting guide</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
                          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                            <option value="central">Central Bangladesh</option>
                            <option value="north">Northern Bangladesh</option>
                            <option value="south">Southern Bangladesh</option>
                            <option value="east">Eastern Bangladesh</option>
                            <option value="west">Western Bangladesh</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Crop Type</label>
                          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                            <option value="rice">Rice</option>
                            <option value="wheat">Wheat</option>
                            <option value="corn">Corn</option>
                            <option value="potato">Potato</option>
                            <option value="vegetables">Vegetables</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <div className="min-w-[800px]">
                          <div className="grid grid-cols-12 gap-1">
                            {/* Month headers */}
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                              <div key={index} className="text-center p-2 bg-farmfilo-lightGreen font-medium text-farmfilo-darkGreen">
                                {month}
                              </div>
                            ))}
                            
                            {/* Rice Boro */}
                            <div className="col-span-2 text-right pr-2 py-2 font-medium">Rice (Boro)</div>
                            <div className="col-span-3 bg-blue-100 p-2 text-center text-xs">Planting</div>
                            <div className="col-span-3 bg-green-100 p-2 text-center text-xs">Growing</div>
                            <div className="col-span-2 bg-amber-100 p-2 text-center text-xs">Harvesting</div>
                            <div className="col-span-2"></div>
                            
                            {/* Rice Aman */}
                            <div className="col-span-2 text-right pr-2 py-2 font-medium">Rice (Aman)</div>
                            <div className="col-span-2"></div>
                            <div className="col-span-2 bg-blue-100 p-2 text-center text-xs">Planting</div>
                            <div className="col-span-3 bg-green-100 p-2 text-center text-xs">Growing</div>
                            <div className="col-span-3 bg-amber-100 p-2 text-center text-xs">Harvesting</div>
                            
                            {/* Rice Aus */}
                            <div className="col-span-2 text-right pr-2 py-2 font-medium">Rice (Aus)</div>
                            <div className="col-span-1"></div>
                            <div className="col-span-2 bg-blue-100 p-2 text-center text-xs">Planting</div>
                            <div className="col-span-3 bg-green-100 p-2 text-center text-xs">Growing</div>
                            <div className="col-span-2 bg-amber-100 p-2 text-center text-xs">Harvesting</div>
                            <div className="col-span-2"></div>
                            
                            {/* Wheat */}
                            <div className="col-span-2 text-right pr-2 py-2 font-medium">Wheat</div>
                            <div className="col-span-2 bg-amber-100 p-2 text-center text-xs">Harvesting</div>
                            <div className="col-span-6"></div>
                            <div className="col-span-2 bg-blue-100 p-2 text-center text-xs">Planting</div>
                            <div className="col-span-2 bg-green-100 p-2 text-center text-xs">Growing</div>
                            
                            {/* Vegetables */}
                            <div className="col-span-2 text-right pr-2 py-2 font-medium">Vegetables</div>
                            <div className="col-span-2 bg-green-100 p-2 text-center text-xs">Growing</div>
                            <div className="col-span-2 bg-amber-100 p-2 text-center text-xs">Harvesting</div>
                            <div className="col-span-2"></div>
                            <div className="col-span-2 bg-blue-100 p-2 text-center text-xs">Planting</div>
                            <div className="col-span-4 bg-green-100 p-2 text-center text-xs">Growing</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Rice Cultivation Guide</h3>
                      
                      <div className="space-y-6">
                        <div className="relative">
                          <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-200"></div>
                          <div className="space-y-6">
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 1</div>
                              <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Land Preparation</h4>
                                <p className="text-sm text-gray-600 mt-1">Prepare the land by plowing, puddling, and leveling. Ensure proper drainage system.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 2</div>
                              <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Seed Selection & Sowing</h4>
                                <p className="text-sm text-gray-600 mt-1">Select high-quality seeds. For transplantation, prepare seedlings in nursery beds for 20-30 days.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 3</div>
                              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Transplantation</h4>
                                <p className="text-sm text-gray-600 mt-1">Transplant seedlings in rows with proper spacing. Maintain 2-3cm of standing water.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 4</div>
                              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Water Management</h4>
                                <p className="text-sm text-gray-600 mt-1">Maintain proper water levels according to growth stage. Drain field 10-15 days before harvest.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 5</div>
                              <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Fertilizer Application</h4>
                                <p className="text-sm text-gray-600 mt-1">Apply organic fertilizers at land preparation. Use chemical fertilizers as required at different growth stages.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                            <div className="flex">
                              <div className="flex-shrink-0 w-16 text-right pr-4 text-sm font-medium">Stage 6</div>
                              <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center z-10 mt-0.5">
                                <div className="h-2 w-2 rounded-full bg-white"></div>
                              </div>
                              <div className="ml-4 bg-white shadow-sm border rounded-lg p-4 flex-1">
                                <h4 className="font-medium">Harvesting</h4>
                                <p className="text-sm text-gray-600 mt-1">Harvest when 80-85% of the grains are straw-colored. Ensure proper drying before storage.</p>
                                <Button variant="outline" size="sm" className="mt-2 text-xs">View Details</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-montserrat text-farmfilo-darkGreen">Weather Factors</CardTitle>
                    <CardDescription>Weather patterns affecting crop schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-5">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Sun className="h-5 w-5 text-amber-500 mr-2" />
                          <h4 className="font-medium">Temperature Patterns</h4>
                        </div>
                        <p className="text-sm text-gray-600">Average temperatures in Central Bangladesh range from 20°C to 34°C throughout the year, making it suitable for multiple rice cropping cycles.</p>
                        <div className="mt-3 h-32 bg-gray-100 rounded flex items-center justify-center">
                          <p className="text-xs text-gray-500">Temperature chart</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Rainfall className="h-5 w-5 text-blue-500 mr-2" />
                          <h4 className="font-medium">Rainfall Distribution</h4>
                        </div>
                        <p className="text-sm text-gray-600">Annual rainfall of 1,500-2,000mm, with monsoon season from June to September. Irrigation is essential for winter crops.</p>
                        <div className="mt-3 h-32 bg-gray-100 rounded flex items-center justify-center">
                          <p className="text-xs text-gray-500">Rainfall chart</p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CloudSun className="h-5 w-5 text-green-500 mr-2" />
                          <h4 className="font-medium">Seasonal Adjustments</h4>
                        </div>
                        <p className="text-sm text-gray-600">Climate change has shifted traditional planting windows by approximately 7-10 days. Adjust your schedule accordingly.</p>
                        <div className="mt-3">
                          <Button variant="outline" size="sm" className="w-full">View Climate Advisory</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Current Season Outlook</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Slightly delayed monsoon onset expected this year</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Higher than normal temperatures forecast for May-June</span>
                          </li>
                          <li className="flex items-start">
                            <div className="h-5 w-5 rounded-full bg-farmfilo-lightGreen flex items-center justify-center mr-2 mt-0.5">
                              <Leaf className="h-3 w-3 text-farmfilo-primary" />
                            </div>
                            <span>Consider drought-resistant varieties for this season</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* AI Recommendations Tab */}
            <TabsContent value="recommendations">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">AI-Powered Recommendations</CardTitle>
                  <CardDescription>Personalized guidance based on your farm data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2">
                      <h3 className="font-medium mb-4">Your Personalized Guidance</h3>
                      
                      <div className="space-y-5">
                        <div className="border rounded-lg p-4 bg-farmfilo-lightGreen/20">
                          <h4 className="font-medium flex items-center">
                            <Plant className="h-5 w-5 mr-2 text-farmfilo-primary" />
                            Crop Selection Recommendation
                          </h4>
                          <p className="text-sm mt-2">Based on your soil analysis from North Field, we recommend planting BR29 rice variety this season. This variety is well-suited for your soil pH (6.2) and has shown 15% higher yield in similar conditions.</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 bg-farmfilo-primary/20 text-farmfilo-darkGreen rounded-full">Recommended: BR29 Rice</span>
                            <span className="text-xs px-2 py-1 bg-farmfilo-primary/20 text-farmfilo-darkGreen rounded-full">Confidence: 92%</span>
                            <span className="text-xs px-2 py-1 bg-farmfilo-primary/20 text-farmfilo-darkGreen rounded-full">Expected Yield: 4.5 tons/acre</span>
                          </div>
                          <Button className="mt-3 w-full bg-farmfilo-primary text-white">Apply This Recommendation</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                            Planting Schedule Optimization
                          </h4>
                          <p className="text-sm mt-2">Our weather prediction models suggest delaying Aman rice planting by 7 days this season due to expected late monsoon arrival. This adjustment can increase your yield by 8-10%.</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Original Date: May 15, 2025</span>
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Recommended: May 22, 2025</span>
                          </div>
                          <Button variant="outline" className="mt-3 w-full">View Detailed Analysis</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center">
                            <Rainfall className="h-5 w-5 mr-2 text-blue-500" />
                            Water Management Plan
                          </h4>
                          <p className="text-sm mt-2">Your current irrigation practices for rice fields consume 15% more water than optimal levels. We've generated a custom irrigation schedule that can save water while maintaining yield.</p>
                          <div className="mt-3 bg-gray-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">Suggested Irrigation Schedule:</p>
                            <ul className="text-xs space-y-1 text-gray-700">
                              <li>• First 2 weeks: Maintain 3-5cm standing water</li>
                              <li>• Weeks 3-6: Allow to dry for 2-3 days between irrigations</li>
                              <li>• Weeks 7-12: Alternate wetting and drying technique</li>
                              <li>• Last 2 weeks: Drain field completely</li>
                            </ul>
                          </div>
                          <Button variant="outline" className="mt-3 w-full">Download Schedule</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="font-medium flex items-center">
                            <Plant className="h-5 w-5 mr-2 text-green-500" />
                            Pest Management Advisory
                          </h4>
                          <p className="text-sm mt-2">Based on current weather patterns and crop stage, there's a 75% probability of stem borer infestation in the next 14 days. We recommend preemptive biological control measures.</p>
                          <div className="mt-3 bg-gray-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">Recommended Action:</p>
                            <ul className="text-xs space-y-1 text-gray-700">
                              <li>• Release Trichogramma wasps at 100,000 per hectare</li>
                              <li>• Apply neem-based organic pesticide at 5ml/liter</li>
                              <li>• Install yellow sticky traps at 20 per hectare</li>
                              <li>• Monitor fields daily for early signs of infestation</li>
                            </ul>
                          </div>
                          <Button variant="outline" className="mt-3 w-full">View Control Methods</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-4">Current Farm Analysis</h3>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-4">
                          <h4 className="text-sm font-medium mb-3">Soil Health Score</h4>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-bold">78/100</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Good</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                          <ul className="mt-3 text-xs space-y-1 text-gray-700">
                            <li>• pH: 6.2 (Optimal: 5.5-7.0)</li>
                            <li>• Organic Matter: 2.8% (Optimal: {'>'}3%)</li>
                            <li>• Nitrogen: Medium</li>
                            <li>• Potassium: High</li>
                            <li>• Phosphorus: Low</li>
                          </ul>
                          <Button variant="outline" size="sm" className="w-full mt-3 text-xs">View Full Report</Button>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="text-sm font-medium mb-3">Previous Season Performance</h4>
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Rice Yield</span>
                                <span className="text-green-600">+8% vs avg</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-farmfilo-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Water Efficiency</span>
                                <span className="text-amber-600">-5% vs avg</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-xs mb-1">
                                <span>Fertilizer Efficiency</span>
                                <span className="text-green-600">+12% vs avg</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h4 className="text-sm font-medium mb-3">Market Intelligence</h4>
                          <p className="text-xs text-gray-700 mb-3">Based on market trends, these crops are expected to have the highest profitability this season:</p>
                          <ol className="text-xs space-y-2">
                            <li className="flex justify-between items-center">
                              <span>1. Aromatic Rice</span>
                              <span className="font-medium text-green-600">+28%</span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>2. Chili Peppers</span>
                              <span className="font-medium text-green-600">+22%</span>
                            </li>
                            <li className="flex justify-between items-center">
                              <span>3. Organic Vegetables</span>
                              <span className="font-medium text-green-600">+15%</span>
                            </li>
                          </ol>
                          <Button variant="outline" size="sm" className="w-full mt-3 text-xs">View Market Report</Button>
                        </div>
                        
                        <Button className="w-full bg-farmfilo-primary text-white">Generate New Analysis</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Crop Library Tab */}
            <TabsContent value="library">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-montserrat text-farmfilo-darkGreen">Crop Library</CardTitle>
                  <CardDescription>Comprehensive information about various crops</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row gap-4 mb-5">
                      <div className="flex-grow">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Search Crops</label>
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Search by name or type..." 
                            className="w-full border border-gray-300 rounded-md p-2 pl-9 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary"
                          />
                          <div className="absolute left-3 top-2.5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
                        <select className="w-full border border-gray-300 rounded-m  p-2 focus:outline-none focus:ring-2 focus:ring-farmfilo-primary">
                          <option value="all">All Categories</option>
                          <option value="cereals">Cereals</option>
                          <option value="pulses">Pulses</option>
                          <option value="vegetables">Vegetables</option>
                          <option value="fruits">Fruits</option>
                          <option value="oilseeds">Oilseeds</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Rice"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Rice (Oryza sativa)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Cereal</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Rice is the staple food crop of Bangladesh, cultivated in three distinct seasons: Boro, Aman, and Aus.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>110-150 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>High</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>20-35°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Wheat"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Wheat (Triticum spp.)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Cereal</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Wheat is an important winter crop, typically grown after the monsoon rice harvest in November-December.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>100-120 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>Medium</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>15-25°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Vegetables"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Eggplant (Solanum melongena)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Vegetable</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Eggplant is a popular vegetable crop in Bangladesh, grown year-round but primarily during winter.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>90-120 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>Medium</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>22-30°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Jute"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Jute (Corchorus spp.)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Fiber</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Jute is a major cash crop in Bangladesh, known as the 'golden fiber' and typically grown during the monsoon season.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>100-150 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>High</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>24-35°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Potato"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Potato (Solanum tuberosum)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Vegetable</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Potato is an important winter vegetable crop with high consumer demand throughout Bangladesh.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>80-120 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>Medium</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>15-25°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="h-40 bg-gray-200">
                          <img 
                            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=300&h=160&q=80"
                            alt="Mustard"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Mustard (Brassica spp.)</h4>
                            <span className="px-2 py-1 bg-farmfilo-lightGreen text-farmfilo-darkGreen text-xs rounded-full">Oilseed</span>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">Mustard is the primary oilseed crop in Bangladesh, cultivated during the winter season after monsoon rice.</p>
                          <div className="space-y-1.5">
                            <div className="flex justify-between text-xs">
                              <span>Growing Period:</span>
                              <span>85-110 days</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Water Requirement:</span>
                              <span>Low to Medium</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span>Optimal Temperature:</span>
                              <span>10-25°C</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="w-full mt-3">View Crop Guide</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button variant="outline">Load More Crops</Button>
                    </div>
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

export default CropGuidance;
