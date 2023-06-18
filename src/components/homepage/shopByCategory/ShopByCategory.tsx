import React from "react";
import CategoryCard from "./CategoryCard";

function ShopByCategory() {
  return (
    <div className="mt-64 mx-24">
      <div>
        <h1 className="capitalize text-4xl font-semibold">Shop by category</h1>
        <p className="mt-5">
          Life is hard enough already. Let us make it a little easier.
        </p>
      </div>
      <div>
        <CategoryCard />
      </div>
    </div>
  );
}

export default ShopByCategory;
