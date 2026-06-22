import revGrace from "../assets/rev-grace.jpg";

function Leadership() {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="text-orange-500 uppercase tracking-[5px] font-semibold">
            Church Leadership
          </span>

          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 mt-4">
            Meet Our
            <span className="text-orange-500"> Leaders</span>
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            Dedicated servants of God leading Life Grace Ministries
            International with faith, vision and compassion.
          </p>

        </div>

        {/* Bishop Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

          <div>

            <span className="text-orange-500 uppercase font-semibold tracking-[4px]">
              Founder & Spiritual Leader
            </span>

            <h3 className="text-5xl font-black text-gray-900 mt-4">
              Bishop Dr. V. Odumma
            </h3>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Bishop Dr. V. Odumma is the founder and spiritual leader of
              Life Grace Ministries International. Through prayer,
              teaching and community outreach, he has dedicated his life
              to spreading the Gospel and helping people discover their
              purpose in Christ.
            </p>

            <div className="mt-10 flex gap-8 flex-wrap">

              <div className="bg-white shadow-xl rounded-3xl px-8 py-6">
                <h4 className="text-3xl font-black text-orange-500">
                  15+
                </h4>

                <p className="text-gray-600">
                  Years Ministry
                </p>
              </div>

              <div className="bg-white shadow-xl rounded-3xl px-8 py-6">
                <h4 className="text-3xl font-black text-orange-500">
                  Global
                </h4>

                <p className="text-gray-600">
                  Outreach Mission
                </p>
              </div>

            </div>

          </div>

          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden">

            <div className="h-[550px] flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50">

              <div className="text-center px-10">

                <h3 className="text-4xl font-bold text-gray-700">
                  Bishop Image
                </h3>

                <p className="text-gray-500 mt-4">
                  Waiting for approved image from Bishop.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Rev Grace Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="order-2 lg:order-1 bg-white rounded-[40px] shadow-2xl overflow-hidden group">

            <div className="overflow-hidden">

              <img
                src={revGrace}
                alt="Rev Grace Vitalis"
                className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-700"
              />

            </div>

            <div className="p-8 text-center">

              <h3 className="text-3xl font-bold text-gray-900">
                Reverend Grace Vitalis
              </h3>

              <p className="text-orange-500 font-semibold mt-2">
                Ministry Leader & Woman of Faith
              </p>

            </div>

          </div>

          <div className="order-1 lg:order-2">

            <span className="text-orange-500 uppercase font-semibold tracking-[4px]">
              Ministry Leadership
            </span>

            <h3 className="text-5xl font-black text-gray-900 mt-4">
              Reverend
              <span className="text-orange-500"> Grace Vitalis</span>
            </h3>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Reverend Grace Vitalis serves faithfully alongside the
              ministry, inspiring believers through worship, prayer,
              leadership and compassionate service.
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-9">
              Her passion for faith, encouragement and spiritual growth
              has impacted many lives and continues to strengthen the
              ministry's vision both locally and internationally.
            </p>

            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Learn More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Leadership;