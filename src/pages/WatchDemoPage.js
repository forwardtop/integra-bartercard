import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import WatchDemo from '../components/watchDemo';
function WatchDemoPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <WatchDemo />
        <Footer />
      </div>
    );
  }

 export default WatchDemoPage; 
  
  