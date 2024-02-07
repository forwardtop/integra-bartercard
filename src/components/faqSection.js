import React from 'react';
import Faq from './faq';

const FaqSection = () => {
  return (
    <div>
      <div
        className=" bg-cover bg-no-repeat h-[700px]"
        style={{ backgroundImage: 'url("/images/calling-phone-1.jpg")' }}
      >
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <div className="text-gray-500 max-w-lg">
            <Faq />
          </div>
        </div>
        <div className="py-8">
        </div>
      </div>

      
    </div>
  );
};

export default FaqSection;
