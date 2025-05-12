"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons

const HeroCarousel = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    created() {
      setLoaded(true);
    },
  });

  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slider]);

  useEffect(() => {
    if (!slider.current) return;
    slider.current.on("slideChanged", (s) => setCurrentSlide(s.track.details.rel));
  }, [slider]);

  return (
    <div className="relative">
      {/* Slides */}
      <div ref={sliderRef} className="keen-slider h-screen w-full">
        {/* Slide 1: Video */}
        <div className="keen-slider__slide relative flex items-center justify-center bg-black">
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/videos/c/vp/80692e0eb9a84e9ca13c8422fd70bb59/80692e0eb9a84e9ca13c8422fd70bb59.HD-1080p-7.2Mbps-26728069.mp4?v=0" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-white text-center px-4">
            <p className="p-2">99.5% NATURAL. 100% YOU.</p>
            <h1 className="py-2 text-4xl md:text-6xl font-bold mb-4  tracking-wide font-medium">GLOW FROM WITHIN, NATURALLY</h1>
            <button className="bg-transparent px-10 py-4 text-sm border-white border-2 text-white">SHOP NOW</button>
          </div>
        </div>

        {/* Slide 2: Image + Left Text */}
        <div className="keen-slider__slide relative flex items-center bg-cover bg-center" >
          <div className="absolute flex bg-black/30"/> 
          <div className="flex-1 relative z-10 text-white max-w-xl ml-8 md:ml-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Reveal Radiance</h2>
            <p className="text-lg md:text-xl">
              Skincare that reflects your inner glow. Discover our best-selling products for all skin types.
            </p>
          </div>
            <div className="flex-1">
          <img src="https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/hero-new-variant.jpg?v=1689851788&width=2160"/>
        </div>
        </div>
      
      </div>

      {/* Arrows */}
      {/* {loaded && slider.current && (
        <>
          <button
            onClick={() => slider.current?.prev()}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 p-2 rounded-full text-white"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )} */}
{loaded && slider.current && (
  <div className="absolute bottom-4 right-6 z-20 flex items-center gap-6">
    <button
      onClick={() => slider.current?.prev()}
      className="text-white text-2xl hover:scale-110 transition transform -scale-x-100"
    >

       <svg width="42" height="40"  viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.2383 29.3713C33.565 24.2506 35.4083 22.1009 40.0008 20.0141C35.3058 17.7032 33.4834 15.5456 31.2383 10.6288" data-ignore-fill="" stroke="#fff"></path>
  <path d="M0 20H39.5675" stroke="#fff"></path>
</svg>

    </button>
    <button
      onClick={() => slider.current?.next()}
      className="text-white text-2xl hover:scale-110 transition"
    >
     <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 20H39.5675" stroke="#ffff"></path>
  <path d="M31.2383 29.3713C33.565 24.2506 35.4083 22.1009 40.0008 20.0141C35.3058 17.7032 33.4834 15.5456 31.2383 10.6288" data-ignore-fill="" stroke="#ffff"></path>
</svg>
    </button>
  </div>
)}
    </div>
  );
};

export default HeroCarousel;
