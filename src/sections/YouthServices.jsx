import { useState } from "react";

function YouthServices() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="youth-services" className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
              alt="Youth Ministry"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Content */}
          <div>

            <span className="text-red-500 uppercase font-semibold tracking-[3px]">
              Next Generation
            </span>

            <h2 className="text-5xl font-bold text-blue-900 mt-4">
              Youth Services
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our Youth Ministry empowers young people to grow
              spiritually, develop leadership skills, and build
              meaningful relationships through worship, fellowship,
              outreach and discipleship.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              {/* Join Button */}
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className="
                bg-red-600
                hover:bg-red-700
                text-white
                px-8
                py-4
                rounded-lg
                font-semibold
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Join Youth Ministry
              </button>

              {/* Learn More Button */}
              <button
                onClick={() => setShowMore(!showMore)}
                className="
                border-2
                border-blue-900
                text-blue-900
                px-8
                py-4
                rounded-lg
                font-semibold
                hover:bg-blue-900
                hover:text-white
                transition-all
                duration-300
                "
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>

            </div>

            {/* Expandable Content */}

            {showMore && (
              <div className="mt-8 bg-blue-50 p-6 rounded-2xl shadow-lg">

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Youth Ministry Activities
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li>✅ Weekly Youth Fellowship & Worship</li>

                  <li>✅ Leadership Development Programs</li>

                  <li>✅ Bible Study & Prayer Sessions</li>

                  <li>✅ Community Outreach Activities</li>

                  <li>✅ Mentorship & Spiritual Growth</li>

                  <li>✅ Music, Arts & Creative Ministry</li>

                  <li>✅ Youth Conferences & Special Events</li>

                </ul>

                <p className="mt-5 text-gray-600 leading-7">
                  Our vision is to raise a generation of young people
                  who are spiritually grounded, purpose-driven and
                  committed to making a positive impact in their
                  communities through faith and service.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default YouthServices;