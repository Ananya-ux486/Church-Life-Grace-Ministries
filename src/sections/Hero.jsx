function Hero() {
  return (
    <section
     id="home"
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1438032005730-c779502df39b')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <span className="uppercase tracking-[4px] text-yellow-400">
            Welcome To
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            Life Grace Ministries
          </h1>

          <p className="mt-6 text-xl max-w-2xl">
            Transforming lives through faith, worship and community.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-red-600 px-8 py-4 rounded-lg font-semibold">
              Join Us
            </button>

            <button className="border border-white px-8 py-4 rounded-lg font-semibold">
              Donate Now
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;