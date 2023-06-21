import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { useEffect } from "react";

const scrollDuration = 500; // Animation duration in milliseconds

function HeroSection() {
  return (
    <div className="w-screen md:h-screen md:pb-5">
      <div className="py-24 md:py-0 w-full md:h-full md:px-24 bg-[url('/img/base.svg')]">
        <nav className="hidden md:block">
          <ul className="pt-2 flex justify-between items-center">
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Jewelry & Accessories
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Clothing & Shoes
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Home & Living
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Wedding & Party
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Toys & Entertainment
              </Link>
            </li>
            <li className="hover:border-b-2 hover:border-black hover:text-red-400">
              <Link
                to="search"
                smooth={true}
                duration={scrollDuration}
                offset={-50}
              >
                Art & Collection
              </Link>
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
