import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedWork from '../components/home/FeaturedWork';
import Services from '../components/home/Services';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedWork />
      <Services />
    </div>
  );
};

export default HomePage;