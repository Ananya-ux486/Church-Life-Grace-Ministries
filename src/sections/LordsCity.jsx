function LordsCity() {
  return (
    <section
      id="lordscity"
      className="relative overflow-hidden py-28 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-700 text-white"
    >
      {/* Background Glow Effects */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-yellow-300 font-semibold">
            Spiritual Growth
          </span>

          <h2 className="text-5xl lg:text-7xl font-black mt-5 leading-tight">
            Peace On The
            <br />
            Lord's City
          </h2>

          <div className="w-32 h-1 bg-yellow-300 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-white/90 leading-9">
            Discover a place of peace, worship and spiritual
            transformation. We welcome everyone to experience
            God's love, grace and divine purpose.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">🙏</div>

            <h3 className="text-2xl font-bold">
              Prayer
            </h3>

            <p className="mt-4 text-white/80">
              Strengthen your relationship with God through prayer and worship.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">📖</div>

            <h3 className="text-2xl font-bold">
              Faith
            </h3>

            <p className="mt-4 text-white/80">
              Grow spiritually through biblical teachings and fellowship.
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">✨</div>

            <h3 className="text-2xl font-bold">
              Transformation
            </h3>

            <p className="mt-4 text-white/80">
              Experience renewal, peace and God's purpose for your life.
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="text-center mt-16">

          <button className="bg-white text-emerald-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-200 hover:scale-105 transition-all duration-300 shadow-xl">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default LordsCity;