import React from 'react';
import CheckOut from '../components/checkout';
import Stepper from '../components/stepper';
import Header from '../components/header';
function CheckoutPage() {
  const steps = ["Device", "Terms", "Lines", "Options", "CheckOut"];
    return (
      <div  style={{ paddingTop: '18vh', paddingLeft: '10%', paddingRight: '10%'}}>
        <Header />
        <Stepper steps={steps} />
        <CheckOut />
      </div>
    );
  }

 export default CheckoutPage; 
  