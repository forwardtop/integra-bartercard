import React from 'react';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Header from '../components/header';
import PhoneSection from '../components/phoneSection';
import FaqSection from '../components/faqSection';
import Why from '../components/why';
import BreadCrumbsBar from '../components/breadCrumbsBar';
function HomePage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <Hero /> 
        <Why />
        <PhoneSection />
        <FaqSection />
        <Footer />
      </div>
    );
  }

 export default HomePage; 
  
  