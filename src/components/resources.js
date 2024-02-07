import React, { useState } from "react";
import VideoTutorial from "../pages/VideoTutorials";

const Select = ({ label, options, value, onChange }) => {
  return (
    <div className="flex flex-col justify-center items-center px-8 text-center">
      <label>{label}</label>
      <select
        className="w-[250px] text-gray-500 bg-white rounded-md shadow-sm outline-none focus:border-red-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option} className="w-full">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default function Resources() {
  const [selectResourceType, setSelectResourceType] = useState("Select Resource Type");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');


  const handleResourceTypeChange = (selectedValue) => {
    setSelectResourceType(selectedValue);
  };
  const handleBrandChange = (selectedValue) => {
    setSelectedBrand(selectedValue);
  };
  const handleModelChange = (selectedValue) => {
    setSelectedModel(selectedValue); 
  };

  const handleSearchClick = () => {
    if (selectResourceType || selectedBrand || selectedModel) {
      let videoUrl = "";
  
      switch (selectedModel) {
        case "V62":
          videoUrl = "";
          break;
        case "X210":
          videoUrl = "";
          break;
        case "X4U/XSU":
          videoUrl = "test.mp4";
          break;
        default:
          videoUrl = "";
      }
  
      setShowComponent(true);
      setVideoUrl(videoUrl); 
    }
  };

  const resourceTypeOptions = ["Manuals", "Video Tutorials", "Firmware"];
  const brandOptions = ["UC8 PBX", "Cisco", "Fanvil", "Yealink", "GrandStream", "Polycom"];
  const modelOptions = selectedBrand === "Cisco" ? ["SPA504", "SPA525"]: selectedBrand === "Fanvil" ? ["X210", "X4U/XSU", "V62"] : selectedBrand === "Yealink" ? ["SIP-T54W", "SIP-T46S"] : [];

  return (
    <div className="h-screen">
      <div className="">
        <div className="lg:flex justify-center items-end">
          <div className="lg:flex justify-center items-center mt-8">
            <Select
              label="Resource Type"
              options={resourceTypeOptions}
              onChange={handleResourceTypeChange}
            />
            <Select
              label="Brand"
              options={brandOptions}
              onChange={handleBrandChange}
            />
            <Select
              label="Model"
              options={modelOptions}
              onChange={handleModelChange}
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleSearchClick}
              className="border border-solid border-1 text-white bg-red-500 w-24 h-10 rounded-full mt-5"
            >
              Search
            </button>
          </div>
        </div>
        
        {showComponent && videoUrl && <VideoTutorial />}
  
      </div>
    </div>
  );
}
