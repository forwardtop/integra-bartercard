import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LogoImage from "./../assets/logo.png";
export default function Menu() {
  const productItemsData = [
    {
      title: "Phone",
      submenu: [
        { title: "Business Cloud PBX", url: "business-cloud-pbx" },
        { title: "Soft Phones", url: "soft-phones" },
        { title: "Geo Numbers", url: "geo-numbers" },
        { title: "Voice Recordings", url: "voice-recordings" },
        { title: "National 1300/1800 ", url: "national 1300/1800" },
        { title: "Hardware", url: "hardware" },
      ],
    },
    {
      title: "Internet",
      submenu: "internet",
    },
    {
      title: "Mobile",
      submenu: "mobile",
    },
    {
      title: "Hosting",
      submenu: "hosting",
    },
    {
      title: "Marketing",
      submenu: "marketing",
    },
    {
      title: "Security",
      submenu: "security",
    },
    {
      title: "Offline Photo Copiers",
      submenu: "offline-photo-copiers",
    },
    {
      title: "Computer Hardware",
      submenu: "computer-hardware",
    },
    {
      title: "Energy",
      submenu: "energy",
    },
    {
      title: "Finance",
      submenu: "finance",
    },
    {
      title: "Networking",
      submenu: "networking",
    },
    {
      title: "Support",
      submenu: "support",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex items-center">
      <div className="w-2/12">
        <a href="/" className="min-w-fit">
          <img className="lg:flex lg:h-20" src={LogoImage} alt="uc8 logo" />
        </a>
      </div>
      <div className="w-10/12 flex justify-center">
        <div>
          <ul className="hidden lg:flex xl:space-x-8 lg:space-x-4 mt-4">
            <li className="flex justify-center items-center relative">
              <div className="mx-auto flex w-full items-center justify-center">
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-between space-x-1 bg-white">
                    <a
                      href="/products"
                      className={`menu-hover text-base font-medium ${
                        isActive("/products") ? "text-red-500" : "text-gray-500"
                      }`}
                    >
                      Products
                    </a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div className="invisible text-sm absolute z-50 flex w-48 flex-col text-gray-800 shadow-xl group-hover:visible bg-white">
                    {productItemsData.map((item, index) => (
                      <p
                        key={index}
                        className="my-2 block border-b py-1 font-semibold text-gray-500 hover:text-red-500 md:mx-2"
                      >
                        {item.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a
                href="/solution"
                className={`${
                  isActive("/solution") ? "font-bold text-red-500" : ""
                }`}
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="/why"
                className={`${
                  isActive("/why") ? "font-bold text-red-500" : ""
                }`}
              >
                Why UC8
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className={`${
                  isActive("/faq") ? "font-bold text-red-500" : ""
                }`}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className={`${
                  isActive("/pricing") ? "font-bold text-red-500" : ""
                }`}
              >
                Pricing & Plans
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className={`${
                  isActive("/shop") ? "font-bold text-red-500" : ""
                }`}
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`${
                  isActive("/contact") ? "font-bold text-red-500" : ""
                }`}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className={`${
                  isActive("/about-us") ? "font-bold text-red-500" : ""
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/bartercard"
                className={`${
                  isActive("/bartercard") ? "font-bold text-red-500" : ""
                }`}
              >
                BarterCard
              </a>
            </li>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl hover:text-red-500"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center text-white">
            <a
              href="/products"
              className={`text-2xl mb-5 ${
                isActive("/products") ? "font-bold text-red-500" : ""
              }`}
            >
              Products
            </a>
            {productItemsData.map((item, index) => (
              <a
                key={index}
                href={`/product/${item.url}`}
                className="py-1 font-semibold text-gray-500 hover:text-red-500 md:mx-2"
              >
                {item.title}
              </a>
            ))}
            <a
              href="/solution"
              className={`text-2xl mb-5 ${
                isActive("/solution") ? "font-bold text-red-500" : ""
              }`}
            >
              Solutions
            </a>
            <a
              href="/why"
              className={`text-2xl mb-5 ${
                isActive("/why") ? "font-bold text-red-500" : ""
              }`}
            >
              Why UC8
            </a>
            <a
              href="/faq"
              className={`text-2xl mb-5 ${
                isActive("/faq") ? "font-bold text-red-500" : ""
              }`}
            >
              FAQ
            </a>
            <a
              href="/pricing"
              className={`text-2xl mb-5 ${
                isActive("/pricing") ? "font-bold text-red-500" : ""
              }`}
            >
              Pricing & Plans
            </a>
            <a
              href="/shop"
              className={`text-2xl mb-5 ${
                isActive("/shop") ? "font-bold text-red-500" : ""
              }`}
            >
              Shop
            </a>

            <a
              href="/contact"
              className={`text-2xl mb-5 ${
                isActive("/contact") ? "font-bold text-red-500" : ""
              }`}
            >
              Contact
            </a>
            <a
              href="/about-us"
              className={`text-2xl mb-5 ${
                isActive("/about-us") ? "font-bold text-red-500" : ""
              }`}
            >
              About Us
            </a>
            <a
              href="/bartercard"
              className={`text-2xl mb-5 ${
                isActive("/bartercard") ? "font-bold text-red-500" : ""
              }`}
            >
              BarterCard
            </a>
          </div>
        </div>
      )}

      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
