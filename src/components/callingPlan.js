import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./../components/header";

export default function CallingPlan() {
  const history = useHistory();

  const data = [
    {
      callingPlan: "Pay as you go (PAYG)",
      planCode: "H200",
      priceMonthly: "$10",
      seats: "10",
      seatLicense: "$100",
      callCost: "See call rate",
    },
    {
      callingPlan: "Call Centre",
      planCode: "H300",
      priceMonthly: "$15",
      seats: "10",
      seatLicense: "$150",
      callCost: "See call rate",
    },
    {
      callingPlan: "Unlimited",
      planCode: "H400",
      priceMonthly: "$39",
      seats: "10",
      seatLicense: "$390",
      callCost: "Included",
    },
  ];
  return (
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center py-5">
          <div className="w-10 h-10 border border-solid rounded-full text-white bg-[#56077c] flex justify-center items-center mr-5">
            <h1 className="font-extrabold font-mono text-sm  md:text-xl lg:text-2xl">
              5
            </h1>
          </div>
          <div className="text-2xl text-gray-500 font-semibold">
            Select your calling plan
          </div>
        </div>
        <div className="flex flex-col">
          <table className="min-w-full overflow-x-auto">
            <thead>
              <tr>
                <th className=""></th>
                <th className="text-[#a020ef]">
                  Calling Plan<p>&nbsp;</p>
                </th>
                <th className="text-[#a020ef]">
                  Plan<p className="text-gray-500 font-normal">Code</p>
                </th>
                <th className="text-[#a020ef]">
                  Price Monthly
                  <p className="text-gray-500 font-normal">Per Seat</p>
                </th>
                <th className="text-[#a020ef]">
                  Seats<p>&nbsp;</p>
                </th>
                <th className="text-[#a020ef]">
                  Seat License
                  <p className="text-gray-500 font-normal">Per month</p>
                </th>
                <th className="text-[#a020ef]">
                  Call Cost<p>&nbsp;</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="h-12">
                  <td className="text-center text-[#a020ef]">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      O
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.callingPlan}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.planCode}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.priceMonthly}
                    </div>
                  </td>
                  <td className="text-center text-[#a020ef]">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.seats}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.seatLicense}
                    </div>
                  </td>
                  <td className="text-center text-gray-500">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                      {row.callCost}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 flex flex-col justify-around lg:flex-row">
            <div className="sm">
                <img  src={`${process.env.PUBLIC_URL}images/plan.png`}   alt="Calling Plan" className="object-contain mb-4"  /> 
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex">
                    <button
                        onClick={() => history.push(`/`)}
                        style={{ borderRadius: "1.75rem" }}
                        className="flex items-center justify-center w-44 h-10 rounded-full border border-[#a020ef] bg-white text-[#a020ef] mr-5"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => history.push(`/optionalProducts`)}
                        style={{ borderRadius: "1.75rem" }}
                        className="flex items-center justify-center w-44 h-10 rounded-full border bg-[#a020ef] text-white"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
        
      </div>
      
    </div>
  );
}
