import Footer from "@/components/homepage/footer/Footer";
import HeroSection from "@/components/homepage/heroSection/HeroSection";
import Navbar from "@/components/homepage/navbar/Navbar";
import ShopByCategory from "@/components/homepage/shopByCategory/ShopByCategory";
import TrendingProducts from "@/components/homepage/trendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingProducts />
      <ShopByCategory />
      <Footer />
    </div>
  );
}
