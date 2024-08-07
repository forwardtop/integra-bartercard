import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";

const BreadCrumbsBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  console.log(location.pathname)
  const pageNames = {
    "products": "Products",
    "watchDemo": "Watch Demo",
    "resources": "Resources",
    "solution": "Solutions",
    "request-quote": "Request a quote",
    "why": "WHY UC8",
    "faq": "FAQ",
    "shop": "Shop",
    "pricing": "Pricing & Plans",
    "contact": "Contact Us",
    "order-process": "Order Process",
    // Add more as needed
  };

  return (
    <div className="flex justify-center items-center h-12 border border-solid border-b-gray-300 border-t-gray-300 bg-[#87acc7]">
      <div className="w-2/3">
        <Breadcrumbs className="text-white space-x-3">
            <a href="/" className="flex items-center justify-between space-x-3 text-white hover:text-red-500 duration-300 hover:bg-transparent">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <p className="text-white hover:text-red-500 duration-300">Home&nbsp;&nbsp;&nbsp;</p>
            </a>
            {pathnames.map((name, index) => (
              <span key={name} >
                <a href={`/${pathnames.slice(0, index + 1).join("/")}`} className="text-white hover:text-red-500 duration-300 hover:bg-transparent">
                  {pageNames[name] || name}
                </a>
              </span>
            ))}
          </Breadcrumbs>
      </div>
    </div>
  );
};

export default BreadCrumbsBar;
