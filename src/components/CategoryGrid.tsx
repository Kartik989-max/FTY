const categories = [
  { title: "Skincare", img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/Facialexfoliant-Scene.jpg?v=1689777037&width=360" },
  { title: "Makeup", img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/Facialcleanser-Front.jpg?v=1689776719&width=360"},
  { title: "Haircare", img: "https://sahara-cosmetics-digifist.myshopify.com/cdn/shop/files/jar-mockup-v8-front-view12.png?v=1689331548&width=360"},
];

const CategoryGrid = () => (
  <section className="py-12 px-4 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-8 text-center">Shop by Category</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((cat, idx) => (
        <div key={idx} className="relative group">
          <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover rounded-lg" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-white text-xl font-semibold">{cat.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default CategoryGrid;
