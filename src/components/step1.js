import React, { useContext } from "react";
import { AuthContext } from "../config/AuthContext";

const Step1 = () => {
  const { email, setEmail, isValidEmail, setIsValidEmail,showValidationMessage } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  return (
    <div className="w-full sticky top-0">
      {/* Add Step 1 content here */}
      <div className="text-center">
        <h2 className="text-5xl font-semibold mb-4">Request quote</h2>
        <p className="text-xl p-10">Hello! Let's start with your work e-mail</p>
      </div>
      <div className="flex flex-col">
        <label className='text-xs'>Your work e-mail</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your work email"
          className={`border rounded-lg p-2 mt-2 ${isValidEmail ? '' : (showValidationMessage ? 'border-red-500' : '')}`}
          value={email}
          onChange={handleEmailChange}
        />
        {!isValidEmail && showValidationMessage && (
          <p className="text-red-500 text-xs mt-1">Please enter a valid email address.</p>
        )}
      </div>
    </div>
  );
};

export default Step1;
