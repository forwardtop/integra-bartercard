import React, { useState, useContext, useEffect } from "react";
import Step1 from "./../components/step1";
import Step2 from "./../components/step2";
import Step3 from "./../components/step3";
import { AuthContext } from "../config/AuthContext";
// import axios from "axios";
import Step4 from "../components/step4";
import Equipment from "./equipment";
import Ippbx from "./ippbx";
import ContactTerm from "./contactTerm";
import SelectYourPlan from "./selectYourPlan";

const steps = [
  { id: 1, component: Step1 },
  { id: 2, component: Step2 },
  { id: 3, component: Step3 },
  { id: 4, component: Step4 },
];

const OrderProcess = () => {
  const [step, setStep] = useState(1);
  const { 
    setShowValidationMessage,
    total,
    receptionPhone,
    desktopPhone,
    cordlessPhone,
    softPhone,
    upfrontCost,
    selectedTerm,
    deliveryFee,
    totalSetup,
    totalUpfrontCost,
    seatLicense,
    totalMonthlyCost,
    setTotalMonthlyCost,
    currentNumberCost,
    planCode,
    callingLineUltimateCost,
  } = useContext(AuthContext);
  

  useEffect(() => {
    setTotalMonthlyCost(callingLineUltimateCost + seatLicense);
  }, [seatLicense, callingLineUltimateCost, setTotalMonthlyCost]);

  const handleNext = () => {
    setShowValidationMessage(true);
    setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row  font-gothic">

        {/* Section 1: Your Order Section */}
      
        <div className="text-center bg-gray-100 lg:w-1/4 lg:min-w-[500px]">
          <div className="flex flex-col items-center justify-center mt-3">
            <div className=" bg-red-500 w-full lg:w-2/3">
              <h1 className="text-2xl md:text-xl font-bold text-white px-2">
                Your Order
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center mt-1 text-left space-y-1 lg:w-2/3">
            <div className="w-full border-gray-500 border border-solid rounded-md overflow-hidden">
                <div className="bg-red-100 flex justify-between">
                  <h2 className="text-red-500 pl-5 font-bold">Your Equipment</h2>
                  <h2 className="text-red-500 pr-2 font-bold">Total</h2>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Reception Phone</p>
                  <span className="text-gray-700 font-bold pr-2">
                    {receptionPhone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Executive Phone</p>
                  <span className="text-gray-700 font-bold pr-2">
                    {desktopPhone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Cordless Phone</p>
                  <span className="text-gray-700 font-bold pr-2">
                    {cordlessPhone}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Softphone</p>
                  <span className="text-gray-700 font-bold pr-2">
                    {softPhone}
                  </span>
                </div>
                <div className="bg-red-100 flex justify-between">
                  <h2 className=" text-red-500 pl-5 font-bold">Total</h2>
                  <h2 className="text-red-500 pr-2 font-bold">{total}</h2>
                </div>
              </div>
              <div className="w-full border-gray-500 border border-solid rounded-md overflow-hidden">
                <div className="bg-red-100">
                  <h2 className="px-5 text-red-500 font-bold">Upfront Cost</h2>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Total phone hardware cost</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Setup cost</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ {totalSetup}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Number porting fee</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ {currentNumberCost}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Professional installation</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Delivery fee</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ {deliveryFee}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">NBN Installation Fee</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ {upfrontCost}
                  </span>
                </div>
                <div className="bg-red-100 flex justify-between">
                  <h2 className=" px-5 text-red-500  font-bold">Total</h2>
                  <h2 className="text-red-500  font-bold pr-2">$ {totalUpfrontCost}</h2>
                </div>
              </div>
              <div className="w-full border-gray-500 border border-solid rounded-md overflow-hidden">
                <div className="bg-red-100">
                  <h2 className=" px-5 text-red-500  font-bold">Monthly Cost</h2>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">H100 - UC8 Foundation Cost</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">H200 - UC8 Seat License</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ {seatLicense}
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">H400 - UC8 Calling Plan - Ultimate</p>
                  <span className="text-gray-700 font-bold pr-2">
                   $ {callingLineUltimateCost}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-sm pl-5">S100 - UC8 SLA Support Agreement</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">C100 - UC8 Connection Pack</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">N100 - National Number</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">B520 - UC8 NBN+Voip Tail 100/20</p>
                  <span className="text-gray-700 font-bold pr-2">
                    $ 0
                  </span>
                </div>
                <div className="bg-red-100 flex justify-between">
                  <h2 className=" px-5 text-red-500  font-bold">Total</h2>
                  <h2 className="text-red-500  font-bold pr-2">$ {totalMonthlyCost}</h2>
                </div>
              </div>
              <div className="w-full border-gray-500 border border-solid rounded-md overflow-hidden">
                <div className="bg-red-100">
                  <h2 className=" px-5 text-red-500  font-bold">Plan Details</h2>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Terms - {selectedTerm} Months</p>
                  <span className="text-gray-700 font-bold pr-2">
                  
                  </span>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm pl-5">Calling Plan = {planCode}</p>
                  <span className="text-gray-700 font-bold pr-2">
                  
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Quote Request Form */}
        <div
          className="flex flex-col items-center m-auto"
          onKeyDown={handleKeyPress}
        >
          <div
            className={`transition-transform duration-500 ${
              step === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 1 && <Ippbx />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 2 && <Equipment />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 3
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 3 && <ContactTerm />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 4
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 4 && <SelectYourPlan />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 5
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 5 && <Step4 />}
          </div>
          <div
            className={`flex flex-col justify-between mt-5 ${
              step === 5 ? "hidden" : "block"
            }`}
          >
            <div className="mb-4">
              {step > 1 && (
                <button
                  onClick={handlePrev}
                  className="bg-gray-500 text-white rounded-full w-32 px-4 py-2 mr-4"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className="bg-red-500 text-white rounded-full w-32 px-4 py-2"
              >
                {step === steps.length ? "Submit" : "Next"}
              </button>
            </div>
            <div className="font-bold text-4xl text-center">
              {steps.map((s) => (
                <span
                  key={s.id}
                  className={`mr-2 ${
                    s.id === step ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  &bull;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcess;
