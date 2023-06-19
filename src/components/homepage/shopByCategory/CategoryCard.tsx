"use client";

import { IconButton } from "@mui/material";
import { useContext } from "react";
import { AllContext } from "../../../app/context";

import Image from "next/image";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import React from "react";
import OrderSuccess from "./Ordersuccess";
import CartViewDialogue from "./CartViewDialogue";

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
  qty: number;
  thumbnail: string;
  title: string;
}

function CategoryCard({ product }: { product: ProductCardProps }) {
  const { allProducts, increaseCartValue } = useContext(AllContext);

  const onHandleClick = (props: ProductCardProps) => {
    // setCartItems((prevState: ProductCardProps[]) => [...prevState, props]);
    increaseCartValue(props);
  };
  return (
    <div>
      <div
        className="p-3 border-2 rounded-xl hover:shadow-xl w-[250px] 
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
        <p className="mt-3 font-bold truncate">{product.title}</p>

        <div className="mt-5 flex justify-between items-center">
          <p>$ {product.price}</p>

          <div className="flex items-center">
            <CartViewDialogue product={product} />
            <OrderSuccess onHandleClick={onHandleClick} product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
