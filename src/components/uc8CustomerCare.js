import React from "react";

const Uc8CustomerCare = () => {
  return (
    <div>
      <div className="m-auto pt-5 max-w-3xl">
        <div
          className="flex justify-between bg-cover bg-center"
          style={{ backgroundImage: "url(/images/customerCareHeader.png)" }}
        >
          <div>
            <img src="/images/customerCare.png" alt="" className="p-8 "></img>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-12 mt-8">
            <div className="flex flex-col">
              <div className="flex justify-start items-center">
                <img
                  src="/images/support.svg"
                  className="w-12 h-12"
                  alt=""
                ></img>
                <h2 className="text-xl font-bold px-3">Support</h2>
              </div>
              <div className="mt-5">
                <img
                  src="/images/supporter.png"
                  alt=""
                  className="w-full"
                ></img>
              </div>
              <div className="flex flex-col md:flex-row mt-5">
                <div className="flex flex-col md:w-1/2">
                  <div className="flex justify-start items-center mt-3">
                    <img
                      src="/images/uc8care.svg"
                      className="w-12 h-12"
                      alt=""
                    ></img>
                    <h2 className="text-xl font-bold px-3">UC8 Care</h2>
                  </div>
                  <div>
                    <p className="text-sm mt-3 pr-5">
                      UC8 is committed to after sales service and support. Our
                      customers have access to our Australian based customer
                      service and support centre 24/7. We will look after you
                      and keep your equipment up to date.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2">
                  <div className="flex justify-start items-center mt-3">
                    <img
                      src="/images/vip.svg"
                      className="w-12 h-12"
                      alt=""
                    ></img>
                    <h2 className="text-xl font-bold px-3">UC8 VIP Club</h2>
                  </div>
                  <div>
                    <p className="text-sm mt-3 pr-5">
                      If you would like priority service, and other benefits,
                      ask about our VIP Club, it’s as little as $5/month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#5F6B77] h-16 flex items-center justify-end mt-12 mb-5">
          <p className="text-white font-bold mr-48  font-bradhitc">
            "Future Technology Today"
          </p>
        </div>
          <div>
            <div
          className="flex justify-between bg-cover bg-center"
          style={{ backgroundImage: "url(/images/customerCareHeader.png)" }}
        >
          <div>
            <img src="/images/features.png" alt="" className="p-8 "></img>
          </div>
        </div>
            <div className="px-12 pt-5">
              <div className="flex flex-col space-y-5">
                <div className="flex justify-start items-center">
                  <img
                    src="/images/features.svg"
                    className="w-12 h-12"
                    alt=""
                  ></img>
                  <h2 className="text-xl font-bold px-3">Product Features</h2>
                </div>
                <div className="ml-16">
                  <h2 className="text-xl font-bold px-3 text-gray-700">
                    Calling Features
                    <span className="text-sm font-light ml-5">(included)</span>
                  </h2>
                </div>
                <div className="flex flex-row">
                  <div className="px-1">
                    <img
                      src="/images/phone1.svg"
                      className="w-12 h-12"
                      alt=""
                    ></img>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Show/Hide Caller ID
                        <br></br>Call Transfer
                        <br></br>Call Forward/Follow-me
                        <br></br>Call Pickup Call Park
                        <br></br>Call Waiting
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Do Not Disturb (DND)
                        <br></br>Call Recording
                        <br></br>Three-Way Calling
                        <br></br>Caller Blacklisting
                        <br></br>Directories/Contacts
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Call History
                        <br></br>Voicemail
                        <br></br>Speed Dials
                        <br></br>Redial
                        <br></br>Call Screening
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-16">
                  <h2 className="text-xl font-bold px-3 text-gray-700">
                    Business Features
                    <span className="text-sm font-light ml-5">(included)</span>
                  </h2>
                </div>
                <div className="flex flex-row">
                  <div className="px-1">
                    <img
                      src="/images/businesscare.svg"
                      className="w-12 h-12"
                      alt=""
                    ></img>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Unlimited extensions
                        <br></br>Auto Attendant
                        <br></br>Caller ID Lookup
                        <br></br>Date/Night Mode,
                        <br></br>Calling Queues (ACD)
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Ring Groups
                        <br></br>Conferences
                        <br></br>Music on Hold
                        <br></br>Announcements
                        <br></br>Auto Dialler
                      </p>
                    </div>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Call Eavesdrop
                        <br></br>Call Detail Records
                        <br></br>Voicemail to Email
                        <br></br>Fax to Email
                        <br></br>Email to Fax
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ml-16">
                  <h2 className="text-xl font-bold px-3 text-gray-700">
                    Call Centre Advanced Features
                    <span className="text-sm font-light ml-5">(Optional)</span>
                  </h2>
                </div>
                <div className="flex md:flex-row">
                  <div className="px-1">
                    <img
                      src="/images/callcenter.svg"
                      className="w-12 h-12"
                      alt=""
                    ></img>
                  </div>
                  <div className="w-[30%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Outgoing Calls
                        <br></br>Abandoned Calls
                        <br></br>Answered Calls
                        <br></br>Grade of Service
                        <br></br>Average Handle Time
                      </p>
                    </div>
                  </div>
                  <div className="w-[60%] p-1">
                    <div className="border border-solid border-gray-300">
                      <p className="text-xs">
                        Average Wait Time
                        <br></br>Comprehensive reports and charts on
                        Queues/Agents
                        <br></br>by month, by week, by day, by week day, by hour
                        <br></br>Real-time Dashboard (Operator Panel) to monitor
                        <br></br>Waiting Calls
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h2 className="text-xl font-bold px-3 text-gray-700">
                    Our Promise
                  </h2>
                </div>
                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <img
                          src="/images/noupfront.svg"
                          className="w-10 h-10"
                          alt=""
                        ></img>
                      </div>
                      <p className="text-xs text-center">
                        No Upfront<br></br>Hardware Cost
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <img
                          src="/images/voiceplan.svg"
                          className="w-10 h-10"
                          alt=""
                        ></img>
                      </div>
                      <p className="text-xs text-center">
                        Choose Your<br></br>Voice Plan
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <img
                          src="/images/hosted.svg"
                          className="w-10 h-10"
                          alt=""
                        ></img>
                      </div>
                      <p className="text-xs text-center">
                        Hosted Locally<br></br>in Australia
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-center items-center">
                      <div>
                        <img
                          src="/images/keep.svg"
                          className="w-10 h-10"
                          alt=""
                        ></img>
                      </div>
                      <p className="text-xs text-center">
                        Keep Your<br></br>Current Numbers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#5F6B77] h-16 flex items-center justify-end mt-12">
          <p className="text-white font-bold mr-48  font-bradhitc">
            "Future Technology Today"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Uc8CustomerCare;
