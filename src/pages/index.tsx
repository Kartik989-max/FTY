
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProduct";
import CategoryGrid from "@/components/CategoryGrid";
import Navbar from "@/components/NavBar";
import HeroCarousel from "@/components/HeroCarsousel";
export default function Home() {
  return (
   <div> 
    <Navbar/>
    {/* <HeroSection/> */}
    <HeroCarousel/>
    <CategoryGrid/>
    <FeaturedProducts/>
   </div>
  );
}
