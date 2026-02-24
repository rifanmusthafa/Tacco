const galleryImages = [
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-10 text-3xl font-bold text-gray-700 md:text-4xl">
          Gallery
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg transition hover:opacity-90 hover:shadow-lg"
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
