// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext, useEffect, useState } from "react";
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
      title: "Executive Phone",
      imageUrl: `${process.env.PUBLIC_URL}images/telephone.png`,
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

  useEffect(() => {
    setTotal(nTel.reduce((acc, curr) => acc + curr, 0));
    setReceptionPhone(nTel[0]);
    setDesktopPhone(nTel[1]);
    setCordlessPhone(nTel[2]);
    setSoftPhone(nTel[3]);
  }, [nTel, setTotal, setReceptionPhone, setDesktopPhone, setCordlessPhone, setSoftPhone]);

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
  return (
    <div>
      <div className="mx-auto sm:px-1 lg:max-w-7xl lg:px-8">
        <div className="flex justify-start items-center">
            <img src="/images/2.png" alt=""></img>
            <h2 className="text-xl font-bold px-3">Select your equipment</h2>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-5/6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="p-4 flex flex-col items-center border border-solid  rounded-xl  shadow-xl shadow-gray-300 hover:shadow-gray-500 hover:duration-500"
                >
                  <div className="bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-1 rounded-2xl text-xs">
                    {card.title}
                  </div>
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-32 h-32 object-contain mb-4"
                  />
                  <div className="flex justify-between items-center border border-solid border-gray-300 rounded-2xl w-5/6">
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
              =  {nTel.reduce((acc, curr) => acc + curr, 0)} Seats
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
