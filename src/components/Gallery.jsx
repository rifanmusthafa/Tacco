const products = [
  {
    id: 1,
    name: "Silver Chain",
    category: "Chains",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Men Ring",
    category: "Rings",
    image:
      "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Stylish Watch",
    category: "Watches",
    image:
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Leather Wallet",
    category: "Wallets",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
  },
]

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
              <p className="text-sm text-gray-500">{product.category}</p>

              <a
                href="https://wa.me/919074039713"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block rounded-lg bg-blue-600 py-2 text-center text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}