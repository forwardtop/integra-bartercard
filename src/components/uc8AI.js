import React from "react";

const Uc8AI = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-9/10 lg:w-2/3 m-auto pt-5">
      <div className="lg:w-1/2 bg-cover bg-center h-[90vh]" style={{backgroundImage:'url(/images/aibackground.png)'}}>

        <div className="pt-36 text-center text-white">

          <h1 className="text-4xl font-bold mb-8 font-bradhitc">"Future Technology Today!"</h1>

          <img
            src="/images/uc8.png"
            alt="aibackground"
            className="mx-auto pt-24"
          />

          <p className="text-lg">A Subsidiary of <br></br>Integra Corporation Pty Ltd</p>
        </div>

        <div className="pt-24 text-white">
        <div className="flex justify-center">
            <div className="p-5 lg:w-1/4 w-1/3">
                <img src="/images/map.png" alt=""></img>
                <p className="text-xs">Integra House Building 14, 2 Link Drive Yatala QLD 4212 Brisbane Australia </p>
            </div>
            <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-center">
                    <img src="/images/phone.png" alt=""></img>
                </div>
                
                <p className="text-xs">07 3339 9333<br></br>07 3339 9311</p>
            </div>
            <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-end pr-6">
                    <img src="/images/address.png" alt=""></img>
                </div>
                <p className="text-xs">info@integra.net.au<br></br>www.integra.net.au </p>
            </div>
        </div>
          
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full lg:w-1/2 bg-cover bg-center h-[90vh] relative" style={{backgroundImage:'url(/images/phoneSystem.png)'}}>
      </div>
    </div>
  );
};

export default Uc8AI;
