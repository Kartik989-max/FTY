const HeroSection = () => (
  <section className="relative h-[90vh] bg-cover bg-center" style={{ backgroundImage: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/hero-new-variant.jpg?v=1689851788&width=2160" }}>
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4">
      <div className="text-white max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Glow Naturally</h1>
        <p className="text-lg md:text-xl mb-6">Discover skincare made with love</p>
        <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">Shop Now</button>
      </div>
    </div>
  </section>
);
export default HeroSection;

