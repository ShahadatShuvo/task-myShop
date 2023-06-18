"use client";

import React, { useRef } from "react";
import TrendingprodCard from "./prodCard";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import "./card.css";

function TrendingProducts() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400; // Adjust the scroll amount as needed
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400; // Adjust the scroll amount as needed
  };
  return (
    <div className="w-screen h-[50vh] mt-32">
      <div className="my-10 flex flex-col items-center">
        <h1 className="capitalize text-4xl font-semibold">
          Shop our trending products
        </h1>
        <p className="mt-10 text-lg">
          Life is hard enough already. Let us make it a little easier.
        </p>
      </div>
      <div className="mb-24 flex justify-center items-center relative">
        <ul className="w-[30%] flex justify-between">
          <li>
            <a
              href="/"
              className="font-semibold hover:border-b-2 hover:border-black"
            >
              Fashion
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold hover:border-b-2 hover:border-black"
            >
              Fashion
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold hover:border-b-2 hover:border-black"
            >
              Fashion
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-semibold hover:border-b-2 hover:border-black"
            >
              Fashion
            </a>
          </li>
        </ul>
        <div className="absolute right-16">
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
      <div className="flex justify-center">
        <div
          className="py-10 w-[90%] flex gap-5 overflow-x-auto   space-x-4 custom-scrollbar"
          style={{
            scrollBehavior: "smooth",
          }}
          ref={scrollRef}
        >
          {/* cart start */}
          <TrendingprodCard />
          <TrendingprodCard />
          <TrendingprodCard />
          <TrendingprodCard />
          <TrendingprodCard />
          <TrendingprodCard />
          <TrendingprodCard />
          {/* cart end */}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
