import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
  return (
    <div className="w-screen h-screen pb-5">
      <div className="w-full h-full px-24 bg-[url('/img/base.svg')]">
        <nav>
          <ul className="pt-2 flex justify-between items-center">
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <a href="/">Jewelry & Accessories</a>
            </li>
          </ul>
        </nav>
        <div className="mt-3">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
