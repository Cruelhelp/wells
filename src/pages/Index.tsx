import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionalCards from '@/components/PromotionalCards';
import HomeMortgageSection from '@/components/HomeMortgageSection';
import VirtualAssistant from '@/components/VirtualAssistant';
import FinancialGuidance from '@/components/FinancialGuidance';
import CommunitiesSection from '@/components/CommunitiesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="font-wells min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PromotionalCards />
        <HomeMortgageSection />
        <FinancialGuidance />
        <VirtualAssistant />
        <CommunitiesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
