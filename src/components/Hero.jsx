export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/taccovideo.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Step Into Comfort
        </h1>

        <p className="mb-8 text-xl md:text-2xl">
          Premium sandals for every adventure. Quality crafted for your lifestyle.
        </p>

        <a
          href="#products"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}