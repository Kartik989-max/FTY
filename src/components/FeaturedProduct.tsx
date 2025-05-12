const products = [
  { title: "Rose Moisturizer", img: "/product1.jpg", price: "$25" },
  { title: "Matte Lipstick", img: "/product2.jpg", price: "$15" },
  { title: "Hair Serum", img: "/product3.jpg", price: "$30" },
];

const FeaturedProducts = () => (
  <section className="py-12 px-4 max-w-7xl mx-auto">
    <h2 className="text-2xl font-bold mb-8 text-center">Featured Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, idx) => (
        <div key={idx} className="border rounded-lg p-4 hover:shadow-lg transition">
          <img src={product.img} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);
export default FeaturedProducts;
