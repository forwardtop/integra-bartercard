import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import ProductHero from '../components/productHero';
import ProductContent from '../components/productContent';
function ProductPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <ProductHero />
        <ProductContent />
        <Footer />
      </div>
    );
  }

 export default ProductPage; 
  
  