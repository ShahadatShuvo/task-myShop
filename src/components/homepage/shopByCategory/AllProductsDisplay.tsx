import React from "react";
import CategoryCard from "./CategoryCard";
import Loading from "./Loading";

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

function AllProductsDisplay({ data }: { data: ProductCardProps[] }) {
  const displayProducts = Array.isArray(data) ? (
    data.map((product: any) => (
      <CategoryCard key={product.id} product={product} />
    ))
  ) : (
    <Loading />
  );

  return (
    <div className="mt-16 w-[80vw] flex flex-wrap gap-7 flax-wrap justify-center">
      {displayProducts}
    </div>
  );
}

export default AllProductsDisplay;
