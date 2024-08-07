import React from "react";
import logoSrc from "./../assets/Bartercard_logo.jpg"; // Assuming you have a logo image
import BarterCardTable from "./bartercardTable";

const BarterCard = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Title Section */}
      <div className="flex justify-center">
        <img src={logoSrc} alt="Logo" className="w-1/3 mr-4" />
      </div>
      <h1 className="mt-5 text-4xl text-[#91b828] text-center">
        Program Details
      </h1>
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <BarterCardTable />
        <h2 className="text-2xl text-[#91b828] mb-4">
          How to Use Your Bartercard Digital Currency
        </h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 leading-6">
          <li>
            <strong>Select Products and Services:</strong> Choose one or more
            products and services from UC8 Australia, Integra One, or Positive
            Business Online.
          </li>
          <li>
            <strong>Choose a Commitment Period:</strong> Decide on the length of
            the commitment period for which you want to use these products and
            services. The commitment period can be up to a maximum of 60 months.
          </li>
          <li>
            <strong>Prepay Using Digital Currency:</strong> You can prepay for a
            portion of the commitment period using your digital currency. This
            prepayment can be for up to 10 months' worth of service within your
            chosen commitment period.
          </li>
          <li>
            <strong>Account Credit:</strong> Your account will be credited for
            the prepaid months. Once the prepaid period ends, you will need to
            pay the remaining balance of the commitment period using traditional
            payment methods such as bank transfer or credit card.
          </li>
        </ol>
        <h2 className="text-2xl text-[#91b828] mt-8 mb-4">Example</h2>
        <p className="mb-4">Let’s break down the example given:</p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>
            <strong>Selected Plan:</strong> NB504 (Internet NBN100)
          </li>
          <li>
            <strong>Monthly Cost:</strong> $99
          </li>
          <li>
            <strong>Commitment Period:</strong> 60 months
          </li>
          <li>
            <strong>Prepaid Months:</strong> 10 months
          </li>
          <li>
            <strong>Upfront Payment by Digital Currency:</strong> $990 (10
            months x $99)
          </li>
        </ul>
        <h2 className="text-2xl text-[#a6ce37] mt-8 mb-4">How It Works</h2>
        <ol className="list-decimal pl-5 space-y-4 text-gray-700 leading-6">
          <li>
            <strong>Initial Prepayment:</strong> You decide to commit to a
            60-month plan for the Internet NBN100 service. The monthly cost is
            $99.
          </li>
          <li>
            <strong>Prepayment with Digital Currency:</strong> You prepay for 10
            months using your digital currency. This means you pay $990 upfront
            (10 months x $99).
          </li>
          <li>
            <strong>Account Credit:</strong> Your account is credited for the
            first 10 months of service.
          </li>
          <li>
            <strong>Remaining Balance:</strong> After the 10 prepaid months, you
            will need to pay the remaining 50 months of the 60-month commitment
            period. These payments can be made using a bank transfer or credit
            card on a monthly basis or as per any other agreed-upon schedule.
          </li>
        </ol>
        <h2 className="text-2xl text-[#91b828] mt-8 mb-4">Summary</h2>
        <p className="text-base leading-6 text-gray-700">
          This program allows you to leverage your digital currency for part of
          your payment commitment, making the initial period more affordable and
          manageable while still adhering to the agreed-upon terms for the
          remainder of the contract.
        </p>
      </div>
    </div>
  );
};

export default BarterCard;
