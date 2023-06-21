"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

function Checkout() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-lg md:text-4xl font-semibold">
      <h2 className="mb-5">Checkout page is in under construction</h2>
      <Button variant="contained" color="primary" className="bg-black">
        <Link href="/"> Back to Home</Link>
      </Button>
    </div>
  );
}

export default Checkout;
