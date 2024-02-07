import React from 'react';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Footer from '../components/footer';
import CRMContent from '../components/CRMcontent';
function CRMContentPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <CRMContent />
        <Footer />
      </div>
    );
  }

 export default CRMContentPage; 
  
  