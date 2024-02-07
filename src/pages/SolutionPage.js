import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Solution from '../components/solution';
function SolutionPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <Solution />
        <Footer />
      </div>
    );
  }

 export default SolutionPage; 
  
  