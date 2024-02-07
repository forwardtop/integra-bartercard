import React from 'react';

const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between align-middle">
          <button style={{borderRadius:'1.75rem'}} className="font-bold text-xl flex items-center justify-center w-44 h-10 rounded-full border border-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-300 text-gray-500">
          1 | Device
          </button>
          <div className="hidden lg:hidden xl:flex items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 border-t border-r border-gray-500 transform rotate-45"></div>
          </div>
          <button style={{borderRadius:'1.75rem'}} className="font-bold text-xl flex items-center justify-center w-44 h-10 rounded-full border border-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-300 text-gray-500">
          2 | Terms
          </button>
          <div className="hidden lg:hidden xl:flex items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 border-t border-r border-gray-500 transform rotate-45"></div>
          </div>
          <button style={{borderRadius:'1.75rem'}} className="font-bold text-xl flex items-center justify-center w-44 h-10 rounded-full border border-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-300 text-gray-500">
          3 | Lines
          </button>
          <div className="hidden lg:hidden xl:flex items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 border-t border-r border-gray-500 transform rotate-45"></div>
          </div>
          <button style={{borderRadius:'1.75rem'}} className="font-bold text-xl flex items-center justify-center w-44 h-10 rounded-full border border-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-300 text-gray-500">
          4 | Options
          </button>
          <div className="hidden lg:hidden xl:flex items-center">
            <div className="w-4 h-4 lg:w-5 lg:h-5 border-t border-r border-gray-500 transform rotate-45"></div>
          </div>
          <button style={{borderRadius:'1.75rem'}} className="font-bold text-xl flex items-center justify-center w-44 h-10 rounded-full border border-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-300 text-gray-500">
          5 | Check Out
          </button>

    </div>
  );
};

export default Stepper;