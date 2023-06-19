"use client";

import FeaturedProduct from "@/components/homepage/featuredProduct/FeaturedProduct";
import Footer from "@/components/homepage/footer/Footer";
import HeroSection from "@/components/homepage/heroSection/HeroSection";
import Navbar from "@/components/homepage/navbar/Navbar";
import PopularBrands from "@/components/homepage/popularBrands/PopularBrands";
import ShopByCategory from "@/components/homepage/shopByCategory/ShopByCategory";
import Testimonial from "@/components/homepage/testimonial/Testimonial";
import TrendingProducts from "@/components/homepage/trendingProducts/TrendingProducts";
import { useContext } from "react";
import { AllContext } from "../app/context";

export default function Home() {
  const { isLightTheme, toggleTheme, allProducts } = useContext(AllContext);

  return (
    <div className={isLightTheme ? "" : "bg-gray-900 text-white"}>
      <Navbar />
      <HeroSection />
      <TrendingProducts />
      <ShopByCategory />
      <FeaturedProduct />
      <PopularBrands />
      <Testimonial />
      <Footer />
    </div>
  );
}
