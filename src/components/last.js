import React from "react";

const Last = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-3xl m-auto pt-5">
      <div
        className="w-full bg-cover bg-center h-screen flex flex-col justify-between relative mb-5"
        style={{ backgroundImage: "url(/images/aibackground.png)" }}
      >
        <div className="absolute inset-0 bg-cover bg-center z-0  text-white">
          <h1 className="text-white text-4xl absolute top-1/4 w-full text-center z-10 font-bradhitc font-bold">
            "Future Technology Today!"
          </h1>
          <div className="flex justify-center items-center h-full z-10">
            <img
              src="/images/uc8.png"
              alt="aibackground"
              className="mx-auto mt-24"
            />
          </div>
          <div className="absolute bottom-0 pb-4 z-10 w-full text-white">
            <div className="flex justify-center">
              <div className="p-5 lg:w-1/4 w-1/3">
                <img src="/images/map.svg" className="w-6 h-6" alt=""></img>
                <p className="text-xs">
                  Integra House Building 14, 2 Link Drive Yatala QLD 4212
                  Brisbane Australia
                </p>
              </div>
              <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-center">
                  <img
                    src="/images/telephone.svg"
                    className="w-6 h-6"
                    alt=""
                  ></img>
                </div>

                <p className="text-xs text-center">1300 804 880</p>
              </div>
              <div className="p-5 lg:w-1/4 w-1/3">
                <div className="flex justify-end">
                  <img src="/images/map.svg" className="w-6 h-6" alt=""></img>
                </div>
                <p className="text-xs text-right">
                  info@uc8.au<br></br>www.uc8.au
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Column */}
    </div>
  );
};

export default Last;
