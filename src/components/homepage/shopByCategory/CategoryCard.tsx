"use client";

import { IconButton } from "@mui/material";
import Image from "next/image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function CategoryCard() {
  return (
    <div>
      <div
        className="p-3 border-2 rounded-xl hover:shadow-xl min-w-[250px] 
      min-h-[200px]"
      >
        <Image
          src="/img/category/tv.svg"
          alt=""
          width={80}
          height={80}
          className="object-cover h-[100px] w-full"
        />
        <p className="mt-3 font-bold">Smart Television</p>

        <div className="mt-5 flex justify-between items-center">
          <p>
            $ 56.00 <span className="ml-3 text-red-400">$ 60.00</span>
          </p>
          <IconButton aria-label="delete" className="active:text-blue-400">
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
