"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const categories = [
  {
    title: "07 - Facial Exfoliant",
    img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/Facialexfoliant-Front.jpg?v=1689776745&width=360",
    hoverImg:
      "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/Facialexfoliant-Scene.jpg?v=1689777037&width=360",
    price: "$27,00 USD",
  },
  {
    title: "08 - Facial Cleaner",
    img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/Facialcleanser-Front.jpg?v=1689776719&width=360",
    hoverImg:
      "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/FaceCleanser-Scene.jpg?v=1689777069&width=360",
    price: "$27,00 USD",
  },
  {
    title: "09 - Face Serum",
    hoverImg:
      "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/jar-mockup-v8-front-view12.png?v=1689331548&width=360",
    img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/jar-mockup-v8-front-view11.png?v=1689331548&width=360",
    price: "$27,00 USD",
  },
  {
    title: "10 - Equalising Shampoo",
    img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/EqualisingShampoo-Front.jpg?v=1690449775&width=360",
    hoverImg:
      "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/EqualisingShampoo-Scene.jpg?v=1690449775&width=360",
    price: "$27,00 USD",
  },
];

const CategoryGrid = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 12 },
      },
    },
  });

  return (
    <section className="py-16 px-4 max-w-7xl text-black font-poppins mx-auto">
      <div className="flex justify-between">
        <h2 className="text-3xl mb-8 ">BEST SELLERS</h2>
        <button className="py-2 px-10 border-2 border-black">VIEW ALL</button>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {categories.map((cat, idx) => (
          <div key={idx} className="keen-slider__slide text-center">
            <div className="relative group overflow-hidden">
              <Image
                src={cat.img}
                alt={cat.title}
                className="w-full h-72 object-cover  duration-100 group-hover:opacity-0 "
              />
              <Image
                src={cat.hoverImg}
                alt={`${cat.title} hover`}
                className="w-full h-72 object-cover duration-100 opacity-0 group-hover:opacity-100 absolute inset-0"
              />

              <p className="p-2 text-sm font-semibold">{cat.title}</p>
              <p className="text-s">{cat.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
