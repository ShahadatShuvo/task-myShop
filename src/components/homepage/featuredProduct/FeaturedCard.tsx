"use client";

import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";

function FeaturedCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[250px] min-h-[250px] rounded-xl hover:shadow-xl">
        <Image
          src="/img/featured/ator.svg"
          alt=""
          width={100}
          height={100}
          className="object-cover h-[200px] w-[250px]"
        />
        <div className="p-3">
          <p className="text-center font-bold">Smart Television</p>

          <p className="text-sm text-center mt-2">CHANEL PARIS- M - Man</p>
          <p className="mt-2 text-blue-500 text-center">$ 56.00</p>
        </div>
      </div>
      <Button
        variant="contained"
        size="small"
        className="rounded-full bg-black mt-3"
      >
        Order Now
      </Button>
    </div>
  );
}

export default FeaturedCard;
