import React, { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Menu() {
  const productItemsData = [
    {
      title: "Phone",
      submenu: [
        { title: "Business Cloud PBX", url: "business-cloud-pbx" },
        { title: "Soft Phones", url: "soft-phones" },
        { title: "Geo Numbers", url: "geo-numbers" },
        { title: "Voice Recordings", url: "voice-recordings" },
        { title: "National 1300/1800", url: "national-1300-1800" },
        { title: "Hardware", url: "hardware" },
      ],
    },
    {
      title: "Internet",
      submenu: [
        { title: "NBN", url: "nbn" },
        { title: "LTE", url: "lte" },
        { title: "3G/4G", url: "3g-and-4g" },
        { title: "Private Fibre", url: "private-fibre" },
        {
          title: "Fibre over Fixed Wireless",
          url: "fibre-over-fixed-wireless",
        },
        { title: "Hardware", url: "internet-hardware" },
      ],
    },
    {
      title: "Mobile",
      submenu: [
        { title: "Phone Plans", url: "phone-plans" },
        { title: "Mobile Data", url: "mobile-data" },
        { title: "Hardware", url: "mobile-hardware" },
      ],
    },
    {
      title: "Hosting",
      submenu: [
        { title: "Domain Name Hosting", url: "domain-name-hosting" },
        { title: "Web Hosting", url: "web-hosting" },
        { title: "Email Hosting", url: "email-hosting" },
        { title: "Website Maintenance", url: "website-maintenance" },
      ],
    },
    {
      title: "Marketing",
      submenu: [
        { title: "SEO", url: "seo" },
        { title: "Social Media", url: "social-media" },
        { title: "Video Media Packs", url: "video-media-packs" },
        { title: "Website Development", url: "website-development" },
        { title: "Logo Branding", url: "logo-branding" },
      ],
    },
    {
      title: "Security",
      submenu: [
        { title: "Off-Site Back Ups", url: "off-site-backups" },
        { title: "Alarm Systems", url: "alarm-systems" },
        { title: "Alarm Monitoring", url: "alarm-monitoring" },
        { title: "Video Camera System", url: "video-camera-system" },
        { title: "AntiVirus", url: "antivirus" },
        { title: "Switching and Routing", url: "switching-routing" },
      ],
    },
    {
      title: "Offline Photo Copiers",
      submenu: [
        { title: "Computers", url: "computers" },
        { title: "Notebooks", url: "notebooks" },
        { title: "Server Computers", url: "server-computers" },
        { title: "Printers", url: "printers" },
        { title: "UPS", url: "ups" },
      ],
    },
    {
      title: "Computer Hardware",
      submenu: [
        { title: "Computers", url: "computer-hardware-computers" },
        { title: "Notebooks", url: "computer-hardware-notebooks" },
        { title: "Printers", url: "computer-hardware-printers" },
      ],
    },
    {
      title: "Energy",
      submenu: [
        { title: "Solar Systems", url: "solar-systems" },
        { title: "Solar Battery Storage", url: "solar-battery-storage" },
        { title: "EV Charging", url: "ev-charging" },
        { title: "Solar Air Conditioning", url: "solar-air-conditioning" },
      ],
    },
    {
      title: "Finance",
      submenu: [
        { title: "Business Cash Loans", url: "business-cash-loans" },
        { title: "Equipment Finance", url: "equipment-finance" },
        { title: "Car Finance", url: "car-finance" },
        { title: "Building Finance", url: "building-finance" },
      ],
    },
    {
      title: "Networking",
      submenu: [
        { title: "Computer Networking", url: "computer-networking" },
        { title: "Data Cabling", url: "data-cabling" },
        { title: "Wireless Access Points", url: "wireless-access-points" },
        { title: "Switching and Routing", url: "networking-switching-routing" },
      ],
    },
    {
      title: "Support",
      submenu: [
        { title: "SLA-Notebooks", url: "sla-notebooks" },
        { title: "SLA-Workstations", url: "sla-workstations" },
        { title: "SLA-Servers", url: "sla-servers" },
        { title: "SLA-Printers", url: "sla-printers" },
        { title: "SLA-Switching Routing", url: "sla-switching-routing" },
      ],
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
    <div className="flex items-center justify-center">
      <div className="flex justify-center">
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
// import React from "react";
// import { ChevronUpIcon } from "@heroicons/react/24/solid";
// import {
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Button,
// } from "@material-tailwind/react";

// export function NestedMenu() {
//   const [openMenu, setOpenMenu] = React.useState(false);

//   return (
//     <Menu>
//       <MenuHandler>
//         <Button> Menu</Button>
//       </MenuHandler>
//       <MenuList>
//         <MenuItem>Menu Item 1</MenuItem>
//         <MenuItem>Menu Item 2</MenuItem>
//         <Menu
//           placement="right-start"
//           open={openMenu}
//           handler={setOpenMenu}
//           allowHover
//           offset={15}
//         >
//           <MenuHandler className="flex items-center justify-between">
//             <MenuItem>
//               Nested Item
//               <ChevronUpIcon
//                 strokeWidth={2.5}
//                 className={`h-3.5 w-3.5 transition-transform ${
//                   openMenu ? "rotate-90" : ""
//                 }`}
//               />
//             </MenuItem>
//           </MenuHandler>
//           <MenuList>
//             <MenuItem>Nested Item 1</MenuItem>
//             <MenuItem>Nested Item 2</MenuItem>
//             <MenuItem>Nested Item 3</MenuItem>
//           </MenuList>
//         </Menu>
//         <MenuItem>Menu Item 3</MenuItem>
//       </MenuList>
//     </Menu>
//   );
// }
