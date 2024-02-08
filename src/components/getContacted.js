// import axios from 'axios';
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function GetContacted() {
  const history = useHistory();
  // const queryParams = new URLSearchParams(window.location.search);

  // const PBXData = JSON.parse(decodeURIComponent(queryParams.get('PBXData')));

  const [formData, setFormData] = useState({
    companyName: "",
    tradingName: "",
    abnNumber: "",
    webAddress: "",
    firstName: "",
    lastName: "",
    telephone: "",
    mobileNumber: "",
    email: "",
    address1: "",
    address2: "",
    suburb: "",
    state: "",
    postcode: "",
    city: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    tradingName: "",
    telephone: "",
    mobileNumber: "",
    // ...other fields
  });

  // Validation function for email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  // Validation function for first name
  const validateFirstName = (name) => {
    if (name.trim() === "") {
      return "First name is required";
    }
    return "";
  };
  const validateTradingName = (name) => {
    if (name.trim() === "") {
      return "Trading Name is required";
    }
    return "";
  };

  // Validation function for last name
  const validateLastName = (name) => {
    if (name.trim() === "") {
      return "Surname is required";
    }
    return "";
  };
  const validateTelephone = (name) => {
    if (name.trim() === "") {
      return "Telephone Number is required";
    }
    return "";
  };
  const validateMobileNumber = (name) => {
    if (name.trim() === "") {
      return "Mobile Number is required";
    }
    return "";
  };
  const handleFormChange = (event) => {
    const { id, value } = event.target;

    let error = "";
    if (id === "email") {
      error = validateEmail(value);
    } else if (id === "firstName") {
      error = validateFirstName(value);
    } else if (id === "lastName") {
      error = validateLastName(value);
    } else if (id === "tradingName") {
      error = validateTradingName(value);
    } else if (id === "telephone") {
      error = validateTelephone(value);
    } else if (id === " ") {
      error = validateMobileNumber(value);
    }

    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: error });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);
    const tradingNameError = validateTradingName(formData.tradingName);
    const telephoneError = validateTelephone(formData.telephone);
    const mobileNumberError = validateMobileNumber(formData.mobileNumber);

    setErrors({
      email: emailError,
      firstName: firstNameError,
      lastName: lastNameError,
      tradingName: tradingNameError,
      telephone: telephoneError,
      mobileNumber: mobileNumberError,
      // ...other fields
    });
    const formIsValid =
      !emailError &&
      !firstNameError &&
      !lastNameError &&
      !tradingNameError &&
      !telephoneError;

    if (formIsValid) {
      history.push("/hostedPhoneSystem");

      // const data = {
      //   formData:formData,
      //   pbxData:PBXData
      // }
      // await axios.post('https://117.120.12.153:3001/send',{data})
      // .then((res) => {

      // })
      //   console.log('Form is valid:', formData);
      // } else {
      //   // Form has errors, do not submit
      //   console.log('Form has errors:', errors);
      // }
    }
  };
  return (
    <div className="isolate bg-white px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {/* <h2 className="text-3xl  tracking-tight text-red-600 sm:text-4xl">5. Check Out</h2> */}
      </div>

      <form
        className="mx-auto max-w-4xl border border-solid border-red-500 px-4 py-4"
        style={{ borderRadius: "1.75rem" }}
      >
        <div className="flex items-center">
          {/* <div className="w-10 h-10 md:w-8 md:h-8 sm:w-6 sm:h-6 border border-solid rounded-full text-white bg-red-500 flex justify-center items-center mr-5">
            <h1 className="text-2xl font-extrabold font-mono md:text-xl md:font-bold sm:text-sm sm:font-normal">
              1
            </h1>
          </div> */}
          <div className="text-2xl text-gray-500 font-semibold px-8">
            Get Connected
          </div>
        </div>
        
        <div className="py-5 px-10">
          <h1 className="text-xl font-bold text-red-500">Business Details</h1>
          <div className="mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="text-sm w-56 block text-gray-600 mb-1"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              // placeholder='Company Name'
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleFormChange}
            />
          </div>

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="tradingName"
            >
              Trading Name
            </label>
            <div className="relative w-full">
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="tradingName"
                name="tradingName"
                value={formData.tradingName}
                onChange={handleFormChange}
                required
              />
              <span className="absolute top-1.5 right-3 text-2xl text-red-500 font-extrabold">
                *
              </span>
            </div>
          </div>
          {errors.tradingName && (
            <p className="text-center text-red-500 text-sm">
              {errors.tradingName}
            </p>
          )}

          <div className="mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="text-sm w-56 block text-gray-600  mb-1"
              htmlFor="abnNumber"
            >
              ABN Number
            </label>
            <input
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="abnNumber"
              value={formData.abnNumber}
              onChange={handleFormChange}
            />
          </div>

          <h1 className="py-5 text-xl font-bold text-red-500">
            Contact Person
          </h1>

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <div className="relative w-full">
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormChange}
                required
              />
              <span className="absolute top-1.5 right-3 text-2xl text-red-500 font-extrabold">
                *
              </span>
            </div>
          </div>
          {errors.firstName && (
            <p className="text-center text-red-500 text-sm">
              {errors.firstName}
            </p>
          )}

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="lastName"
            >
              Surname
            </label>
            <div className="relative w-full">
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormChange}
                required
              />
              <span className="absolute top-1.5 right-3 text-2xl text-red-500 font-extrabold">
                *
              </span>
            </div>
          </div>
          {errors.firstName && (
            <p className="text-center text-red-500 text-sm">
              {errors.lastName}
            </p>
          )}

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="bh"
            >
              Telephone Number (BH)
            </label>
            <div className="relative w-full">
              <input
                className="w-[30%] text-sm sm:w-[15%] p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="bh"
                // value={formData.postcode}
                onChange={handleFormChange}
              />
              <input
                className="w-[63%] ml-3 text-sm p-2 sm:w-[35%] rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleFormChange}
                required
              />
              <span className="absolute right-3 top-1.5 sm:right-1/2 text-2xl text-red-500 font-extrabold">
                *
              </span>
            </div>
          </div>
          {errors.telephone && (
            <p className="text-center text-red-500 text-sm">
              {errors.telephone}
            </p>
          )}

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1" htmlFor="pre_number"
            >
              Mobile Number
            </label>
            <div className="relative w-full">
              <input
                className="w-[30%] text-sm sm:w-[15%] p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="pre_number"
                // value={formData.postcode}
                onChange={handleFormChange}
              />
              <input
                className="w-[63%] ml-3 text-sm p-2 sm:w-[35%] rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleFormChange}
                required
              />
              <span className="absolute right-3 top-1.5 sm:right-1/2 text-2xl text-red-500 font-extrabold">
                *
              </span>
            </div>
          </div>
          {errors.mobileNumber && (
            <p className="text-center text-red-500 text-sm">
              {errors.mobileNumber}
            </p>
          )}

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label className="w-56 block text-gray-600  mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
            />
          </div>

          {errors.email && (
            <p className="text-center text-red-500 text-sm">{errors.email}</p>
          )}

          <h1 className="py-5 text-xl font-bold text-red-500">
            Site Address
          </h1>

          <div className="text-sm flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="address1"
            >
              Address Line 1
            </label>
            <input
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="address1"
              value={formData.address1}
              onChange={handleFormChange}
            />
          </div>

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label
              className="w-56 block text-gray-600  mb-1"
              htmlFor="address2"
            >
              Address Line 2
            </label>
            <input
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="address2"
              value={formData.address2}
              onChange={handleFormChange}
            />
          </div>

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label className="w-56 block text-gray-600  mb-1" htmlFor="suburb">
              Suburb / State / Postcode
            </label>
            <input
              className="w-full text-sm sm:w-[40%] p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="suburb"
              value={formData.suburb}
              onChange={handleFormChange}
            />

            <select
              variant="outlined"
              label="Select Version"
              className="w-full sm:ml-3 sm:w-[28%] rounded-full border border-solid border-gray-300 text-gray-500 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
            >
              <option>Select State</option>
              <option>ACT</option>
              <option>NSW</option>
              <option>NT</option>
              <option>SA</option>
              <option>VIC</option>
              <option>QLD</option>
              <option>WA</option>
            </select>
            <input
              className="w-full sm:ml-3 text-sm sm:w-1/4 p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="postcode"
              value={formData.postcode}
              onChange={handleFormChange}
            />
          </div>

          <div className="text-sm mt-2 flex flex-col sm:flex-row justify-center align-middle items-center">
            <label className="w-56 block text-gray-600  mb-1" htmlFor="city">
              City / Town
            </label>
            <input
              className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-[#f7535356]"
              type="text"
              id="city"
              value={formData.city}
              onChange={handleFormChange}
            />
          </div>
          <div className="mt-5 flex justify-end">
            <button
              onClick={() => history.push(`/`)}
              style={{ borderRadius: "1.75rem" }}
              className="flex items-center justify-center w-44 h-10 rounded-full border border-red-500 bg-white text-red-500 mr-5"
            >
              Previous
            </button>
            <button
              onClick={handleSendEmail}
              style={{ borderRadius: "1.75rem" }}
              className="flex items-center justify-center w-44 h-10 rounded-full border bg-red-500 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
