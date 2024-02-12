import React from "react";

const About = () => {
  return (
    <div>
      <div className="m-auto pt-5 max-w-3xl">
        <div
          className="flex justify-between bg-cover bg-center"
          style={{ backgroundImage: "url(/images/customerCareHeader.png)" }}
        >
          <div>
            <img src="/images/about.png" alt="" className="p-8 "></img>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-12 py-5">
            <div className="flex flex-col">
              <div className="flex justify-start items-center">
                <img src="/images/voip.svg" className="w-12 h-12" alt=""></img>
                <h2 className="text-xl font-bold px-3">What is VOIP?</h2>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  VoIP (Voice over Internet Protocol), is the technology of
                  converting your voice calls into data packets, VoIP data
                  packets are transmitted over the Internet. Data is secure and
                  highly encrypted.
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex justify-start items-center">
                <img src="/images/why.svg" className="w-12 h-12" alt=""></img>
                <h2 className="text-xl font-bold px-3">Why UC8</h2>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  For over 25 years UC8 technologies R&D department and
                  engineers have developed and refined one of the world’s most
                  powerful business phone system platforms. UC8 is powerful and
                  highly affordable.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src="/images/uc8diagram.png" alt=""></img>
            </div>
          </div>
          <div className="px-12">
            <div className="flex flex-col">
              <div className="flex justify-start items-center">
                <img src="/images/benefits.svg" className="w-12 h-12" alt=""></img>
                <h2 className="text-xl font-bold px-3">UC8 Benefits</h2>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  Your business calls are made over your broadband Internet
                  connection, but at a fraction of the cost. VoIP is easy to set
                  up and you can keep your current telephone numbers. UC8 is an
                  open platform which means you are not locked into proprietary
                  hardware. You can use any IP compatible hardware or software
                  with UC8.
                  <br></br>
                  <br></br>
                  With UC8 you can connect with compatible IP desktop,
                  conference and cordless handsets, if you need video, we have
                  you covered with UC8 softphone which is compatible with
                  Windows & Mac devices, UC8 also works with IP video desktop
                  phones and IP VC Systems. If you need mobility, stay connected
                  with our UC8 softphone for mobiles and smart devices, IOS and
                  Android compatible.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-5">
              <div className="lg:w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img src="/images/saving.svg" className="w-10 h-10" alt=""></img>
                  </div>
                  <h5 className="text-sm font-bold mb-3">Saving</h5>
                  <p className="text-sm">
                    As UC8 IPPBX is a hosted platform, you do not need to buy
                    expensive on-premise phone system hardware. With UC8 you can
                    connect with as little as one telephone extension, simply
                    add phone extensions as and when you need. No more expensive
                    calling lines with “UC8 multi-line” this means you can
                    receive multiple inbound and outbound calls simultaneously
                    rather than restricted line-based systems, you are only
                    limited by the size of your Internet connection.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <img src="/images/multi.svg" className="h-10" alt=""></img>
                  </div>
                  <h5 className="text-sm font-bold mb-3">Multi-site</h5>
                  <p className="text-sm px-3">
                    This is a feature rich phone system delivering high
                    performance to your business. If you have multiple branch
                    offices or staff who work from home, UC8 supports
                    “multi-site” as a standard feature. If you operate more than
                    one company or entity, we have got you covered with
                    “Multi-tenant”, also a standard feature.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="flex justify-start items-center">
                <img src="/images/howitworks.svg" className="w-10 h-10" alt=""></img>
                <h2 className="text-xl font-bold px-3">How Does It Work?</h2>
              </div>
              <div className="mt-2">
                <p className="text-sm">
                  For over 25 years UC8 technologies R&D department and
                  engineers have developed and refined one of the world’s most
                  powerful business phone system platforms. UC8 is powerful and
                  highly affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#5F6B77] h-16 flex items-center justify-end mt-12">
          <p className="text-white mr-24 font-bradhitc font-bold">"Future Technology Today"</p>
        </div>
      </div>
    </div>
  );
};

export default About;
