"use client";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProduct";
import CategoryGrid from "@/components/CategoryGrid";
import Navbar from "@/components/NavBar";
import HeroCarousel from "@/components/HeroCarsousel";
import { useEffect, useState } from "react";
export default function Home() {
   const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
   <div> 
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"}`}>

    <Navbar scrolled={true} />
    </div>
    {/* <HeroSection/> */}

    <div > {/* Adjust as needed to match navbar height */}
  {/* Hero content here */}
    <HeroCarousel/>
</div>
    <CategoryGrid/>
    <FeaturedProducts/>
   </div>
  );
}
