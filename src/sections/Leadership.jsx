import { useState } from "react";
import bishopImage from "../assets/bisoph1.jpeg";
import revGrace from "../assets/rev-grace.jpg";

function Leadership() {
   const [showMore, setShowMore] = useState(false);
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

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
  <img
    src={bishopImage}
    alt="Bishop Dr. V. Odumma"
    className="w-full h-[650px] object-cover hover:scale-105 transition-all duration-700"
  />
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

            <button
  onClick={() => setShowMore(!showMore)}
  className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
>
  {showMore ? "Show Less" : "Learn More"}
</button>
{showMore && (
  <div className="mt-10 bg-white p-8 rounded-3xl shadow-xl border border-orange-100">

    <h4 className="text-3xl font-bold text-orange-500 mb-5">
      Expanding God's Kingdom Through Love & Service
    </h4>

    <p className="text-gray-600 leading-8 text-lg">
      Reverend Grace Vitalis plays a vital role in supporting the vision
      of Life Grace Ministries International. Through worship leadership,
      prayer ministry and community outreach, she encourages believers
      to grow deeper in their relationship with God and live lives filled
      with faith, hope and purpose.
    </p>

    <p className="text-gray-600 leading-8 text-lg mt-5">
      Her ministry focuses on empowering women, strengthening families,
      mentoring young people and extending compassion to those in need.
      She continues to inspire individuals through biblical teachings,
      prayer gatherings and spiritual encouragement.
    </p>

    <p className="text-gray-600 leading-8 text-lg mt-5">
      Together with the leadership team, she supports outreach programs,
      community development initiatives and faith-based projects that
      impact lives both locally and internationally.
    </p>

  </div>
)}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Leadership;