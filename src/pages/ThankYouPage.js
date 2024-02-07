import React from 'react';
import Header from './../components/header';
const ThankYouPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
    <Header />
      <div className="text-center flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-[#a020ef] font-bold mb-6">Thank You for Contacting Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <button onClick={() => (window.location.href = "/")} style={{borderRadius:'1.75rem'}}
            className="flex items-center justify-center w-44 h-10 rounded-full border bg-[#a020ef] hover:bg-white hover:text-[#a020ef] hover:border-[#a020ef] text-white">
            Go to Homepage
        </button>
        {/* Add more creative elements here */}
      </div>
    </div>
  );
};

export default ThankYouPage;
