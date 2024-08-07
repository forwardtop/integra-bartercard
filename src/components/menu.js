import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./../assets/menu.css";

// Assuming productItemsData is imported or defined here
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

const generateSubmenu = (submenu) => {
  if (!submenu || submenu.length === 0) return null;

  return (
    <ul>
      {submenu.map((item, index) => (
        <li key={index}>
          <Link to={`/${item.url}`}>{item.title}</Link>
          {item.submenu && generateSubmenu(item.submenu)}
        </li>
      ))}
    </ul>
  );
};

const DropdownMenu = () => {
  return (
    <nav id="container">
      <label htmlFor="drop" className="toggle">
        &#8801; Menu
      </label>
      <input type="checkbox" id="drop" />
      <ul className="menu">
        <li>
          <Link to="#">Products</Link>
          <input type="checkbox" id="drop-2" />
          {generateSubmenu(productItemsData)}
        </li>
        <li>
          <Link to="/solutions">Solutions</Link>
        </li>
        <li>
          <Link to="/why-uc8">Why UC8</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/bartercard">BarterCard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DropdownMenu;
