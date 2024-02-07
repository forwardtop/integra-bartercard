import React from "react";
import { HiPlay } from "react-icons/hi";

export default function ProductHero() {
  return (
    <div className="sm:h-full bg-cover">
      <title>UC8</title>
      <meta
        name="description"
        content="UC8 offers hosted IPPBX business phone systems with no upfront hardware cost, customizable voice plans, and local hosting in Australia. Request a quote today."
      />

      <div className="p-16">
        <div className="lg:mx-36 flex-col flex lg:flex-row justify-center items-center">
          <div className="w-full lg:w-7/12">
            <div className="text-left lg:p-8">
              <h1 className="text-4xl lg:text-4xl xl:text-5xl font-semibold tracking-tight text-gray-900">
                <p className="mb-2">Empower every employee with</p>
                <p className="mb-2">integrated contact center, voice,</p>
                <p className="mb-2">video, chat, and APIs.</p>
              </h1>
              <h4 className="mt-10 text-2xl">
                Elevate customer experience and employee
                <br /> experience with the 8x8 XCaaS Platform.
              </h4>
              <a href="/" className="flex mt-5 font-bold">
                <HiPlay
                  className="w-6 h-6 mr-2"
                  stroke="red"
                  fill="none"
                  strokeWidth="2"
                />
                Watch the video
              </a>
            </div>
          </div>

          {/* Right column (image) */}
          <div className="w-full lg:w-5/12">
            <img
              className="w-3/4 h-3/4"
              src="/images/product_hero.webp"
              alt="Right Column"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
