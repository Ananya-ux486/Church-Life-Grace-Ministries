function Counselling() {
  return (
    <section
      id="counselling"
      className="py-24 bg-gradient-to-br from-[#f7f2eb] via-[#fdfaf5] to-[#f5efe6]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Guidance & Support
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-[#071B34] mt-4">
            Christian Counselling
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-8">
            We provide spiritual guidance, prayer support and confidential
            counselling to help individuals, couples and families navigate
            life's challenges through faith, wisdom and God's love.
          </p>

        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}

          <div className="bg-white p-10 rounded-[35px] shadow-xl border border-orange-100">

            <h3 className="text-3xl font-bold text-[#071B34] mb-6">
              How We Can Help
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  🙏
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#071B34]">
                    Prayer Support
                  </h4>

                  <p className="text-gray-600">
                    Receive spiritual encouragement and dedicated prayer.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  ❤️
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#071B34]">
                    Family Guidance
                  </h4>

                  <p className="text-gray-600">
                    Support for relationships, marriage and family matters.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  ✨
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#071B34]">
                    Spiritual Growth
                  </h4>

                  <p className="text-gray-600">
                    Grow deeper in faith through biblical counselling.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-[35px] shadow-2xl">

            <h3 className="text-3xl font-bold mb-6">
              Need Counselling?
            </h3>

            <p className="text-lg leading-8 text-orange-50">
              Our ministry team is available to provide confidential,
              compassionate and faith-based counselling for individuals
              and families seeking guidance.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-black">100+</h4>
                <p className="mt-2">Families Supported</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <h4 className="text-4xl font-black">24/7</h4>
                <p className="mt-2">Prayer Support</p>
              </div>

            </div>

            <button className="mt-10 bg-white text-orange-600 font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300">
              Request Counselling
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Counselling;