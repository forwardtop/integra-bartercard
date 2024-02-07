import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./../components/header";

export default function OptionalProducts() {
  const history = useHistory();

  const data = [
    {
        callingPlan: "1300 Number",
        planCode: "V502",
        monthlySubscription: "$20",
        productInformation: "",
    },
    {
        callingPlan: "1800 Number",
        planCode: "V503",
        monthlySubscription: "$20",
        productInformation: "",
    },
    {
        callingPlan: "100 Number Range",
        planCode: "H400",
        monthlySubscription: "$39",
        productInformation: "",
    },
    {
        callingPlan: "Fax 2 Email",
        planCode: "F102",
        monthlySubscription: "$20",
        productInformation: "",
    },
    {
        callingPlan: "UC8 Connection Pack",
        planCode: "C100",
        monthlySubscription: "$39",
        productInformation: "",
    },
    {
        callingPlan: "UC8 SLA Support Agreement",
        planCode: "S100",
        monthlySubscription: "$5 per seat",
        productInformation: "",
    },
    {
        callingPlan: "Internet VoIP Tail",
        planCode: "B500",
        monthlySubscription: "$70",
        productInformation: "",
    },
    {
        callingPlan: "Single Telephone Number",
        planCode: "V101",
        monthlySubscription: "$10",
        productInformation: "",
    },
  ];
  return (
    <div className="bg-white">
      <Header />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center py-5">
          <div className="w-10 h-10 border border-solid rounded-full text-white bg-[#56077c] flex justify-center items-center mr-5">
            <h1 className="font-extrabold font-mono text-sm  md:text-xl lg:text-2xl">
              6
            </h1>
          </div>
          <div className="text-2xl text-gray-500 font-semibold">
            Optional Products
          </div>
        </div>
        <div className="flex flex-col w-4/5">
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
                  Monthly
                  <p className="text-gray-500 font-normal">Subscription</p>
                </th>
                <th className="text-[#a020ef]">
                  Product
                  <p className="text-gray-500 font-normal">Information</p>
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
                      {row.monthlySubscription}
                    </div>
                  </td>
                  <td className="text-center text-[#a020ef]">
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } h-12 flex items-center justify-center`}
                    >
                        <div className="w-7 h-7 border border-solid rounded-full text-white bg-[#a020ef] flex justify-center items-center mr-5">
                            <div className="font-semibold font-mono text-sm  md:text-xl lg:text-2xl">
                            I
                            </div>
                        </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-10 flex flex-col justify-around lg:flex-row">
            <div className="flex flex-col justify-end">
                <div className="flex justify-end">
                    <button
                        onClick={() => history.push(`/`)}
                        style={{ borderRadius: "1.75rem" }}
                        className="flex items-center justify-center w-44 h-10 rounded-full border border-[#a020ef] bg-white text-[#a020ef] mr-5"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => history.push(`/summary`)}
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
