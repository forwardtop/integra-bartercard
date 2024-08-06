import React, { useState } from "react";

const cardsData = [
  {
    title: "Why Us?",
    description:
      "For over 25 years UC8 technologies R&D department and engineers have developed and refined one of the world’s most powerful business phone system platforms. UC8 is powerful and highly affordable.",
  },
  {
    title: "Saving",
    description:
      "As UC8 IPPBX is a hosted platform, you do not need to buy expensive on-premise phone system hardware. With UC8 you can connect with as little as one telephone extension, simply add phone extensions as and when you need. No more expensive calling lines with “UC8 multi-line” this means you can receive multiple inbound and outbound calls simultaneously rather than restricted line-based systems, you are only limited by the size of your Internet connection.",
  },
  {
    title: "Why Us?",
    description:
      "For over 25 years UC8 technologies R&D department and engineers have developed and refined one of the world’s most powerful business phone system platforms. UC8 is powerful and highly affordable.",
  },
  {
    title: "Why Us?",
    description:
      "For over 25 years UC8 technologies R&D department and engineers have developed and refined one of the world’s most powerful business phone system platforms. UC8 is powerful and highly affordable.",
  },
];

const Why = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const handleReadMoreClick = (index) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <div className="text-center lg:px-24 mt-8 lg:mt-0">
      <h2 className="font-bold text-4xl">Why UC8</h2>
      <p className="mt-2 text-xl">
        Connect and grow your business on a platform you can trust.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md transition-transform duration-500 cursor-pointer transform hover:scale-105 hover:shadow-lg"
          >
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <div
              className={`text-gray-600 px-3 ${
                expandedCardIndex === index
                  ? "max-h-full"
                  : "max-h-24 overflow-hidden"
              }`}
            >
              {card.description}
            </div>
            <div className="flex justify-center">
              <button
                className="text-red-500 mt-2 block hover:underline focus:outline-none"
                onClick={() => handleReadMoreClick(index)}
              >
                {expandedCardIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
