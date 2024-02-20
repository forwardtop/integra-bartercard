import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthContext";

const Ippbx = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const {
    setCurrentNumberCost,
  } = useContext(AuthContext);
  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  useEffect(() => {
    setCurrentNumberCost(selectedOption);
  }, [selectedOption, setCurrentNumberCost]);
  
  return (
    <div>
      <div className="pt-5 lg:min-w-[800px]">
        <div className="w-full min-w-fit">
          <div className="flex justify-start items-center mt-5">
            <img src="/images/1.png" alt=""></img>
            <h2 className="text-xl font-bold px-3">Get Connected</h2>
          </div>
          <div className="w-full overflow-x-auto mt-6">
            <table
              className="lg:w-full"
              style={{ borderCollapse: "separate", borderSpacing: "2px" }}
            >
              <colgroup>
                <col style={{ width: "60%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "20%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th className="bg-gray-200 p-4 text-left text-red-500">
                    Foundation
                  </th>
                  <th className="bg-gray-200 p-4 text-center text-red-500">
                    Plan
                  </th>
                  <th className="bg-gray-200 p-4 text-center text-red-500">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 bg-gray-300" colSpan="2">
                    <div className="flex justify-between">
                      <p className="text-sm">
                        UC8 Hosted IPPBX Business Phone System
                      </p>
                      <p className="text-sm mr-5">H100</p>
                    </div>
                    <div className="flex items-center mt-3">
                      <div className="w-1/4 text-center">
                        <div className="flex justify-center">
                          <img src="/images/advertise.png" alt="" />
                        </div>
                        <p className="text-center text-[10px]">
                          Advertised
                          <br />
                          Calling Number
                        </p>
                      </div>
                      <div className="mx-2 text-3xl text-red-500">+</div>
                      <div className="w-1/4 text-center">
                        <div className="flex justify-center">
                          <img src="/images/uc8icon.png" alt="" />
                        </div>
                        <p className="text-center text-[10px]">
                          UC8 IPPBX
                          <br />
                          Phone System
                        </p>
                      </div>
                      <div className="mx-2 text-3xl text-red-500">+</div>
                      <div className="w-1/4 text-center">
                        <div className="flex justify-center">
                          <img src="/images/linetower.png" alt="" />
                        </div>
                        <p className="text-center text-[10px]">
                          UC8 Multi Line
                          <br />
                          Unlimited Calling Lines*
                        </p>
                      </div>
                      <div className="mx-2 text-3xl text-red-500">+</div>
                      <div className="w-1/4 text-center">
                        <div className="flex justify-center">
                          <img src="/images/recruiter.png" alt="" />
                        </div>
                        <p className="text-center text-[10px]">
                          UC8 Help
                          <br />
                          Desk Support
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center bg-gray-300">
                    <div className="flex flex-col items-center">
                      <br />
                      <div>
                        $&nbsp;<span className="font-bold text-4xl">39</span>
                      </div>
                      <div className="text-xl">per month</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex  mt-5">
            <div className="space-y-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500 border-red-500 rounded-full"
                  value={0}
                  checked={selectedOption === 0}
                  onChange={() => handleSelect(0)}
                />
                <span>I want a new telephone number for my business ($0)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500 border-red-500 rounded-full"
                  value={50}
                  checked={selectedOption === 50}
                  onChange={() => handleSelect(50)}
                />
                <span>I want to keep my current telephone number(s) ($50)</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ippbx;
