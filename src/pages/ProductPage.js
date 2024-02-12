import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Uc8AI from '../components/uc8AI';
import Uc8CustomerCare from '../components/uc8CustomerCare';
import About from '../components/about';
import GetConnected from '../components/getConnected';
import Last from '../components/last';

function ProductPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <Uc8AI />
        <About />
        <Uc8CustomerCare />
        <GetConnected />
        <Last />
        <Footer />
      </div>
    );
  }

 export default ProductPage; 
  
  