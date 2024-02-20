import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../config/AuthContext";

function ContactTerm() {
  const {
    total,
    selectedTerm,
    setSelectedTerm,
    selectedSetup,
    setSelectedSetup,
    totalSetup,
    setTotalSetup,
    setDeliveryFee,
    deliveryFee,
    setTotalUpfrontCost,
    setSeatLicense,
    currentNumberCost,
  } = useContext(AuthContext);
  const [selectedRow, setSelectedRow] = useState(null);

  const contractTerms = [
    {
      term: "Months of",
      setup: 249,
      license: 10,
    },
    {
      term: "12",
      setup: 199,
      license: 10,
    },
    {
      term: "24",
      setup: 149,
      license: 10,
    },
    {
      term: "36",
      setup: 99,
      license: 10,
    },
    {
      term: "48",
      setup: 49,
      license: 10,
    },
    {
      term: "60",
      setup: 0,
      license: 10,
    },
  ];

  const handleRowSelect = (index) => {
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      setSelectedRow(index);
      setSelectedTerm(contractTerms[index].term);
      setSelectedSetup(contractTerms[index].setup);
      setDeliveryFee(25);
    }
  };
  useEffect(() => {
    setTotalSetup(total * selectedSetup);
  }, [total, selectedSetup, setTotalSetup]);

  useEffect(() => {
    setTotalUpfrontCost(deliveryFee + totalSetup + currentNumberCost);
  }, [deliveryFee, totalSetup, setTotalUpfrontCost, currentNumberCost]);

  useEffect(() => {
    setSeatLicense(total * 10);
  }, [total, setSeatLicense]);

  return (
    <div className="bg-white text-center">
      <div className="flex justify-start items-center mt-4">
        <img src="/images/3.png" alt="" />
        <h2 className="text-xl font-bold px-3">Choose Your Contract Term</h2>
      </div>
      <div className="lg:min-w-[800px]">
        <div className="overflow-x-auto flex justify-center">
          <table className="lg:w-full border-collapse border border-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-white p-3 text-red-500"></th>
                <th className="border border-white p-3 text-red-500">
                  <div className="flex justify-start items-center text-sm">
                    <img src="/images/term.svg" className="w-5" alt="" />
                    &nbsp; &nbsp;&nbsp;Contract Term
                  </div>
                </th>
                <th className="border border-white p-3 text-sm text-red-500">
                  Setup
                  <br />
                  <span className="text-xs text-gray-900 font-thin">
                    Per Device
                  </span>
                </th>
                <th className="border border-white p-3 text-sm text-red-500">
                  License
                  <br />
                  <span className="text-xs text-gray-900 font-thin">
                    Per Device
                  </span>
                </th>
                <th
                  className="border border-white p-3 text-sm text-red-500"
                  rowSpan={contractTerms.length}
                >
                  Delivery
                  <br />
                  <span className="text-xs text-gray-900 font-thin">
                    Within Australia
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {contractTerms.map((term, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-300" : "bg-gray-100"}
                >
                  <td className="border border-white p-1">
                    <input
                      type="checkbox"
                      checked={selectedRow === index}
                      onChange={() => handleRowSelect(index)}
                      className="form-checkbox text-red-500 border-red-500 rounded-full"
                    />
                  </td>
                  <td className="border border-white p-1">
                    {term.term} Months
                  </td>
                  <td className="border border-white p-1 text-center">
                    ${term.setup}&nbsp;<strong></strong>
                  </td>
                  <td className="border border-white text-center p-1">
                    ${term.license}&nbsp;<strong></strong>
                  </td>
                  {index === 0 && (
                    <td className="" rowSpan={contractTerms.length}>
                      <span>
                        $ <b>25</b>
                      </span>
                      <br />
                      Per Order
                      <br />
                      Per Site Location
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-around items-center mt-5">
          <h2 className="text-red-500 font-extrabold">Contact Term : </h2>
          <h3 className="text-red-500">
            <b>Term</b> = {selectedTerm} Months
          </h3>
          <h3 className="text-red-500">
            <b>Setup</b> = <b>{total}</b> X {selectedSetup} = ${" "}
            <b>{totalSetup}</b>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ContactTerm;
