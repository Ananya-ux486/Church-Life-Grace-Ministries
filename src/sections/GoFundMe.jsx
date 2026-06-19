function GoFundMe() {
  return (
    <section className="py-24 bg-gradient-to-r from-red-600 via-red-500 to-yellow-500">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>

            <span className="uppercase text-white font-semibold">
              Support Our Mission
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              Please Go Fund Me
            </h2>

            <p className="mt-6 text-white text-lg leading-8">
              Help us expand our ministry, support outreach programs,
              youth development initiatives and community services.
              Every contribution makes a difference.
            </p>

            <button className="mt-8 bg-white text-red-600 px-8 py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition">
              Donate Now
            </button>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h3 className="text-2xl font-bold text-blue-900">
              Fundraising Goal
            </h3>

            <div className="mt-6">

              <div className="flex justify-between mb-2">
                <span>$12,000 Raised</span>
                <span>60%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-5">
                <div className="bg-green-500 h-5 rounded-full w-3/5"></div>
              </div>

            </div>

            <p className="mt-6 text-gray-600">
              Together we can reach more lives and build stronger communities.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GoFundMe;