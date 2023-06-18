"use client";

import Image from "next/image";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React from "react";

function PopularBrands() {
  return (
    <div className="mt-32 bg-[#F4FCFF] h-[100vh] w-screen">
      <div className="py-24 mx-32 flex justify-around">
        <div className="relative">
          <Image
            src="/img/brands/brands_bg.svg"
            alt="brands_bg"
            width={550}
            height={550}
          />

          <div className="absolute top-32 w-full flex flex-wrap justify-center items-center gap-2">
            <a href="/">
              <Image
                src="/img/brands/Logo1.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
            <a href="/">
              <Image
                src="/img/brands/Logo2.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
            <a href="/">
              <Image
                src="/img/brands/Logo3.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
            <a href="/">
              <Image
                src="/img/brands/Logo4.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
            <a href="/">
              <Image
                src="/img/brands/Logo5.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
            <a href="/">
              <Image
                src="/img/brands/Logo6.svg"
                alt="brands_bg"
                width={140}
                height={140}
              />
            </a>
          </div>
        </div>
        <div className="w-[30%] flex flex-col justify-center">
          <h2 className="text-3xl font-bold">Explore Most Popular Brands</h2>
          <p className="mt-3">
            Life is hard enough already. Let us make it a little easier.
          </p>
          <p className="font-semibold mt-5">
            See All <ArrowRightAltIcon />
          </p>
        </div>
      </div>
    </div>
  );
}

export default PopularBrands;
