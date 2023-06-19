import FeaturedProduct from "@/components/homepage/featuredProduct/FeaturedProduct";
import Footer from "@/components/homepage/footer/Footer";
import HeroSection from "@/components/homepage/heroSection/HeroSection";
import Navbar from "@/components/homepage/navbar/Navbar";
import PopularBrands from "@/components/homepage/popularBrands/PopularBrands";
import ShopByCategory from "@/components/homepage/shopByCategory/ShopByCategory";
import Testimonial from "@/components/homepage/testimonial/Testimonial";
import TrendingProducts from "@/components/homepage/trendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div>
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
