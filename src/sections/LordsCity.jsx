function LordsCity() {
  return (
    <section
      id="lordscity"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-sky-100 via-cyan-50 to-indigo-100"
    >
      {/* Background Blur Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-300/30 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-sky-600 font-bold">
            Spiritual Growth
          </span>

          <h2 className="text-5xl lg:text-7xl font-black mt-5 leading-tight text-slate-900">
            Peace On The
            <br />
            Lord's City
          </h2>

          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-600 leading-9">
            Discover a place of peace, worship and spiritual
            transformation. We welcome everyone to experience
            God's love, grace and divine purpose.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[30px] shadow-xl border border-white hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">🙏</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Prayer
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Strengthen your relationship with God through
              prayer, worship and spiritual reflection.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[30px] shadow-xl border border-white hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">📖</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Faith
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Deepen your understanding of God's word through
              biblical teachings and fellowship.
            </p>

          </div>

          <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[30px] shadow-xl border border-white hover:-translate-y-3 transition-all duration-500">

            <div className="text-5xl mb-5">✨</div>

            <h3 className="text-2xl font-bold text-slate-900">
              Transformation
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Experience renewal, peace and God's purpose
              working powerfully in your life.
            </p>

          </div>

        </div>

        {/* CTA */}

        <div className="text-center mt-16">

          <button
            className="
            bg-gradient-to-r
            from-cyan-500
            to-violet-500
            text-white
            px-10
            py-4
            rounded-full
            font-bold
            text-lg
            hover:scale-105
            transition-all
            duration-300
            shadow-xl
            "
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default LordsCity;