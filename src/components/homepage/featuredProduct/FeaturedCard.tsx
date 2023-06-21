"use client";

import Image from "next/image";
import { useContext } from "react";
import { AllContext } from "../../../app/context";
import React from "react";
import OrderSuccess from "../shopByCategory/Ordersuccess";

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

function FeaturedCard({ product }: { product: ProductCardProps }) {
  const { allProducts, increaseCartValue } = useContext(AllContext);

  const onHandleClick = (props: ProductCardProps) => {
    // setCartItems((prevState: ProductCardProps[]) => [...prevState, props]);
    increaseCartValue(props);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="min-w-[250px] min-h-[250px] rounded-xl hover:shadow-xl">
        <Image
          // src="/img/featured/ator.svg"
          src={product.images[0]}
          alt=""
          width={100}
          height={100}
          className="object-cover h-[200px] w-[250px]"
        />
        <div className="p-3">
          <p className="text-center font-bold">{product.title}</p>

          <p className="text-sm text-center mt-2">{product.brand}</p>
          <p className="mt-2 text-blue-500 text-center">$ {product.price}</p>
        </div>
      </div>

      <OrderSuccess
        type="btn"
        onHandleClick={onHandleClick}
        product={product}
      />
    </div>
  );
}

export default FeaturedCard;
