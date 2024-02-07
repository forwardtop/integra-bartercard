import React from 'react';

const CallSection = () => {
  return (
      <div className="bg-white sm:py-16">
        {/* Left side (5/12 width) */}    
        <div className="mx-auto grid gap-x-8 max-w-7xl gap-y-20 px-6 lg:px-8 md:grid-cols-2">
          <div className="max-w-2xl flex flex-col justify-center min-w-[300px] items-center md:items-start">
              <h2 className="text-2xl  tracking-tight text-gray-900  font-[500] sm:text-4xl">Our call, anytime, anywhere!</h2>
              <h3 className="text-lg mt-5 text-gray-500">UC8 Care  &  UC8 VIP Club</h3>
              <div className="w-16 h-[2px] bg-[#a020ef] my-4"></div>
              <p className="text-gray-600 leading-6 w-4/5">
              UC8 is committed to after sales service and support. Our customers have access to our Australian based customer service and support centre 24/7. We will look after you and keep your equipment up to date.
              </p>
              <p className="text-gray-600 leading-6 w-4/5">
              If you would like priority service, and other benefits, ask about our VIP Club, it is as little as $5/month.
              </p>
              <div className='mt-8 flex flex-col md:flex-row justify-start items-center'>
                  <img src='/images/badge_pc-1-100x100.png'  alt="Calling Section"  className="mr-3 w-[82px] h-[82px]" />
                  <img src="/images/BBB_logo-1.png" alt="logo" className='sm:w-[185px] h-[65px]' />
              </div>
              
          </div>

          {/* Right side (5/12 width) */}
          <div className="p-4">
              <img src='/images/calling.jpg'  alt="Calling Section"  className="max-w-full h-auto"
              />
          </div>
        </div>
      </div>
  );
};

export default CallSection;
