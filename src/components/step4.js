import React from "react";

const Step4 = () => {
  return (
    <div className="mt-24 flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-6xl font-semibold mb-4 text-[#a020ef]">Thank you for your ordering</h2>
        <p className="text-3xl p-10">Your request has been submitted</p>
        <div className="flex justify-center items-center">
        <button onClick={() => (window.location.href = "/")} style={{borderRadius:'1.75rem'}}
            className="flex items-center justify-center w-44 h-10 rounded-full border bg-[#a020ef] hover:bg-white hover:text-[#a020ef] hover:border-[#a020ef] text-white">
            Go to Homepage
        </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
