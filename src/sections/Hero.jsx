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

          <h1 className="text-5xl md:text-7xl font-bold mt-4 bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
            Life Grace Ministries
          </h1>

          <p className="mt-6 text-xl max-w-2xl leading-relaxed">
  Join a welcoming community of faith where worship, prayer and service transform lives every day.
</p>

          <div className="mt-8 flex gap-4">

            <button className="bg-red-600 hover:bg-red-700 hover:scale-105 animate-bounce transition-all duration-300 px-8 py-4 rounded-lg font-semibold">
  Join Us
</button>

            <button className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-4 rounded-lg font-semibold">
            Donate Now
           </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;