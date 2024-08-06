import React from "react";

const GetConnected = () => {
  return (
    <div>
      <div className="m-auto pt-5 max-w-3xl">
        <div
          className="flex justify-between bg-cover bg-center"
          style={{ backgroundImage: "url(/images/customerCareHeader.png)" }}
        >
          <div>
            <img src="/images/getconnected.png" alt="" className="p-8 "></img>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="">
            <div className="flex justify-start items-center mt-5">
              <img src="/images/1.png" alt=""></img>
              <h2 className="text-xl font-bold px-3">Get Connected</h2>
            </div>
            <div className="w-full overflow-x-auto">
              <table
                className="lg:w-full"
                style={{ borderCollapse: "separate", borderSpacing: "2px" }}
              >
                <colgroup>
                  <col style={{ width: "60%" }} />
                  <col style={{ width: "20%" }} />
                  <col style={{ width: "20%" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th className="bg-gray-200 p-4 text-left text-red-500">
                      Foundation
                    </th>
                    <th className="bg-gray-200 p-4 text-center text-red-500">
                      Plan
                    </th>
                    <th className="bg-gray-200 p-4 text-center text-red-500">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 bg-gray-300" colSpan="2">
                      <div className="flex justify-between">
                        <p className="text-sm">
                          UC8 Hosted IPPBX Business Phone System
                        </p>
                        <p className="text-sm mr-5">H100</p>
                      </div>
                      <div className="flex items-center mt-3">
                        <div className="w-1/4 text-center">
                          <div className="flex justify-center">
                            <img src="/images/advertise.png" alt="" />
                          </div>
                          <p className="text-center text-[10px]">
                            Advertised
                            <br />
                            Calling Number
                          </p>
                        </div>
                        <div className="mx-2 text-3xl text-red-500">+</div>
                        <div className="w-1/4 text-center">
                          <div className="flex justify-center">
                            <img src="/images/uc8icon.png" alt="" />
                          </div>
                          <p className="text-center text-[10px]">
                            UC8 IPPBX
                            <br />
                            Phone System
                          </p>
                        </div>
                        <div className="mx-2 text-3xl text-red-500">+</div>
                        <div className="w-1/4 text-center">
                          <div className="flex justify-center">
                            <img src="/images/linetower.png" alt="" />
                          </div>
                          <p className="text-center text-[10px]">
                            UC8 Multi Line
                            <br />
                            Unlimited Calling Lines*
                          </p>
                        </div>
                        <div className="mx-2 text-3xl text-red-500">+</div>
                        <div className="w-1/4 text-center">
                          <div className="flex justify-center">
                            <img src="/images/recruiter.png" alt="" />
                          </div>
                          <p className="text-center text-[10px]">
                            UC8 Help
                            <br />
                            Desk Support
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center bg-gray-300">
                      <div className="flex flex-col items-center">
                        <br />
                        <div className="text-2xl">$ <span className="font-bold text-4xl">39</span></div>
                        <div className="text-xl">per month</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 2. Choose your Device */}

            <div className="flex justify-start items-center mt-4">
              <img src="/images/2.png" alt=""></img>
              <h2 className="text-xl font-bold px-3">Choose Your Device</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="card-item shadow-lg hover:shadow-2xl duration-500 pb-7">
                <div className="flex justify-center">
                  <img src="/images/reception.png" alt="Reception Phone" className="h-[100px]" />
                </div>
                <div className="text-center mt-2">
                  <span className="bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-1 rounded-2xl text-xs">
                    Reception Phone
                  </span>
                </div>
                <p className="text-xs mt-2 lg:pl-8 text-center lg:text-left">
                  3 Colour LCD display
                  <br />
                  166 DSS Keys
                  <br />
                  20 lines
                  <br />
                  HD Audio
                  <br />
                  Built in Bluetooth
                </p>
              </div>
              <div className="card-item shadow-lg hover:shadow-2xl duration-500 pb-7">
                <div className="flex justify-center">
                  <img src="/images/telephone.png" alt="Executive Phone" className="h-[100px]"/>
                </div>
                <div className="text-center mt-2">
                  <span className="bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-1 rounded-2xl text-xs">
                    Executive Phone
                  </span>
                </div>
                <p className="text-xs mt-2 lg:pl-8 lg:text-left text-center">
                  2 Colour LCD display
                  <br />
                  30 Colour LCD DSSkeys
                  <br />
                  500 address book entities <br />
                  Gigabit 10/100/1000 <br />
                  High definition
                  <br />
                  Desk or Wall mountable
                </p>
              </div>

              <div className="card-item shadow-lg hover:shadow-2xl duration-500 pb-7">
                <div className="flex justify-center">
                  <img src="/images/tel3.png" alt="Cordless Phone" className="h-[100px]"/>
                </div>
                <div className="text-center mt-2">
                  <span className="bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-1 rounded-2xl text-xs">
                    Cordless Phone
                  </span>
                </div>
                <p className="text-xs mt-2 lg:text-left text-center lg:pl-8">
                  Colour LCD Display
                  <br />
                  4-5 day Stand-by <br />
                  3-4 hour talk time <br />
                  Gigabit 10/100/1000
                  <br />
                  Wi-Fi <br />
                  High Definition <br />
                  Charging dock
                </p>
              </div>

              <div className="card-item shadow-lg hover:shadow-2xl duration-500 pb-7">
                <div className="flex justify-center">
                  <img src="/images/pad.png" alt="Softphone" className="h-[100px]"/>
                </div>
                <div className="text-center mt-2">
                  <span className="bg-gradient-to-r from-red-800 to-red-600 text-white px-2 py-1 rounded-2xl text-xs">
                    Softphone
                  </span>
                </div>
                <p className="text-center lg:text-left lg:pl-8 text-xs mt-2">
                  USB Headset
                  <br />
                  Softphone No hardware
                  <br />
                  Apple / Android / PC
                  <br />
                  Voice & Video
                  <br />
                </p>
              </div>
            </div>

            {/* 3. Choose your Contract Term */}

            <div className="flex justify-start items-center mt-4">
              <img src="/images/3.png" alt=""></img>
              <h2 className="text-xl font-bold px-3">
                Choose Your Contract Term
              </h2>
            </div>
            <div className="lg:max-w-7xl ">
              <div className=" overflow-x-auto flex justify-center">
                <table className="lg:w-full border-collapse border border-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-white p-3 text-red-500">
                        <div className="flex justify-start items-center text-sm">
                          <img
                            src="/images/term.svg"
                            className="w-5"
                            alt=""
                          ></img>
                          &nbsp; &nbsp;&nbsp;Contract Term
                        </div>
                      </th>
                      <th className="border border-white p-3 text-sm text-red-500">
                        Setup<br></br>
                        <span className="text-xs text-gray-900 font-thin">
                          Per Device
                        </span>
                      </th>
                      <th className="border border-white p-3 text-sm text-red-500">
                        Delivery<br></br>
                        <span className="text-xs text-gray-900 font-thin">
                          Per Device
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-300">
                      <td className="border border-white p-1">
                        Months of Months
                      </td>
                      <td className="border border-white p-1 text-center">
                        $&nbsp;<strong>249</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-white p-1">12 months</td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>199</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                    <tr className="bg-gray-300">
                      <td className="border border-white p-1">24 months</td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>149</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-white p-1">36 months</td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>99</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                    <tr className="bg-gray-300">
                      <td className="border border-white p-1">48 months</td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>49</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-white p-1">60 months</td>
                      <td className="border border-white text-center p-1">
                        <strong>0</strong>
                      </td>
                      <td className="border border-white text-center p-1">
                        $&nbsp;<strong>10</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4. Select Your Call Plan */}

          <div className="flex justify-start items-center mt-4">
            <img src="/images/4.png" alt=""></img>
            <h2 className="text-xl font-bold px-3">Select Your Call Plan</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-300">
                  <th className="border border-white p-3 text-sm w-1/4"></th>
                  <th className="border border-white p-3 bg-[#ed1c24] text-white relative w-1/4">
                    <div className="absolute inset-x-0 -top-[6px] flex justify-center">
                      <div className="flex items-center relative">
                        <img
                          src="/images/popular.svg"
                          className="h-5"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="text-center text-xl font-bold">
                      PAYG<br></br>
                      <span className="text-xs text-white font-thin">
                        subscription
                      </span>
                    </div>
                  </th>
                  <th className="border border-white p-3 bg-[#b11116] text-white w-1/4">
                    <div className="text-center text-xl font-bold">
                      Call Centre<br></br>
                      <span className="text-xs text-white font-thin">
                        subscription
                      </span>
                    </div>
                  </th>
                  <th className="border border-white p-3 bg-[#ed1c24] text-white w-1/4">
                    <div className="text-center text-xl font-bold">
                      Ultimate<br></br>
                      <span className="text-xs text-white font-thin">
                        subscription
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border border-white p-1"></td>
                  <td className="border font-semibold border-white p-1 text-center">
                    $&nbsp;<span className="text-2xl">10</span>
                    <p className="text-[8px]">Per Seat/ Month / Extension</p>
                  </td>
                  <td className="border font-semibold border-white text-center p-1">
                    $&nbsp;<span className="text-2xl">15</span>
                    <p className="text-[8px]">Per Seat / Month / Extension</p>
                  </td>
                  <td className="border font-semibold border-white text-center p-1">
                    $&nbsp;<span className="text-2xl">39</span>
                    <p className="text-[8px]">Per Seat / Month / Extension</p>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">Plan</td>
                  <td className="border border-white text-center p-1 w-1/3">
                    H200
                  </td>
                  <td className="border border-white text-center p-1 w-1/3">
                    H300
                  </td>
                  <td className="border border-white text-center p-1 w-1/3">
                    H400
                  </td>
                </tr>
                <tr className="bg-gray-100 text-red-500">
                  <td className="border border-white p-1 ">
                    <div className="flex items-center">
                      <div className="px-3">
                        <img
                          src="/images/ring.svg"
                          className="w-4 h-4"
                          alt="call rates"
                        ></img>
                      </div>
                      Call Rates
                    </div>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100 text-red-500">
                          <td className="border border-white text-center p-1 w-1/3">
                            Rate
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Billed
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flag
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <tr className="bg-gray-100 text-red-500">
                        <td className="border border-white text-center p-1 w-1/3">
                          Rate
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Billed
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Flag
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <tr className="bg-gray-100 text-red-500">
                        <td className="border border-white text-center p-1 w-1/3">
                          Rate
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Billed
                        </td>
                        <td className="border border-white text-center p-1 w-1/3">
                          Flag
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">Local</td>
                  <td className="bg-gray-300">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-300">
                          <td className="border border-white text-center p-1 w-1/3">
                            10c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flat
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-300">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-300">
                          <td className="border border-white text-center p-1 w-1/3">
                            4.9c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            P/sec
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-300 text-center">Unlimited</td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1">Mobile(Australia)</td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-white text-center p-1 w-1/3">
                            10c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flat
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-white text-center p-1 w-1/3">
                            4.9c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            P/sec
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-100 text-center border">Unlimited</td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">STD</td>
                  <td className="bg-gray-300">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-300">
                          <td className="border border-white text-center p-1 w-1/3">
                            29c/m
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            P/sec
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-300">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-300">
                          <td className="border border-white text-center p-1 w-1/3">
                            29c/m
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            P/sec
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-300 text-center">Unlimited</td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1">13/1300</td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-white text-center p-1 w-1/3">
                            35c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flat
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-white text-center p-1 w-1/3">
                            35c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flat
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td className="bg-gray-100">
                    <table className="w-full border-collapse border border-white">
                      <thead></thead>
                      <tbody>
                        <tr className="bg-gray-100">
                          <td className="border border-white text-center p-1 w-1/3">
                            35c
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Flat
                          </td>
                          <td className="border border-white text-center p-1 w-1/3">
                            Free
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">1800</td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1">000 Emergency</td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">Integra On Net</td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    Free
                  </td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1">Integra Branch</td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Free
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">International</td>
                  <td className="bg-gray-300 text-center border border-white">
                    From 1.5c
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    From 1.5c
                  </td>
                  <td className="bg-gray-300 text-center border border-white">
                    From 1.5c
                  </td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1">Conditions Of Use</td>
                  <td className="bg-gray-100 text-center border border-white">
                    Per User Extension
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Per User Extension
                  </td>
                  <td className="bg-gray-100 text-center border border-white">
                    Per User Extension<br></br>Not for all centre
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1">GST</td>
                  <td
                    className="bg-gray-300 text-center border border-white"
                    colSpan={3}
                  >
                    Minimum call charge1c. All Prices are inclusive of GST.
                  </td>
                </tr>
                <tr className="bg-gray-100 text-red-500">
                  <td className="border border-white p-1" colSpan={2}>
                    <div className="flex items-center">
                      <div className="px-3">
                        <img
                          src="/images/optional.svg"
                          className="w-4 h-4"
                          alt="call rates"
                        ></img>
                      </div>
                      Optional Products
                    </div>
                  </td>
                  <td className="bg-gray-100">
                    <tr className="bg-gray-100 text-red-500">
                      <td className="border border-white text-center p-1 w-1/3">
                        Plan
                      </td>
                    </tr>
                  </td>
                  <td className="bg-gray-100">
                    <tr className="bg-gray-100 text-red-500">
                      <td className="border border-white text-center p-1 w-1/3">
                        Price
                      </td>
                    </tr>
                  </td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="border border-white p-1" colSpan={2}>
                    <div className="flex items-center text-sm">
                      1300/1800 InBound Number
                    </div>
                  </td>
                  <td className="bg-gray-300 text-center text-sm">V502/V503</td>
                  <td className="bg-gray-300">
                    <td className="border text-center p-1 w-1/3">
                      $ 20<br></br>
                      <span className="text-[10px]">per month</span>
                    </td>
                  </td>
                </tr>

                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 FAX Service + Fax 2 Email
                  </td>
                  <td className="bg-gray-100 text-center">F102</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 20<br></br>
                    <span className="text-[10px]">per month</span>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 SLA Support Service Level Agreement
                  </td>
                  <td className="border border-white text-center">S101</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 5<br></br>
                    <span className="text-[10px]">per month per seat</span>
                  </td>
                </tr>

                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Connection Pack
                    <div>
                      <img src="/images/pack.svg" className="h-10" alt=""></img>
                    </div>
                  </td>
                  <td className="bg-gray-100 text-center">C100</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 39<br></br>
                    <span className="text-[10px]">per month</span>
                  </td>
                </tr>
                <tr className="bg-gray-300 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Hosted CRM
                  </td>
                  <td className="border border-white text-center">H800</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 5<br></br>
                    <span className="text-[10px]">per month per seat</span>
                  </td>
                </tr>
                <tr className="bg-gray-100 text-sm">
                  <td className="border border-white p-1 text-sm" colSpan={2}>
                    UC8 Call Center
                  </td>
                  <td className="bg-gray-100 text-center">H700</td>

                  <td className="border border-white text-center p-1 w-1/3">
                    $ 20<br></br>
                    <span className="text-[10px]">per month per user</span>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default GetConnected;
