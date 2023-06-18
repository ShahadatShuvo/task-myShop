import Footer from "@/components/homepage/footer/Footer";
import HeroSection from "@/components/homepage/heroSection/HeroSection";
import Navbar from "@/components/homepage/navbar/Navbar";
import TrendingProducts from "@/components/homepage/trendingProducts/TrendingProducts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrendingProducts />
      <Footer />
    </div>
  );
}
