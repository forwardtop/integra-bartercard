import React from 'react';

const PhoneSection = () => {
  return (
    <div className="bg-[#87acc7] sm:py-16 font-poppins mt-32">
      <div className="mx-auto gap-x-8 max-w-7xl gap-y-20 px-6 lg:px-8 w-full flex flex-col md:flex-row">
        <div className="p-4 w-full md:w-3/5 flex flex-row align-middle items-center">
            <img src='/images/phones.png'  alt="Calling Section"  className="md:max-w-full h-auto"
            />
        </div>
        <div className="max-w-2xl flex flex-col items-center  w-full md:w-2/5  md:items-start">
            <h2 className="text-5xl  text-center tracking-tight text-white font-[500] md:text-left">UC8 Benefits</h2>
            <h3 className="text-lg  text-white font-bradhitc">“Future Technology Today”</h3>
            <div className="w-16 h-[2px] bg-[#a020ef] my-4"></div>
            <p className='text-white'>Your business calls are made over your broadband Internet connection, but at a fraction of the cost. VoIP is easy to set up and you can keep your current telephone numbers. UC8 is an open platform which means you are not locked into proprietary hardware. You can use any IP compatible hardware or software with UC8. </p>
            <p className='text-white'>With UC8 you can connect with compatible IP desktop, conference and cordless handsets,if you need video,we have you covered with UC8 softphone which is compatible with Windows & Mac devices, UC8 also works with IP video desktop phones and IP VC Systems. If you need mobility, stay connected with our UC8 softphone for mobiles and smart devices, IOS and Android compatible.</p>

        </div>

        
      </div>
    </div>
  );
};

export default PhoneSection;
