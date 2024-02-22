import React, { useState, useContext } from "react";
import Step1 from "./../components/step1";
import Step2 from "./../components/step2";
import Step3 from "./../components/step3";
import StepHeader from "../components/stepHeader";
import { AuthContext } from "../config/AuthContext";
import axios from "axios";
import Step4 from "../components/step4";
import Footer from "../components/footer";
import BreadCrumbsBar from "../components/breadCrumbsBar";

const steps = [
  { id: 1, component: Step1 },
  { id: 2, component: Step2 },
  { id: 3, component: Step3 },
];

const RequestQuote = () => {
  const [step, setStep] = useState(1);

  const {email} = useContext(AuthContext);
  const {firstName} = useContext(AuthContext);
  const {lastName} = useContext(AuthContext);
  const {phoneNumber} = useContext(AuthContext);
  const {country} = useContext(AuthContext);
  const {primary} = useContext(AuthContext);
  const {company} = useContext(AuthContext);
  const {employee} = useContext(AuthContext);
  const {isValidEmail} = useContext(AuthContext);
  const {setShowValidationMessage} = useContext(AuthContext);


  const handleNext = () => {
    // if (email.trim().length === 0) {
    //   setIsValidEmail(false);
    // }
    setShowValidationMessage(true);

    if (step < steps.length) {
      console.log("validEmail : ", isValidEmail);
        if(isValidEmail && email.trim().length !== 0){
          setStep(step + 1);
          console.log(step);
        }
    }
    if (step === steps.length){
        const data = {
          email:email,
          firstName:firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          country: country,
          primary: primary,
          company: company,
          employee: employee,
        }
        console.log('data:', data);

        axios.post('https://uc8.au/email/index.py', data).then(res => {
          console.log('result:', res.data);
        })
        .catch(error => {
          console.error('Error sending data:', error);
  
        });
        setStep(4);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <div>
      <StepHeader />
      <BreadCrumbsBar />
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="text-center p-4 md:p-12 bg-gray-100">
          <div className="flex items-center justify-center">
            <h1 className="w-2/3 text-2xl md:text-4xl font-semibold">
              Integrated contact center, voice, video, chat, and APIs.
            </h1>
          </div>
          <div className="flex items-center justify-center mt-4">
            <img
              src="/images/step.webp"
              alt=""
              className="w-48 h-48 md:w-96 md:h-96 object-cover"
            />
          </div>
        </div>
        {/* Section 2: Quote Request Form */}
        <div className="lg:w-1/2 flex flex-col items-center mx-5 lg:mx-auto mt-24" onKeyDown={handleKeyPress}>
          <div
            className={`transition-transform duration-500 ${
              step === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            {step === 1 && <Step1 />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            {step === 2 && <Step2 />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 3 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            {step === 3 && <Step3 />}
          </div>
          <div
            className={`transition-transform duration-500 ${
              step === 4 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
          >
            {step === 4 && <Step4 />}
          </div>

          <div className={`flex flex-col justify-between mt-16 ${step === 4 ? 'hidden' : 'block'  }`}>
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
                    s.id === step ? "text-red-700 " : "text-gray-500"
                  }`}
                >
                  &bull;
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RequestQuote;
