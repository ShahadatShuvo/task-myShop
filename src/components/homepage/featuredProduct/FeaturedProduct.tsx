"use client";

import React, { useEffect, useRef, useState } from "react";
import { MutableRefObject } from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FeaturedCard from "./FeaturedCard";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import "../trendingProducts/card.css";
import { useContext } from "react";
import { AllContext } from "../../../app/context";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function FeaturedProduct() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);

  const [data, setData] = useState<any>(null);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/products?limit=10&skip=${40}`);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error("Request failed");
        }
      } catch (error) {
        console.log("error:", error);
      }
    };
    fetchData();
  }, []);

  const displayProducts = Array.isArray(data?.products)
    ? data.products.map((product: any) => (
        <FeaturedCard key={product.id} product={product} />
      ))
    : null;

  return (
    <div className="md:mt-32 mx-5 md:mx-32">
      <div className="text-center relative">
        <h1 className="text-xl md:text-3xl font-semibold">
          Featured Product For Pre-Order
        </h1>
        <a
          href="/"
          className="text-sm absolute right-5 top-10 md:top-2 hover:text-blue-400"
        >
          Discover Our Products <ArrowRightAltIcon />
        </a>
      </div>
      <div className="mt-24 flex justify-between items-center">
        <div className="w-[25%]">
          <div className="flex w-full">
            <IconButton
              aria-label="left"
              sx={{
                color: isLightTheme ? "gray" : "white",
              }}
              className={
                isLightTheme
                  ? "active:text-blue-400"
                  : "text-white active:text-blue-400"
              }
              onClick={scrollLeft}
            >
              <ArrowCircleLeftOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="right"
              sx={{
                color: isLightTheme ? "gray" : "white",
              }}
              className={
                isLightTheme
                  ? "active:text-blue-400"
                  : "text-white active:text-blue-400"
              }
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
          {displayProducts}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
