"use client";

import React, { useRef } from "react";
import { MutableRefObject } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FeaturedCard from "./FeaturedCard";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import "../trendingProducts/card.css";

function FeaturedProduct() {
  const scrollRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft -= 400; // Adjust the scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current !== null) {
      scrollRef.current.scrollLeft += 400; // Adjust the scroll amount as needed
    }
  };
  return (
    <div className="mt-32 mx-32">
      <div className="text-center relative">
        <h1 className="text-3xl font-semibold">
          Featured Product For Pre-Order
        </h1>
        <a
          href="/"
          className="text-sm absolute right-5 top-2 hover:text-blue-400"
        >
          Discover Our Products <ArrowRightAltIcon />
        </a>
      </div>
      <div className="mt-24 flex justify-between items-center">
        <div className="w-[25%]">
          <div className="flex w-full">
            <IconButton
              aria-label="left"
              className="active:text-blue-400"
              onClick={scrollLeft}
            >
              <ArrowCircleLeftOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="right"
              className="active:text-blue-400"
              onClick={scrollRight}
            >
              <ArrowCircleRightOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div
          className="flex justify-between gap-5 overflow-x-auto space-x-4 custom-scrollbar"
          style={{
            scrollBehavior: "smooth",
          }}
          ref={scrollRef}
        >
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
