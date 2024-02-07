import axios from "axios";
import React, { useState } from "react";
import {
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./header";
import BreadCrumbsBar from "./breadCrumbsBar";

export default function ContactUs() {
  const history = useHistory();
  const queryParams = new URLSearchParams(window.location.search);

  const PBXData = JSON.parse(decodeURIComponent(queryParams.get("PBXData")));

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

  // Validation function for last name
  const validateLastName = (name) => {
    if (name.trim() === "") {
      return "Last name is required";
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
    }

    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: error });
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(formData.email);
    const firstNameError = validateFirstName(formData.firstName);
    const lastNameError = validateLastName(formData.lastName);

    setErrors({
      email: emailError,
      firstName: firstNameError,
      lastName: lastNameError,
      // ...other fields
    });
    const formIsValid = !emailError && !firstNameError && !lastNameError;

    if (formIsValid) {
      history.push("/thankyou");

      const data = {
        formData: formData,
        pbxData: PBXData,
      };
      await axios
        .post("https://117.120.12.153:3001/send", { data })
        .then((res) => {});
      console.log("Form is valid:", formData);
    } else {
      // Form has errors, do not submit
      console.log("Form has errors:", errors);
    }
  };
  return (
    <div>
      <Header />
      <BreadCrumbsBar />
      <div className="isolate bg-white px-6 py-12 sm:py-10 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] border-solid border-red-500 border-2 rounded"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          {/* <h2 className="text-3xl  tracking-tight text-red-600 sm:text-4xl">5. Check Out</h2> */}
        </div>

        <form
          className="mx-auto max-w-4xl border border-solid border-red-500 px-4 py-4"
          style={{ borderRadius: "1.75rem" }}
        >
          {/* <div className="-mt-4 -ml-4 w-44 rounded-full border-2 border-red-500 hover:border-red-500 text-white bg-red-500 px-4 py-2">
            5 | Checkout
          </div> */}
          <div className="py-5 px-10">
            <h1 className="text-xl font-bold text-gray-600">Business</h1>
            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                Company Name
              </label>
              <input
                className=" text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="companyName"
                placeholder=" Company Name"
                value={formData.companyName}
                onChange={handleFormChange}
              />
            </div>

            <div className="text-sm mt-2 flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                Trading Name
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="tradingName"
                placeholder=" Trading Name"
                value={formData.tradingName}
                onChange={handleFormChange}
              />
            </div>

            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                ABN Number
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="abnNumber"
                placeholder=" ABN Number"
                value={formData.abnNumber}
                onChange={handleFormChange}
              />
            </div>

            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                Web Address
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="webAddress"
                placeholder=" Web Address"
                value={formData.webAddress}
                onChange={handleFormChange}
              />
            </div>

            <h1 className="py-5 text-xl font-bold text-gray-600">
              Contact Person
            </h1>

            <div className="flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                First Name
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="firstName"
                placeholder=" First Name"
                value={formData.firstName}
                onChange={handleFormChange}
              />
            </div>
            {errors.firstName && (
              <p className="text-center text-red-500 text-sm">
                {errors.firstName}
              </p>
            )}

            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                Last Name
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="lastName"
                placeholder=" Last Name"
                value={formData.lastName}
                onChange={handleFormChange}
              />
            </div>
            {errors.lastName && (
              <p className="text-center text-red-500 text-sm">
                {errors.lastName}
              </p>
            )}

            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                Telephone (BH)
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="telephone"
                placeholder=" Telephone (BH)"
                value={formData.telephone}
                onChange={handleFormChange}
              />
            </div>

            <div className="mt-2 flex flex-row justify-center align-middle items-center">
              <label className="text-sm w-40 block text-gray-600  mb-1">
                Mobile Number
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="mobileNumber"
                placeholder=" Mobile Number"
                value={formData.mobileNumber}
                onChange={handleFormChange}
              />
            </div>

            <div className="text-sm mt-2 flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                Email Address
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="email"
                placeholder=" Email Address"
                value={formData.email}
                onChange={handleFormChange}
              />
            </div>

            {errors.email && (
              <p className="text-center text-red-500 text-sm">{errors.email}</p>
            )}

            <h1 className="py-5 text-xl font-bold text-gray-600">
              Site Address
            </h1>

            <div className="text-sm flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                Address Line 1
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="address1"
                placeholder=" Address Line 1"
                value={formData.address1}
                onChange={handleFormChange}
              />
            </div>

            <div className="text-sm mt-2 flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                Address Line 2
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="address2"
                placeholder=" Address Line 2"
                value={formData.address2}
                onChange={handleFormChange}
              />
            </div>

            <div className="text-sm mt-2 flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                Suburb / State / Postcode
              </label>
              <input
                className="text-sm w-2/4 p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="suburb"
                placeholder=" Suburb"
                value={formData.suburb}
                onChange={handleFormChange}
              />
              <input
                className="text-sm w-1/4 p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="state"
                placeholder=" State"
                value={formData.state}
                onChange={handleFormChange}
              />
              <input
                className="text-sm w-1/4 p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="postcode"
                placeholder=" Postcode"
                value={formData.postcode}
                onChange={handleFormChange}
              />
            </div>

            <div className="text-sm mt-2 flex flex-row justify-center align-middle items-center">
              <label className="w-40 block text-gray-600  mb-1">
                City / Town
              </label>
              <input
                className="text-sm w-full p-2 rounded-full border border-gray-300 focus:border-red-500 focus:ring focus:ring-red-200"
                type="text"
                id="city"
                placeholder=" City / Town"
                value={formData.city}
                onChange={handleFormChange}
              />
            </div>
            <div className="mt-5 flex justify-end">
              <button
                onClick={handleSendEmail}
                style={{ borderRadius: "1.75rem" }}
                className="flex items-center justify-center w-44 h-10 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
