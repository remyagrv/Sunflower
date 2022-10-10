import React from 'react'
import AboutusSection from './AboutusSection';
import Footer from '../Footer';
import HappeningsSection from './HappeningsSection';
import IndustrySolutionsSection from './IndustrySolutionsSection.js';
import LandingSection from './LandingSection';


function Home() {
  return (
    <div id="mainPage">
      <LandingSection />
      <AboutusSection />
      <IndustrySolutionsSection />
      <HappeningsSection />
      <Footer />
    </div>
  );
}

export default Home