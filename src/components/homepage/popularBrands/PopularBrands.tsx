"use client";

import Image from "next/image";
import React from "react";
import CommonSection from "./CommonSection";

function PopularBrands() {
  return (
    <div className="mt-32 bg-[#F4FCFF] h-[200vh] w-screen">
      {/* for popular brands  */}
      <div>
        <CommonSection headline="Explore Most Popular Brands" title="brands" />
      </div>
      {/* for social media  */}
      <div>
        <CommonSection
          headline="Sell Easily on  Socialmedia"
          title="socialmedia"
        />
      </div>
    </div>
  );
}

export default PopularBrands;
