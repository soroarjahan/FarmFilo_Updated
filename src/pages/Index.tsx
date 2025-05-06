
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServiceCards from '@/components/home/ServiceCards';
import StatsSection from '@/components/home/StatsSection';
import FeaturedPrograms from '@/components/home/FeaturedPrograms';
import MarketplaceSection from '@/components/home/MarketplaceSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCards />
      <StatsSection />
      <FeaturedPrograms />
      <MarketplaceSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
