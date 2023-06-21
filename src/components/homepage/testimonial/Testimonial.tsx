"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { AllContext } from "../../../app/context";

const testimonialData = [
  {
    name: "Justin Pierre",
    position: "Product Seller",
    quote:
      "In 2 years, my business went from just me and my Shop site to 40 employees, my own fulfillment center and over 22 million dollars in revenue.",
    img: "/img/testimonial/person.svg",
  },
  {
    name: "John Doe",
    position: "Product Manager",
    quote:
      "In 4 years, my business went from just me and my Shop site to 40 employees, They are very relaiable.",
    img: "/img/testimonial/person2.png",
  },
];

function Testimonial() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);

  const [isLeftBtn, setIsLeftBtn] = useState(false);

  return (
    <div className="mt-6 md:mt-10 md:h-[60vh] w-screen md:mt-76 md:pb-48">
      <div className="h-full flex items-center gap-4 md:gap-0">
        <div className="w-[50%] relative">
          <Image
            src="/img/testimonial/background.svg"
            alt=""
            width={550}
            height={500}
            className="w-[550px]"
          />
          <Image
            src={isLeftBtn ? testimonialData[0].img : testimonialData[1].img}
            alt=""
            width={400}
            height={400}
            className="absolute top-0 right-0 md:right-24 bottom-0"
          />
        </div>
        <div className=" w-[50%] flex flex-col justify-center">
          <div className="flex">
            <h2 className="text-lg md:text-2xl font-bold">
              {isLeftBtn ? testimonialData[0].name : testimonialData[1].name}
            </h2>
            <Image
              src="/img/testimonial/emoji.svg"
              alt=""
              width={40}
              height={40}
            />
          </div>
          <p className="text-sm text-gray-500">
            {isLeftBtn
              ? testimonialData[0].position
              : testimonialData[1].position}
          </p>

          <p className="w-[90%] md:w-[60%] text-sm md:text-md mt-5 md:mt-10">
            {isLeftBtn ? testimonialData[0].quote : testimonialData[1].quote}
          </p>
          <div className="mt-5 md:mt-10">
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
              onClick={() => setIsLeftBtn((prevState) => !prevState)}
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
              onClick={() => setIsLeftBtn((prevState) => !prevState)}
            >
              <ArrowCircleRightOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
