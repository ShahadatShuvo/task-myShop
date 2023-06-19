"use client";

import Image from "next/image";
import React from "react";
import CommonSection from "./CommonSection";
import { useContext } from "react";
import { AllContext } from "../../../app/context";

function PopularBrands() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);

  return (
    <div
      className={
        isLightTheme
          ? "mt-16 md:mt-32 bg-[#F4FCFF] h-auto md:h-[200vh] w-screen"
          : "mt-16 md:mt-32  h-auto md:h-[200vh] w-screen"
      }
    >
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
