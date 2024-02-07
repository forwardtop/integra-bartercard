import React from "react";
import { Link } from "react-router-dom";

export default function StepHeader() {
  const handleBackButtonClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="h-20 auto" />
        </Link>

          {/* Back button */}
          <button
            onClick={() => handleBackButtonClick()}
            className="hidden lg:flex items-center text-red-500 text-2xl hover:text-gray-900 ml-24"
          >
            <svg
              xmlns="https://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>
        </div>

        {/* Phone number with icon */}
        <div className="flex items-center">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-red-700"
            aria-hidden="true"
            xmlns="https://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
            />
          </svg>
          <p className="text-lg lg:text-3xl ml-4 font-extrabold text-red-700">1 300 804 880</p>
        </div>
      </div>
    </div>
  );
}
