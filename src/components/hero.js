import React from "react";
import { useHistory } from "react-router-dom";

export default function Hero() {
  const history = useHistory();

  return (
    <div className="sm:h-full bg-cover">
      <title>Integra BarterCard</title>
      <meta
        name="description"
        content="UC8 offers hosted IPPBX business phone systems with no upfront hardware cost, customizable voice plans, and local hosting in Australia. Request a quote today."
      />

      <div
        className="lg:px-16 min-h-[1000px] lg:min-h-[800px]"
        style={{
          background:
            "url(/images/telechargementIcon.png) no-repeat bottom center, linear-gradient(to bottom, #87acc7 42%, #e9f2f6 95%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom center",
          display: "inline-block",
          width: "100%",
        }}
      >
        <div className="lg:mx-36 flex flex-col xl:flex-row justify-center items-center mt-5">
          <div className="text-center lg:p-32">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Hosted <span className="text-red-500">IPPBX</span>
              <br></br> Business Phone Systems
            </h1>
            <div className="rounded-full px-3 py-3 text-2xl leading-10 text-red-500 font-bradhitc">
              “Future Technology Today”
            </div>
            <p className="text-xl leading-10 text-white">
              <b>✓</b> No Upfront Hardware Cost
            </p>
            <p className="mt-2 text-xl leading-10 text-white">
              <b>✓</b> Choose Your Voice Plan
            </p>
            <p className="mt-2 text-xl leading-10 text-white">
              <b>✓</b> Hosted Locally In Australia
            </p>
            <p className="mt-2 text-xl leading-10 text-white">
              <b>✓</b> Keep Your Current Numbers
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => history.push(`/contact`)}
                style={{ borderRadius: "1.75rem" }}
                className="flex items-center duration-500 justify-center w-44 h-10 rounded-full border border-solid border-red-500 bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500 text-white"
              >
                Get Contacted
              </button>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <img
              className="w-full h-full"
              src="/images/main_hero.png"
              alt="Right Column"
            />
          </div>
        </div>

        {/* Right column (image) */}
      </div>
    </div>
  );
}
