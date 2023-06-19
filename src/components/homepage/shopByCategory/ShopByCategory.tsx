"use client";

import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { useContext } from "react";
import { AllContext } from "../../../app/context";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

function ShopByCategory() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);
  const [data, setData] = useState<any>(null);

  console.log("data:", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${apiUrl}/products`);
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

  return (
    <div className="mt-64 mx-24">
      <div>
        <h1 className="capitalize text-4xl font-semibold">Shop by category</h1>
        <p className="mt-5">
          Life is hard enough already. Let us make it a little easier.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-16 w-[80vw] flex flex-wrap gap-7 flax-wrap justify-center">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}

export default ShopByCategory;
