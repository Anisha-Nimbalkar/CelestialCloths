import React from 'react';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      {/* You can add more sections here if you like */}
      <Footer />
    </div>
  );
}

export default Home;