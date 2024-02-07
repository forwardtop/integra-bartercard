// Steps/Step1.js

import React from "react";
import { AuthContext } from "../config/AuthContext";
import { useContext } from "react";
const Step2 = () => {
  const {firstName, setFirstName} = useContext(AuthContext);
  const {lastName, setLastName} = useContext(AuthContext);
  const {phoneNumber, setPhoneNumber} = useContext(AuthContext);

  return (
    <div className="w-full sticky top-0">
      {/* Add Step 1 content here */}
      <div className="text-center">
        <h2 className="text-5xl font-semibold mb-4">Request quote</h2>
        <p className="text-xl p-10">Tell us a little bit about yourself</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <label className='text-xs'>First Name</label>
          <input
            name="first"
            type="text"
            placeholder="Enter first name"
            className="border rounded-lg p-2 mt-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label className='text-xs'>Last Name</label>
          <input
            name="last"
            type="text"
            placeholder="Enter last name"
            className="border rounded-lg p-2 mt-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <label className='text-xs'>Phone</label>
        <input
          name="phone"
          type="text"
          placeholder="Enter contact number"
          className="border rounded-lg p-2 mt-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Step2;
