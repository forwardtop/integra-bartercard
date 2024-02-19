import React from 'react';
import CheckOut from '../components/checkout';
import Stepper from '../components/stepper';
import Header from '../components/header';
function CheckoutPage() {
  const steps = ["Device", "Terms", "Lines", "Options", "CheckOut"];
    return (
      <div >
        <Header />
        <div className='max-w-[1400px] mx-auto'>
        <Stepper steps={steps} />
        <CheckOut />
        </div>
        
      </div>
    );
  }

 export default CheckoutPage; 
  