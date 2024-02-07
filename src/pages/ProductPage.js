import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Uc8AI from '../components/uc8AI';
import Uc8CustomerCare from '../components/uc8CustomerCare';

function ProductPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <Uc8AI />
        <Uc8CustomerCare />
        <Footer />
      </div>
    );
  }

 export default ProductPage; 
  
  