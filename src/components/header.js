import React from "react";
import { HiPlay, HiUser } from 'react-icons/hi';
import { FaBookOpen } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import Menu from "./menu";

const Header = () => {

  const location = useLocation();



  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="p-4 text-gray-700 bg-white">
      <div className="flex justify-center md:justify-end">
        <div className="flex space-x-3 lg:space-x-10 mx-40">
          <a href="/" className={`flex items-center ${isActive("/login") ? "font-bold text-red-500" : ""}`}>
            <HiUser className="w-6 h-6 mr-2" stroke="currentColor" fill="none" strokeWidth="2"/> Login
          </a>
          <a href="/watchDemo" className={`flex items-center ${isActive("/watchDemo") ? "font-bold text-red-500" : ""}`}>
            <HiPlay className="w-6 h-6 mr-2" stroke="currentColor" fill="none" strokeWidth="2" /> Watch Demo
          </a>
          <a href="/resources" className={`flex items-center ${isActive("/resources") ? "font-bold text-red-500" : ""}`}>
            <FaBookOpen  className="w-6 h-6 mr-2" stroke="currentColor" fill="none" strokeWidth="48" /> Resources
          </a>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
