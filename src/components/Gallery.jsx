const products = [
  {
    id: 1,
    name: "Silver Chain",
    category: "Chains",
    image: "/chain.jpeg",
  },
  {
    id: 2,
    name: "Men Ring",
    category: "Rings",
    image: "/Ring.jpeg",
  },
  {
    id: 3,
    name: "Stylish Watch",
    category: "Watches",
    image: "/watch.jpeg",
  },
  {
    id: 4,
    name: "Men Bracelets",
    category: "Bracelets",
    image: "/bracelets.jpeg",
  },
];

export default function Accessories() {
  return (
    <section id="accessories" className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">

        <h2 className="mb-4 text-center text-3xl font-bold text-gray-800 md:text-4xl">
          Men’s Accessories Collection
        </h2>

        <p className="mb-12 text-center text-gray-500">
          Complete Your Look with Premium Accessories
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-xl bg-white p-4 shadow-md transition hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition hover:scale-105"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {product.name}
              </h3>

              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              {/* ✅ Updated Brand Color Button */}
              <a
                href="https://wa.me/919074039713"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-lg bg-[#0069B4] py-2 text-center text-sm font-medium text-white transition hover:bg-[#005a99]"
              >
                Enquire Now
              </a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}