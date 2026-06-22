function GoFundMe() {
  return (
    <section
      id="gofundme"
      className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-lg rounded-[40px] p-12 border border-white/20 shadow-2xl">

          {/* Heading */}

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-cyan-300 font-semibold">
              Support Our Mission
            </span>

            <h2 className="text-5xl lg:text-7xl font-black text-white mt-4">
              Please Go Fund Me
            </h2>

            <p className="text-white/90 text-xl max-w-3xl mx-auto mt-8 leading-9">
              Help Life Grace Ministries continue spreading the Gospel,
              supporting families, empowering youth and reaching
              communities with God's love and compassion.
            </p>

          </div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-cyan-500/30 transition-all duration-500">

              <div className="text-5xl mb-4">🙏</div>

              <h3 className="text-2xl font-bold text-cyan-500">
                Outreach
              </h3>

              <p className="text-gray-600 mt-4">
                Reaching communities through faith, hope and service.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-purple-500/30 transition-all duration-500">

              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>

              <h3 className="text-2xl font-bold text-purple-500">
                Families
              </h3>

              <p className="text-gray-600 mt-4">
                Supporting families through prayer, guidance and care.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-blue-500/30 transition-all duration-500">

              <div className="text-5xl mb-4">🌍</div>

              <h3 className="text-2xl font-bold text-blue-500">
                Youth Ministry
              </h3>

              <p className="text-gray-600 mt-4">
                Empowering the next generation through faith and leadership.
              </p>

            </div>

          </div>

          {/* Bottom CTA */}

          <div className="text-center mt-16">

            <button className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-cyan-300 transition-all duration-300 shadow-xl">
              Donate & Support
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GoFundMe;