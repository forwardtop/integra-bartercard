import React from "react";

const Uc8AI = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-9/10 lg:w-2/3 m-auto pt-5">
      <div className="lg:w-1/2 bg-cover bg-center h-[90vh]" style={{backgroundImage:'url(/images/aibackground.png)'}}>

        <div className="pt-48 text-center text-white">

          <h1 className="text-4xl font-bold mb-8 font-bradhitc">"Future Technology Today!"</h1>

          <img
            src="/images/uc8.png"
            alt="aibackground"
            className="mx-auto pt-24"
          />

        </div>

        <div className="pt-24 text-white">
        <div className="flex justify-center">
            <div className="p-5 lg:w-1/4 w-1/3">
                <img src="/images/map.svg" className="w-6 h-6" alt=""></img>
                <p className="text-xs">Integra House Building 14, 2 Link Drive Yatala QLD 4212 Brisbane Australia </p>
            </div>
            <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-center">
                    <img src="/images/telephone.svg" className="w-6 h-6" alt=""></img>
                </div>
                
                <p className="text-xs">1300 804 880</p>
            </div>
            <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-end pr-6">
                    <img src="/images/map.svg" className="w-6 h-6" alt=""></img>
                </div>
                <p className="text-xs">info@uc8.au<br></br>www.uc8.au </p>
            </div>
        </div>
          
        </div>
      </div>
      {/* Right Column */}
      <div className="w-full mt-[3px] lg:w-1/2 bg-cover bg-center h-[90vh] relative" style={{backgroundImage:'url(/images/phoneSystem.png)'}}>
      </div>
    </div>
  );
};

export default Uc8AI;
