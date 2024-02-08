// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useState } from "react";
import { AuthContext } from "../config/AuthContext";

export default function Equipment() {
  // const history = useHistory();
  const {
    setTotal,
    setReceptionPhone,
    setCordlessPhone,
    setDesktopPhone,
    setSoftPhone,
  } = useContext(AuthContext);
  const cardsData = [
    {
      title: "Reception Phone",
      imageUrl: `${process.env.PUBLIC_URL}images/tel1.png`,
    },
    {
      title: "Desktop Phone",
      imageUrl: `${process.env.PUBLIC_URL}images/tel2.png`,
    },
    {
      title: "Cordless",
      imageUrl: `${process.env.PUBLIC_URL}images/tel3.png`,
    },
    {
      title: "Softphone",
      imageUrl: `${process.env.PUBLIC_URL}images/tel4.png`,
    },
  ];
  const count = 4;
  const [nTel, setTel] = useState(Array(count).fill(0));

  const total = nTel.reduce((acc, curr) => acc + curr, 0);

  setTotal(total);
  setReceptionPhone(nTel[0]);
  setDesktopPhone(nTel[1]);
  setCordlessPhone(nTel[2]);
  setSoftPhone(nTel[3]);

  const handleDecrement = (index) => {
    setTel((prev) => {
      const updatedTel = [...prev];
      if (updatedTel[index] > 0) {
        updatedTel[index] -= 1;
      }
      return updatedTel;
    });
  };
  const handleIncrement = (index) => {
    setTel((prev) => {
      const updatedTel = [...prev];
      updatedTel[index] += 1;
      return updatedTel;
    });
  };
  // const data = [
  //   {
  //     contactTerm: "Month to Month",
  //     setUpCost: "$249",
  //     totalSeats: "10",
  //     upfrontCost: "$2490",
  //   },
  //   {
  //     contactTerm: "12 Months",
  //     setUpCost: "$199",
  //     totalSeats: "10",
  //     upfrontCost: "$1990",
  //   },
  //   {
  //     contactTerm: "24 Months",
  //     setUpCost: "$149",
  //     totalSeats: "10",
  //     upfrontCost: "$1490",
  //   },
  //   {
  //     contactTerm: "36 Months",
  //     setUpCost: "$99",
  //     totalSeats: "10",
  //     upfrontCost: "$990",
  //   },
  //   {
  //     contactTerm: "48 Months",
  //     setUpCost: "$49",
  //     totalSeats: "10",
  //     upfrontCost: "$490",
  //   },
  //   {
  //     contactTerm: "60 Months",
  //     setUpCost: "$0",
  //     totalSeats: "10",
  //     upfrontCost: "$0",
  //   },
  // ];
  return (
    <div className="bg-white px-12">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-center items-center">
          <div className="w-10 h-10 border border-solid rounded-full text-white bg-red-500 flex justify-center items-center mr-5">
            <h1 className="font-extrabold font-mono text-sm  md:text-xl lg:text-2xl">
              1
            </h1>
          </div>
          <div className="text-2xl text-gray-500 font-semibold">
            Select your equipment
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col items-center border border-solid  rounded-xl  shadow-xl shadow-gray-300 hover:shadow-gray-500 hover:duration-500"
                >
                  <div className="text-sm text-center bg-red-500 border rounded-full py-2 px-4 text-white h-10 leading-[13px] flex items-center ">
                    {card.title}
                  </div>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <div className="flex justify-between items-center border border-solid border-gray-300 rounded-2xl">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
                    >
                      -
                    </button>
                    <p className="w-10 text-center text-xl text-red-500 font-bold">
                      {nTel[index]}
                    </p>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-5 text-gray-500">Details</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/6 flex flex-col justify-end text-center">
            <div className="text-red-500 text-2xl font-extrabold">
              ={total} Seats
            </div>
          </div>
        </div>
        {/* <div className="mt-5 border-t border-gray-300"></div>
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border border-solid rounded-full text-white bg-red-500 flex justify-center items-center mr-5">
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
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => history.push(`/contact`)}
            className="flex items-center justify-center w-44 h-10 rounded-full border bg-red-500 text-white"
          >
            Check Out
          </button>
        </div> */}
      </div>
    </div>
  );
}
