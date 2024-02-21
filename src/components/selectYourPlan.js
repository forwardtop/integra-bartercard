import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthContext";

const SelectYourPlan = () => {
  const [selectedCol, setSelectedCol] = useState(0);
  const [numberLines, setNumberLines] = useState(0);
  const { setPlanCode } = useContext(AuthContext);
  const { callingLineUltimateCost, setCallingLineUltimateCost } = useContext(AuthContext);
  const handleColSelect = (index) => {
    if (selectedCol === index) {
      setSelectedCol(null);
    } else {
      setSelectedCol(index);
      setPlanCode(index);
    }
  };

  const handleDecrement = () => {
    setNumberLines((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setNumberLines((prev) => prev + 1);
  };

  useEffect(() => {
    setCallingLineUltimateCost(numberLines * 39);
  }, [numberLines, setCallingLineUltimateCost]);
  return (
    <div>
      <div className="flex justify-start items-center">
        <img src="/images/4.png" alt=""></img>
        <h2 className="text-xl font-bold px-3">Select Your Call Plan</h2>
      </div>
      <div className="flex justify-around flex-col lg:flex-row">
      <div>
      <table className="w-full">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-white p-3 text-sm "></th>
              <th className="border border-white p-3 bg-[#ed1c24] text-white relative w-1/4">
                <div className="absolute inset-x-0 -top-[6px] flex justify-center">
                  <div className="flex items-center relative">
                    <img src="/images/popular.svg" className="h-5" alt=""></img>
                  </div>
                </div>
                <div className="text-center text-xl font-bold">
                  PAYG<br></br>
                  <span className="text-xs text-white font-thin">
                    subscription
                  </span>
                </div>
              </th>
              <th className="border border-white p-3 bg-[#b11116] text-white w-1/4">
                <div className="text-center text-xl font-bold">
                  Call Centre<br></br>
                  <span className="text-xs text-white font-thin">
                    subscription
                  </span>
                </div>
              </th>
              <th className="border border-white p-3 bg-[#ed1c24] text-white w-1/4">
                <div className="text-center text-xl font-bold">
                  Ultimate<br></br>
                  <span className="text-xs text-white font-thin">
                    subscription
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-white p-1"></td>
              <td className="border font-semibold border-white p-1 text-center">
                {/* $&nbsp;<span className="text-2xl">10</span>
                    <p className="text-[8px]">Per Seat/ Month / Extension</p> */}
              </td>
              <td className="border font-semibold border-white text-center p-1">
                {/* $&nbsp;<span className="text-2xl">15</span>
                    <p className="text-[8px]">Per Seat / Month / Extension</p> */}
              </td>
              <td className="border font-semibold border-white text-center p-1">
                $&nbsp;<span className="text-2xl">39</span>
                <p className="text-[8px]">Per Seat / Month / Extension</p>
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">Plan</td>
              <td className="border border-white text-center p-1 w-1/3">
                H200
              </td>
              <td className="border border-white text-center p-1 w-1/3">
                H300
              </td>
              <td className="border border-white text-center p-1 w-1/3">
                H400
              </td>
            </tr>
            <tr className="bg-gray-100 text-red-500">
              <td className="border border-white p-1 ">
                {/* <div className="flex items-center">
                      <div className="px-3">
                        <img
                          src="/images/ring.svg"
                          className="w-4 h-4"
                          alt="call rates"
                        ></img>
                      </div>
                      Call Rates
                    </div> */}
              </td>
              <td className="bg-gray-100 text-center">
                {/* <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100 text-red-500">
                          <td className="border border-white text-center p-1 w-1/3">
                            Rate
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Billed
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flag
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
                <input
                  type="checkbox"
                  checked={selectedCol === "H200"}
                  onChange={() => handleColSelect("H200")}
                  className="form-checkbox w-5 h-5 text-red-500 border-red-500 border-2 border-solid rounded-full"
                />
              </td>
              <td className="bg-gray-100 text-center">
                {/* <table className="w-full border-collapse border border-white">
                      <tr className="bg-gray-100 text-red-500">
                        <td className="border border-white text-center p-1 w-1/3">
                          Rate
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Billed
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Flag
                        </td>
                      </tr>
                    </table> */}
                <input
                  type="checkbox"
                  checked={selectedCol === "H300"}
                  onChange={() => handleColSelect("H300")}
                  className="form-checkbox w-5 h-5 text-red-500 border-red-500 border-2 border-solid rounded-full"
                />
              </td>
              <td className="bg-gray-100 text-center">
                {/* <table className="w-full border-collapse border border-white">
                      <tr className="bg-gray-100 text-red-500">
                        <td className="border border-white text-center p-1 w-1/3">
                          Rate
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Billed
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Flag
                        </td>
                      </tr>
                    </table> */}
                <input
                  type="checkbox"
                  checked={selectedCol === "H400"}
                  onChange={() => handleColSelect("H400")}
                  className="form-checkbox w-5 h-5 text-red-500 border-red-500 border-2 border-solid rounded-full"
                />
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">Local</td>
              <td className="bg-gray-300">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-300">
                      <td className="border border-white text-center p-1 w-1/3">
                        10c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Flat
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-300">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-300">
                      <td className="border border-white text-center p-1 w-1/3">
                        4.9c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        P/sec
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-300 text-center">Unlimited</td>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <td className="border border-white p-1">STD</td>
              <td className="bg-gray-100">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border border-white text-center p-1 w-1/3">
                        10c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Flat
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-100">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border border-white text-center p-1 w-1/3">
                        4.9c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        P/sec
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-100 text-center border">Unlimited</td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">Mobile(Australia)</td>
              <td className="bg-gray-300">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-300">
                      <td className="border border-white text-center p-1 w-1/3">
                        29c/m
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        P/sec
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-300">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-300">
                      <td className="border border-white text-center p-1 w-1/3">
                        29c/m
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        P/sec
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-300 text-center">Unlimited</td>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <td className="border border-white p-1">13/1300</td>
              <td className="bg-gray-100">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border border-white text-center p-1 w-1/3">
                        35c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Flat
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-100">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border border-white text-center p-1 w-1/3">
                        35c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Flat
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td className="bg-gray-100">
                <table className="w-full border-collapse border border-white">
                  <thead></thead>
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="border border-white text-center p-1 w-1/3">
                        35c
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Flat
                      </td>
                      <td className="border border-white text-center p-1 w-1/3">
                        Free
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">1800</td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <td className="border border-white p-1">000 Emergency</td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">Integra On Net</td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-300 text-center border border-white">
                Free
              </td>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <td className="border border-white p-1">Integra Branch</td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Free
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">International</td>
              <td className="bg-gray-300 text-center border border-white">
                From 1.5c
              </td>
              <td className="bg-gray-300 text-center border border-white">
                From 1.5c
              </td>
              <td className="bg-gray-300 text-center border border-white">
                From 1.5c
              </td>
            </tr>
            <tr className="bg-gray-100 text-sm">
              <td className="border border-white p-1">Conditions Of Use</td>
              <td className="bg-gray-100 text-center border border-white">
                Per User Extension
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Per User Extension
              </td>
              <td className="bg-gray-100 text-center border border-white">
                Per User Extension<br></br>Not for all centre
              </td>
            </tr>
            <tr className="bg-gray-300 text-sm">
              <td className="border border-white p-1">GST</td>
              <td
                className="bg-gray-300 text-center border border-white"
                colSpan={3}
              >
                Minimum call charge1c. All Prices are inclusive of GST.
              </td>
            </tr>
            {/* <tr className="bg-gray-100 text-red-500">
                  <td className="border border-white p-1" colSpan={2}>
                    <div className="flex items-center">
                      <div className="px-3">
                        <img
                          src="/images/optional.svg"
                          className="w-4 h-4"
                          alt="call rates"
                        ></img>
                      </div>
                      Optional Products
                    </div>
                  </td>
                  <td className="bg-gray-100">
                    <tr className="bg-gray-100 text-red-500">
                      <td className="border border-white text-center p-1 w-1/3">
                        Plan
                      </td>
                    </tr>
                  </td>
                  <td className="bg-gray-100">
                    <tr className="bg-gray-100 text-red-500">
                      <td className="border border-white text-center p-1 w-1/3">
                        Price
                      </td>
                    </tr>
                  </td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="border border-white p-1" colSpan={2}>
                    <div className="flex items-center text-sm">
                      1300/1800 InBound Number
                    </div>
                  </td>
                  <td className="bg-gray-300 text-center text-sm">V502/V503</td>
                  <td className="bg-gray-300">
                    <td className="border text-center p-1 w-1/3">
                      $ 20<br></br>
                      <span className="text-[10px]">per month</span>
                    </td>
                  </td>
                </tr>

                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 FAX Service + Fax 2 Email
                  </td>
                  <td className="bg-gray-100 text-center">F102</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 20<br></br>
                    <span className="text-[10px]">per month</span>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 SLA Support Service Level Agreement
                  </td>
                  <td className="border border-white text-center">S101</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 5<br></br>
                    <span className="text-[10px]">per month per seat</span>
                  </td>
                </tr>

                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Connection Pack
                    <div>
                      <img src="/images/pack.svg" className="h-10" alt=""></img>
                    </div>
                  </td>
                  <td className="bg-gray-100 text-center">C100</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 39<br></br>
                    <span className="text-[10px]">per month</span>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Hosted CRM
                  </td>
                  <td className="border border-white text-center">H800</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 5<br></br>
                    <span className="text-[10px]">per month per seat</span>
                  </td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Call Center
                  </td>
                  <td className="bg-gray-100 text-center">H700</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 20<br></br>
                    <span className="text-[10px]">per month per user</span>
                  </td>
                </tr> */}
          </tbody>
        </table>
      </div>
        
        <div className="flex flex-col justify-end items-start ml-12">
          <h2 className="text-2xl text-red-500 font-bold">Calling Lines</h2>
          <h2 className="text-xl font-poppins">
            How many calling lines do you want<br></br> with ultimate included call
            value?
          </h2>
          <br></br>
          <div className="text-xl">
            Number of lines &nbsp;
            <span className="border-solid border-2 border-red-500 rounded-md text-red-500 font-bold text-4xl">&nbsp;&nbsp;{numberLines}&nbsp;&nbsp;</span>
            &nbsp; X &nbsp;$ 39 = $ <span className="text-red-500 font-bold text-3xl">{callingLineUltimateCost}</span>
          </div>

          <div className="flex justify-between items-center border border-solid border-gray-300 rounded-2xl mt-5">
            <button
              onClick={() => handleDecrement()}
              className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-700 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
            >
              -
            </button>
            <p className="w-10 text-center text-xl text-red-700 font-bold">
              {numberLines}
            </p>
            <button
              onClick={() => handleIncrement()}
              className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-700 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectYourPlan;
