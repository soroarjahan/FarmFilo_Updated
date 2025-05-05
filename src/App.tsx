
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Marketplace from "./pages/Marketplace";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Harvesting from "./pages/Harvesting";
import Equipment from "./pages/Equipment";
import UrbanFarming from "./pages/UrbanFarming";
import Dashboard from "./pages/Dashboard";
import FarmerPortal from "./pages/FarmerPortal";
import FieldSupervisor from "./pages/FieldSupervisor";
import CropGuidance from "./pages/CropGuidance";
import Support from "./pages/Support";
import Community from "./pages/Community";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Orders from "./pages/Orders";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/harvesting" element={<Harvesting />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/urban-farming" element={<UrbanFarming />} />
              <Route path="/support" element={<Support />} />
              <Route path="/community" element={<Community />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Shopping cart routes */}
              <Route path="/cart" element={<Cart />} />
              <Route 
                path="/checkout" 
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/order-tracking/:orderId" 
                element={
                  <ProtectedRoute>
                    <OrderTracking />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/orders" 
                element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                } 
              />
              
              {/* Protected routes */}
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/farmer-portal" 
                element={
                  <ProtectedRoute allowedRoles={['farmer', 'admin']}>
                    <FarmerPortal />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/field-supervisor" 
                element={
                  <ProtectedRoute allowedRoles={['fieldSupervisor', 'admin']}>
                    <FieldSupervisor />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/crop-guidance" 
                element={
                  <ProtectedRoute>
                    <CropGuidance />
                  </ProtectedRoute>
                } 
              />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
