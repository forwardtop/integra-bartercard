import React from "react";
import { HiPlay, HiUser } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import LogoImage from "./../assets/logo.png";
import DropdownMenu from "./menu";
const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  const history = useHistory();

  return (
    <header className="p-4 text-gray-700 bg-white">
      <div className="">
        <div className="lg:flex justify-between">
          <div className="">
            <a href="/" className="min-w-fit flex justify-center">
              <img
                className="h-20 lg:flex lg:h-20"
                src={LogoImage}
                alt="uc8 logo"
              />
            </a>
          </div>
          <div className="mt-5 lg:flex flex justify-center align-center lg:space-x-10 space-x-5">
            <a
              href="/"
              className={`flex items-center ${
                isActive("/login") ? "font-bold text-red-500" : ""
              }`}
            >
              <HiUser
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
              Login
            </a>
            <a
              href="/watchDemo"
              className={`flex items-center ${
                isActive("/watchDemo") ? "font-bold text-red-500" : ""
              }`}
            >
              <HiPlay
                className="w-6 h-6"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
              Watch Demo
            </a>
            <a
              href="/resources"
              className={`flex items-center ${
                isActive("/resources") ? "font-bold text-red-500" : ""
              }`}
            >
              <FaBookOpen
                className="w-6 h-6 mr-2"
                stroke="currentColor"
                fill="none"
                strokeWidth="48"
              />{" "}
              Resources
            </a>
          </div>
          <div className="">
            <div className="flex mt-5 justify-center">
              <button
                onClick={() => history.push(`/request-quote`)}
                className="flex items-center duration-500 justify-center  h-10 p-2 rounded-l-full border hover:bg-red-500 border-red-500 text-red-500 hover:text-white text-sm font-bold"
              >
                Request a Quote
              </button>
              <button
                onClick={() => history.push(`/contact`)}
                className="flex items-center duration-500 justify-center  h-10 p-2 rounded-r-full border hover:bg-red-500 border-red-500 text-red-500 hover:text-white text-sm font-bold"
              >
                Get Connected
              </button>
            </div>
          </div>
        </div>
      </div>
      <DropdownMenu />
    </header>
  );
};

export default Header;
