import React from "react";
import logoSrc from "./../assets/Bartercard_logo.jpg";

// This component takes two props: title and logoSrc
const BarterCardLogo = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Centered title */}
      <h1 className="text-[#a6ce37] text-4xl mx-auto">
        Use Bartercard for your communication needs
      </h1>
      {/* Logo image on the right */}
      <img
        src={logoSrc}
        alt="Logo"
        className="w-24 h-24 object-contain ml-auto"
      />
    </div>
  );
};

export default BarterCardLogo;
