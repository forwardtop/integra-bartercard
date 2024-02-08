import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import OrderStepper from '../components/orderStepper';

function ProductPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <OrderStepper />
        <Footer />
      </div>
    );
  }

 export default ProductPage; 
  