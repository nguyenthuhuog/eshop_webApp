import React from 'react';
import Banner from './Banner';
import SaleNews from './SaleNews';
import ProductGrid from './ProductGrid';
import News from './News';
import '../css/homepage.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className="main">
        <Banner />
        <SaleNews />
        <ProductGrid />
        <News />
      </div>
    </div>
  );
};

export default HomePage;
