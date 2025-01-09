import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWork from '../components/home/FeaturedWork';
import Services from '../components/home/Services';
import Technologies from '../components/home/Technologies';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <Services />
      <Technologies />
    </div>
  );
};

export default HomePage;