import { useEffect, useState, useRef } from "react";
const products = [
  {
    id: 1,
    name: "Sports Shoes",
    image:
      "/ai-generated-sports-shoes-for-the-future-running-shoes-for-the-future-isolated-on-transparent-background-free-png.png",
  },
  {
    id: 2,
    name: "Sliders",
    image:
      "/comfortable-home-slippers-design-isolated-on-transparent-background-png.png",
  },
  {
    id: 3,
    name: "Formal Shoes",
    image:
      "/mens-shoe-isolated-on-transparent-background-free-png.png",
  },
  {
    id: 4,
    name: "Slippers",
    image:
      "/summer-slipper-composition-isolated-3d-render-png.png",
  },
  {
    id: 5,
    name: "Boots",
    image:
      "/vecteezy_black-leather-chelsea-boots-on-transparent-background_48475068.png",
  },
  {
    id: 6,
    name: "Casual Shoes",
    image:
      "/vecteezy_blue-converse-sneakers_48896979.png",
  },
];


// Duplicate first item for smooth infinite loop
const extendedProducts = [...products, products[0]];

export default function Products() {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const CARD_WIDTH = 300;
  const GAP = 24;
  const TOTAL_WIDTH = CARD_WIDTH + GAP;

  // Auto Slide
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Infinite Loop Reset
  useEffect(() => {
    if (index === products.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 500);

      setTimeout(() => {
        setEnableTransition(true);
      }, 550);
    }
  }, [index]);

  // Center Active Card
  const getCenterOffset = () => {
    if (!containerRef.current) return 0;
    const containerWidth = containerRef.current.offsetWidth;
    return containerWidth / 2 - CARD_WIDTH / 2;
  };

  return (
    <section id="products" className="bg-blue-50 py-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-3xl font-bold text-gray-700 md:text-4xl text-center">
          Our Products
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div
          className={`flex ${
            enableTransition
              ? "transition-transform duration-500 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(${
              getCenterOffset() - index * TOTAL_WIDTH
            }px)`,
          }}
        >
          {extendedProducts.map((product, i) => (
            <article
              key={i}
              className="mr-6 flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <div className="h-80 w-full flex items-center justify-center bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-700 text-lg">
                  {product.name}
                </h3>
                <p className="mt-1 text-xl font-bold text-blue-600">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}