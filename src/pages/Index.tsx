
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ImpactSection from '@/components/home/ImpactSection';
import MarketplaceSection from '@/components/home/MarketplaceSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import HarvestingSection from '@/components/home/HarvestingSection';
import EquipmentRentalSection from '@/components/home/EquipmentRentalSection';
import UrbanFarmingSection from '@/components/home/UrbanFarmingSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <HarvestingSection />
      <EquipmentRentalSection />
      <UrbanFarmingSection />
      <ImpactSection />
      <MarketplaceSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
