"use client";

import { IconButton } from "@mui/material";
import Image from "next/image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import OrderSuccess from "./Ordersuccess";

interface ProductCardProps {
  id: number | string;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

function CategoryCard({ product }: { product: ProductCardProps }) {
  console.log("Img:", product.images[0]);
  return (
    <div>
      <div
        className="p-3 border-2 rounded-xl hover:shadow-xl min-w-[250px] 
      min-h-[200px]"
      >
        <Image
          // src="/img/category/tv.svg"
          src={product.images[0]}
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

          <OrderSuccess />
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
