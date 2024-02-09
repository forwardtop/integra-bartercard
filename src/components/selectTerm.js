import { useContext } from "react";
import { AuthContext } from "../config/AuthContext";

export default function SelectTerm() {


    const {terms, setTerms, upfrontCost, setUpfrontCost} = useContext(AuthContext)
    const handleSelectTerm = (term, cost) => {
        setTerms(term); // Set the selected term when a radio button is clicked
        setUpfrontCost(cost);
      };
  const data = [
    {
      contactTerm: "Month to Month",
      setUpCost: "$249",
      totalSeats: "10",
      upfrontCost: "$2490",
    },
    {
      contactTerm: "12 Months",
      setUpCost: "$199",
      totalSeats: "10",
      upfrontCost: "$1990",
    },
    {
      contactTerm: "24 Months",
      setUpCost: "$149",
      totalSeats: "10",
      upfrontCost: "$1490",
    },
    {
      contactTerm: "36 Months",
      setUpCost: "$99",
      totalSeats: "10",
      upfrontCost: "$990",
    },
    {
      contactTerm: "48 Months",
      setUpCost: "$49",
      totalSeats: "10",
      upfrontCost: "$490",
    },
    {
      contactTerm: "60 Months",
      setUpCost: "$0",
      totalSeats: "10",
      upfrontCost: "$0",
    },
  ];
  return (
    <div className="bg-white px-12">
      <div className="sm:px-6 lg:px-8 lg:flex flex-col">
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border border-solid rounded-full text-white bg-red-500 flex justify-center items-center mr-5">
            <h1 className="font-extrabold font-mono text-sm  md:text-xl lg:text-2xl">
              2
            </h1>
          </div>
          <div className="text-2xl text-gray-500 font-semibold">
            Select your contract term
          </div>
        </div>
        <div className="flex flex-col w-4/5">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className=""></th>
                <th className="text-red-500">
                  Contact Term<p>&nbsp;</p>
                </th>
                <th className="text-red-500">
                  Set up Cost
                  <p className="text-gray-500 font-normal">Per Seat</p>
                </th>
                <th className="text-red-500">
                  Total Seats<p className="text-gray-500 font-normal">Qty</p>
                </th>
                <th className="text-red-500">
                  Set up
                  <p className="text-gray-500 font-normal">Upfront Cost</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="h-12">
                  <td className="text-center text-red-500">
                  <input
                      type="radio"
                      name="terms"
                      value={row.contactTerm}
                      onChange={() => handleSelectTerm(row.contactTerm, row.upfrontCost)}
                      checked={terms === row.contactTerm && upfrontCost === row.upfrontCost}
                      className="form-radio text-red-500 rounded-full"
                    />
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.contactTerm}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.setUpCost}
                    </div>
                  </td>
                  <td className="text-center text-red-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.totalSeats}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.upfrontCost}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
