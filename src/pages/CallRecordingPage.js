import React from 'react';
import Header from '../components/header';
import BreadCrumbsBar from '../components/breadCrumbsBar';
import Footer from '../components/footer';
import CallRecording from '../components/callRecording';
function CallRecordingPage() {
    return (
      <div>
        <Header />
        <BreadCrumbsBar />
        <CallRecording />
        <Footer />
      </div>
    );
  }

 export default CallRecordingPage; 
  
  