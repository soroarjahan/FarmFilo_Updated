
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/harvesting" element={<Harvesting />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/urban-farming" element={<UrbanFarming />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/farmer-portal" element={<FarmerPortal />} />
          <Route path="/field-supervisor" element={<FieldSupervisor />} />
          <Route path="/crop-guidance" element={<CropGuidance />} />
          <Route path="/support" element={<Support />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
