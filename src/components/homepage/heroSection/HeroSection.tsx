import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
  return (
    <div className="w-screen md:h-screen md:pb-5">
      <div className="py-24 md:py-0 w-full md:h-full md:px-24 bg-[url('/img/base.svg')]">
        <nav className="hidden md:block">
          <ul className="pt-2 flex justify-between items-center">
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Clothing & Shoes</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Home & Living</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Wedding & Party</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Toys & Entertainment</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Art & Collection</a>
            </li>
          </ul>
        </nav>
        <div className="md:mt-3">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
