import React, { useState, useContext } from "react";
import Step1 from "./../components/step1";
import Step2 from "./../components/step2";
import Step3 from "./../components/step3";
import { AuthContext } from "../config/AuthContext";
// import axios from "axios";
import Step4 from "../components/step4";
import Equipment from "./equipment";
import SelectTerm from "./selectTerm";

const steps = [
  { id: 1, component: Step1 },
  { id: 2, component: Step2 },
  { id: 3, component: Step3 },
];

const OrderProcess = () => {
  const [step, setStep] = useState(1);

//   const { email } = useContext(AuthContext);
//   const { firstName } = useContext(AuthContext);
//   const { lastName } = useContext(AuthContext);
//   const { phoneNumber } = useContext(AuthContext);
//   const { country } = useContext(AuthContext);
//   const { primary } = useContext(AuthContext);
//   const { company } = useContext(AuthContext);
//   const { employee } = useContext(AuthContext);
//   const { isValidEmail } = useContext(AuthContext);
  const { setShowValidationMessage } = useContext(AuthContext);
  const { total } = useContext(AuthContext);
  const { receptionPhone } = useContext(AuthContext);
  const { desktopPhone } = useContext(AuthContext);
  const { cordlessPhone } = useContext(AuthContext);
  const { softPhone } = useContext(AuthContext);
  const { terms } = useContext(AuthContext);
  const { upfrontCost } = useContext(AuthContext);

console.log(terms);


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
      <div className="flex flex-col lg:flex-row">
        <div className="text-center p-4 md:p-12 bg-gray-100">
          <div className="flex items-center justify-center">
            <h1 className=" text-2xl md:text-4xl font-semibold text-red-500">
                Your Order Process
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-4 text-left space-y-10">
            <div className="space-y-2">
              <h2 className="text-2xl text-red-500 ">Equipment</h2>
              <p>Reception Phone = <span className="text-2xl text-red-500 font-bold">{receptionPhone}</span> </p>
              <p>Excusive Phone = <span className="text-2xl text-red-500 font-bold">{desktopPhone}</span></p>
              <p>Cordless Phone = <span className="text-2xl text-red-500 font-bold">{cordlessPhone}</span></p>
              <p>Softphone = <span className="text-2xl text-red-500 font-bold">{softPhone}</span></p>
              <p>Total Equipment = <span className="text-2xl text-red-500 font-bold">{total}</span></p>
              <p>Total Seats = <span className="text-2xl text-red-500 font-bold">{total}</span> </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-red-500">Upfront Cost</h2>
              <p>Terms = <span className="text-2xl text-red-500 font-bold">{terms}</span> </p>
              <p>Upfront Cost =<span className="text-2xl text-red-500 font-bold">{upfrontCost}</span>  </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl text-red-500">Monthly Cost</h2>
              <p>UC8 PBX = </p>
              <p>Seat Licence = </p>
              <p>Call Cost = </p>
              <p>Total = </p>
            </div>
          </div>
        </div>
        {/* Section 2: Quote Request Form */}
        <div
          className="flex flex-col items-center mx-5 lg:mx-auto mt-12"
          onKeyDown={handleKeyPress}
        >
          <div
            className={`transition-transform duration-500 ${
              step === 1
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 1 && <Equipment />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 2
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 2 && <SelectTerm />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 3
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 3 && <Step3 />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 4
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            }`}
          >
            {step === 4 && <Step4 />}
          </div>

          <div
            className={`flex flex-col justify-between mt-16 ${
              step === 4 ? "hidden" : "block"
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
