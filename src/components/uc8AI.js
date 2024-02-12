import React from "react";

const Uc8AI = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl m-auto pt-5">
      
      <div className="bg-cover bg-center relative">
        <div>
          <img src="/images/header.png" alt="" className="h-24 lg:h-full"></img>
        </div>
        <div className="flex justify-end">
          <img
            src="/images/uc8.png"
            alt=""
            className="w-36 mr-16 lg:-mt-12"
          ></img>
        </div>
        <div>
          <h2 className="text-3xl lg:text-5xl mr-16 text-right mt-6 font-gothic text-gray-900">
            Hosted <span className="text-[#b11116]">IPPBX</span> Business
            <br></br> Phone Systems
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          <div>
            <img src="/images/herowoman.png" alt="" className="lg:-mt-12"></img>
          </div>
          <div className="p-6 lg:p-12 space-y-2 font-gothic text-lg">
            <div className="flex justify-between">
              <img src="/images/check.svg" className="w-5" alt=""></img>
              <p className="ml-4">No Upfront Hardware Cost</p>
            </div>
            <div className="flex justify-between">
              <img src="/images/check.svg" className="w-5" alt=""></img>
              <p className="ml-4 ">Choose Your Voice Plan</p>
            </div>
            <div className="flex justify-between">
              <img src="/images/check.svg" className="w-5" alt=""></img>
              <p className="ml-4">Hosted Locally In Australia</p>
            </div>
            <div className="flex justify-between">
              <img src="/images/check.svg" className="w-5" alt=""></img>
              <p className="ml-4">Keep Your Current Numbers</p>
            </div>
            <div className="pt-16">
              <img src="/images/telephone1.svg" className="" alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundImage:'url(/images/footer.png)'}} className="w-full bg-cover bg-center flex justify-center items-center h-10">
          <h3 className="text-white font-bradhitc text-lg font-bold">“Future Technology Today”</h3>
      </div>
    </div>
  );
};

export default Uc8AI;
