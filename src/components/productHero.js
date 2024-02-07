import React from "react";

export default function ProductHero() {
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
          <h1 className="text-white font-semibold text-6xl">Products</h1>
        </div>
        </div>
      </div>
    </div>
  );
}
