import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const cardsData = [
  {
    title: "Reception Phone",
    imageUrl: `${process.env.PUBLIC_URL}images/tel1.png`,
  },
  {
    title: "Executive Phone",
    imageUrl: `${process.env.PUBLIC_URL}images/tel2.png`,
  },
  {
    title: "Cordless Phone",
    imageUrl: `${process.env.PUBLIC_URL}images/tel3.png`,
  },
  {
    title: "Softphone",
    imageUrl: `${process.env.PUBLIC_URL}images/tel4.png`,
  },
];
const count = 4;
const CheckOut = () => {
  const [nTel, setTel] = useState(Array(count).fill(0));

  const handleDecrement = (index) => {
    setTel((prev) => {
      const updatedTel = [...prev];
      if (updatedTel[index] > 0) {
        updatedTel[index] -= 1;
      }
      return updatedTel;
    });
  };
  const [nLine, setLine] = useState(0);

  const handleIncrement = (index) => {
    setTel((prev) => {
      const updatedTel = [...prev];
      updatedTel[index] += 1;
      return updatedTel;
    });
  };
  const SelectTermList = [
    {
      ContactTerm: "Month",
      PBX: "$249",
    },
    {
      ContactTerm: "12 Months",
      PBX: "$199",
    },
    {
      ContactTerm: "24 Months",
      PBX: "$149",
    },
    {
      ContactTerm: "36 Months",
      PBX: "$99",
    },
    {
      ContactTerm: "48 Months",
      PBX: "$49",
    },
    {
      ContactTerm: "60 Months",
      PBX: "$0",
    },
  ];
  const [TotalCallCost, setTotalCallCost] = useState(0);
  useEffect(() => {
    setTotalCallCost(nLine * 39);
  }, [nLine]);

  const [nIndexTerm, setIndexTerm] = useState(0);
  const history = useHistory();
  const handleNextClick = () => {
    const selectedDeviceCount = nTel;
    const selectedTerm = SelectTermList[nIndexTerm];
    const numberOfLines = nLine;

    const parseData = {
      selectedDeviceCount: selectedDeviceCount,
      selectedTerm: selectedTerm,
      numberOfLines: numberOfLines,
    };
    history.push(
      `/contact?PBXData=${encodeURIComponent(JSON.stringify(parseData))}`
    );
  };
  return (
    <div className="px-48">
      {/* 1 | Select Device */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div
          className="w-full md:w-3/4 p-4 border border-red-500"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="-mt-4 -ml-4 w-44 rounded-full border-2 border-red-500 hover:border-red-500 text-white bg-red-500 text-lg font-bold px-4 py-2">
            1 | Select Device
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
            {cardsData.map((card, index) => (
              <div key={index} className="p-4 flex flex-col items-center border border-solid border-red-200 rounded-xl  shadow-xl shadow-gray-300 hover:shadow-gray-500 hover:duration-500">
                <div className="text-base text-center border border-red-200 rounded-full py-2 px-4 text-gray-500">
                  {card.title}
                </div>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-32 h-32 object-contain mb-4"
                />
                <div className="flex justify-between items-center w-1/2 border border-solid border-gray-300 rounded-2xl">
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
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/4 p-4 relative flex border border-red-500 flex-col justify-center lg:border-l-0 sm:border-l-0 md:border-l-0"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="flex justify-center align-middle items-center">
            <div className="flex flex-col justify-center items-end h-full">
              <h2 className="text-xl font-bold mb-4 text-red-500">
                Equipment & Seats
              </h2>
              <p className="text-gray-500 text-lg">
                Reception Phone{" "}
                <span className="text-red-500 text-lg font-bold">
                  {nTel[0]}
                </span>
              </p>
              <p className="text-gray-500 text-lg">
                Executive Phone{" "}
                <span className="text-red-500 text-lg font-bold">
                  {nTel[1]}
                </span>
              </p>
              <p className="text-gray-500 text-lg">
                Cordless Phone{" "}
                <span className="text-red-500 text-lg font-bold">
                  {nTel[2]}
                </span>
              </p>
              <p className="text-gray-500 text-lg">
                Softphone{" "}
                <span className="text-red-500 text-lg font-bold">
                  {nTel[3]}
                </span>
              </p>
              <br />
              <p className="text-gray-500 text-xl">
                <b>Total Equipment</b>:{" "}
                <span className="text-red-500 text-xl font-bold">
                  {nTel[0] + nTel[1] + nTel[2] + nTel[3]}
                </span>
              </p>
              <p className="text-gray-500 text-xl">
                <b>Total Seat Licence(s)</b>:{" "}
                <span className="text-red-500 text-xl font-bold">
                  {nTel[0] + nTel[1] + nTel[2] + nTel[3]}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 | Select Term */}
      <div className=" mt-12 flex flex-col md:flex-row">
        {/* Left Section */}
        <div
          className="w-full md:w-3/4 p-4 border border-red-500"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="-mt-4 -ml-4 w-44 rounded-full border-2 border-red-500 hover:border-red-500 text-white bg-red-500 text-lg font-bold px-4 py-2">
            2 | Select Term
          </div>
          <div className="mt-8 w-full h-3/5 flex flex-row justify-center items-center">
            <div className="lg:w-1/6 flex items-center flex-col justify-start">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row justify-start items-center w-full border-solid border-white h-5 rounded-none border-r-2 border-l-2 border-t-0 border-b-0"></div>
                <button
                  onClick={() => {
                    setIndexTerm(0);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${ nIndexTerm === 0 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 0 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 0 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center hidden md:block`}
              >
                <b>Month</b>
                <br />
                To month
              </p>
              <p
                className={`text-${
                  nIndexTerm === 0 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center block md:hidden`}
              >
                <b>1</b>
                <br />
                Month
              </p>
              <Divider
                className="text-gray-500 border mt-1"
                style={{ width: "70%" }}
              />
              <p
                className={`text-${
                  nIndexTerm === 0 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${249}
              </p>
            </div>
            <div className="lg:w-1/6 flex justify-start items-center flex-col">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
                <button
                  onClick={() => {
                    setIndexTerm(1);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${
                    nIndexTerm === 1 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 1 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 1 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center`}
              >
                <b>12</b>
                <br />
                Months
              </p>
              <Divider
                className="text-gray-500 border mt-1"
                style={{ width: "130%" }}
              />
              <p
                className={`text-${
                  nIndexTerm === 1 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${199}
              </p>
            </div>
            <div className="lg:w-1/6 flex items-center flex-col justify-start">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
                <button
                  onClick={() => {
                    setIndexTerm(2);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${
                    nIndexTerm === 2 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 2 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 2 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center`}
              >
                <b>24</b>
                <br />
                Months
              </p>
              <Divider
                className="text-gray-500 border mt-1"
                style={{ width: "70%" }}
              />
              <p
                className={`text-${
                  nIndexTerm === 2 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${149}
              </p>
            </div>
            <div className="w-1/6 flex justify-start items-center flex-col">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
                <button
                  onClick={() => {
                    setIndexTerm(3);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${
                    nIndexTerm === 3 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 3 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 3 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center`}
              >
                <b>36</b>
                <br />
                Months
              </p>
              <Divider
                className="text-gray-500 border mt-1"
                style={{ width: "130%" }}
              />
              <p
                className={`text-${
                  nIndexTerm === 3 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${99}
              </p>
            </div>
            <div className="lg:w-1/6 flex items-center flex-col justify-start">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
                <button
                  onClick={() => {
                    setIndexTerm(4);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${
                    nIndexTerm === 4 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 4 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 4 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center`}
              >
                <b>48</b>
                <br />
                Months
              </p>
              <Divider
                className="text-gray-500 border mt-1"
                style={{ width: "70%" }}
              />
              <p
                className={`text-${
                  nIndexTerm === 4 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${49}
              </p>
            </div>
            <div className="lg:w-1/6 flex items-center flex-col justify-start">
              <div className="flex flex-row items-center w-full">
                <div className="flex flex-row items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-gray-500 h-5"></div>
                <button
                  onClick={() => {
                    setIndexTerm(5);
                  }}
                  className={`h-14 w-12 border border-solid rounded-2xl border-${
                    nIndexTerm === 5 ? "red-500" : "gray-500"
                  } bg-${nIndexTerm === 5 ? "red-500" : "white"}`}
                />
                <div className="flex flex-row justify-start items-center w-full border-r-0 border-l-0 border-t border-b border-solid rounded-none border-white h-5"></div>
              </div>
              <p
                className={`text-${
                  nIndexTerm === 5 ? "red-500" : "gray-500"
                } text-base p-0 mt-5 text-center`}
              >
                <b>60</b>
                <br />
                Months
              </p>
              <div className="flex flex-row" style={{ width: "130%" }}>
                <Divider
                  className="text-gray-500 border mt-1"
                  style={{ width: "70%" }}
                />
                <Divider
                  className="text-gray-500 border mt-1"
                  style={{ width: "0%" }}
                />
              </div>

              <p
                className={`text-${
                  nIndexTerm === 5 ? "red-500" : "gray-500"
                } text-xl p-0 mt-2 text-center font-bold`}
              >
                ${0}
              </p>
            </div>
          </div>
          <p className="text-gray-500 text-lg p-0 mt-3 text-center">
            Hardware Programming Cost Per UC8 Seat/Device ( One Off Cost )
          </p>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/4 p-4 relative flex border border-red-500 flex-col justify-center lg:border-l-0 sm:border-l-0 md:border-l-0"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="flex justify-center align-middle items-center">
            <div className="flex flex-col justify-center items-end h-full">
              <p className="text-red-500 text-xl font-bold">Upfront Cost</p>
              <p className="text-gray-500 text-lg">
                Programming
                <span className="text-red-500 font-bold text-lg"> ${990}</span>
              </p>
              <p className="text-gray-500 text-lg">
                Hardware
                <span className="text-red-500 font-bold text-lg"> ${0}</span>
              </p>
              <p className="text-gray-500 text-lg">
                Delivery Fee
                <span className="text-red-500 font-bold text-lg"> ${25}</span>
              </p>
              <p className="text-red-500  text-xl font-bold mt-5">
                Monthly Cost
              </p>
              <p className="text-gray-500 text-lg">
                Contact Term
                <span className="text-red-500 font-bold text-lg">
                  {" "}
                  {SelectTermList[nIndexTerm].ContactTerm}
                </span>
              </p>
              <p className="text-gray-500 text-lg">
                UC8 Hosted PBX
                <span className="text-red-500 font-bold text-lg">
                  {" "}
                  {SelectTermList[nIndexTerm].PBX}
                </span>
              </p>
              <p className="text-gray-500 text-lg">
                UC8 Seat Licence(s)
                <span className="text-red-500 font-bold text-lg"> ${100}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 | Select Lines */}
      <div className=" mt-12 flex flex-col md:flex-row">
        {/* Left Section */}
        <div
          className="w-full md:w-3/4 p-4 border border-red-500"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="-mt-4 -ml-4 w-44 rounded-full border-2 border-red-500 hover:border-red-500 text-white bg-red-500 text-lg font-bold px-4 py-2">
            3 | Select Lines
          </div>
          <div className=" flex  flex-col lg:flex-row justify-center align-middle w-full p-4">
            <div className="flex-col justify-center align-middle items-center">
              <img
                src={`${process.env.PUBLIC_URL}images/line.png`}
                alt=""
                className="w-44 h-44 object-contain mb-4 ml-5"
              />
              <div className="w-32 flex justify-between items-center border-2 border-solid border-gray-300 rounded-2xl">
                <button
                  onClick={() => {
                    setLine((prev) => (prev <= 0 ? 0 : prev - 1));
                  }}
                  className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
                >
                  -
                </button>
                <p className="w-10 text-center text-red-500 font-bold text-xl">
                  {nLine}
                </p>
                <button
                  onClick={() => {
                    setLine((prev) => (prev < 1 ? 1 : prev + 1));
                  }}
                  className="flex items-center justify-center w-7 h-7 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white"
                >
                  +
                </button>
              </div>
            </div>
            <div className=" w-full md:w-3/4 p-4 flex flex-col justify-center items-center h-full">
              <div className="text-gray-500 w-full p-4 flex flex-col justify-center items-center h-full text-lg">
                <ul>
                  <li>
                    •&nbsp;&nbsp;&nbsp;Select the number of calling lines.
                  </li>
                  <br />
                  <li>
                    •&nbsp;&nbsp;&nbsp;Each calling line cost $39 per month{" "}
                  </li>
                  <br />
                  <li>
                    •&nbsp;&nbsp;&nbsp;Each calling line includes unlimited
                    telephone calls within Australia*{" "}
                  </li>
                  <br />
                  <li>•&nbsp;&nbsp;&nbsp;Fair use policy applies. </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="w-full md:w-1/4 p-4 relative flex border border-red-500 flex-col justify-center lg:border-l-0 sm:border-l-0 md:border-l-0"
          style={{ borderRadius: "1.75rem" }}
        >
          <div className="flex justify-center align-middle items-center">
            <div className="flex flex-col justify-center h-full">
              <div
                sx={{
                  height: "50%",
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "end",
                }}
              >
                <p className="text-red-500 text-xl">
                  <b>Monthly Cost</b>
                </p>
                <p className="text-gray-500 text-lg mt-3">
                  Calling Lines
                  <span className="text-red-500 font-bold text-lg">
                    {" "}
                    {nLine}
                  </span>
                </p>
                <p className="text-gray-500 text-lg mt-3">
                  Total Call Cost
                  <span className="text-red-500 font-bold text-lg">
                    {" "}
                    ${TotalCallCost}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 ml-5 justify-center align-middle items-center">
        <button
          onClick={handleNextClick}
          style={{ borderRadius: "1.75rem" }}
          className="mb-44 flex items-center justify-center w-44 h-10 rounded-full border bg-red-500 hover:bg-white hover:text-red-500 hover:border-red-500 text-white text-lg font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
