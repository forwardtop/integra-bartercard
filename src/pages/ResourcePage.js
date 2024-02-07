import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Resources from '../components/resources';
function ResourcePage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <Resources />
        <Footer />
      </div>
    );
  }

 export default ResourcePage; 
  
  