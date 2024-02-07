import React, { useState } from "react";
import Overview from "./overview";
import Features from "./features";
import Download from "./download";
import Documentation from "./documentation";

export default function Solution() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const tabNames = ["OVERVIEW", "FEATURES", "DOWNLOAD", "DOCUMENTATION"];

  return (
    <div>
      <div
        className="h-48 mx-auto max-w-[1820px]"
        style={{
          backgroundImage: 'url("/images/product_hero.png")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto h-36 max-w-[1200px] flex justify-center lg:justify-start items-center">
          <div>
            <h1 className="text-white font-semibold text-6xl">Solution</h1>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-[1820px] pt-[120px]"
        style={{
          
          background:
            "#e9f2f7 url(/images/backgroundTechnical.png) no-repeat top center",
        }}
      >
        <div className="lg:flex justify-center">
          <TabButton
            tabNumber={1}
            activeTab={activeTab}
            onClick={handleTabClick}
            activeImage="/images/iconOverviewActive.png"
            inactiveImage="/images/iconOverview.png"
            tabName={tabNames[0]}
          />
          <TabButton
            tabNumber={2}
            activeTab={activeTab}
            onClick={handleTabClick}
            activeImage="/images/iconNoteActive.png"
            inactiveImage="/images/iconNote.png"
            tabName={tabNames[1]}
          />
          <TabButton
            tabNumber={3}
            activeTab={activeTab}
            onClick={handleTabClick}
            activeImage="/images/iconDownloadActive.png"
            inactiveImage="/images/iconDownload.png"
            tabName={tabNames[2]}
          />
          <TabButton
            tabNumber={4}
            activeTab={activeTab}
            onClick={handleTabClick}
            activeImage="/images/iconPlacardActive.png"
            inactiveImage="/images/iconPlacard.png"
            tabName={tabNames[3]}
          />
        </div>
        
        <div className="max-w-[950px] p-7 bg-white rounded-xl mx-auto">
        {activeTab === 1 && (
          <Overview />
        )}
        {activeTab === 2 && (
          <Features />
        )}
        {activeTab === 3 && (
          <Download />
        )}
        {activeTab === 4 && (
          <Documentation />
        )}
        </div>
        <div className="w-full h-48"></div>
        
      </div>
    </div>
  );
}

// Separate component for tab button
function TabButton({ tabNumber, activeTab, onClick, activeImage, inactiveImage, tabName }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={activeTab === tabNumber ? activeImage : inactiveImage}
        alt={`Tab ${tabNumber}`}
        className="w-[50px] h-[50px] mb-2"
      />
      <button
        className={`font-semibold mx-4 p-2 min-w-[180px] rounded-t-lg focus:outline-none ${activeTab === tabNumber ? 'bg-white' : 'bg-[#eff4f9]'}`}
        onClick={() => onClick(tabNumber)}
      >
        <div className={activeTab === tabNumber ? 'text-red-500' : 'text-gray-700'}>{tabName}</div>
      </button>
    </div>
  );
}
