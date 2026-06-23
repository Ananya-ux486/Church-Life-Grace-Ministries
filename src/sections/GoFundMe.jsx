import { useState } from "react";

function GoFundMe() {
  const [showDonateModal, setShowDonateModal] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
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

            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-8 mt-16">

              {/* Outreach */}

              <div
                onClick={() => scrollToSection("about")}
                className="cursor-pointer bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl mb-4">🙏</div>

                <h3 className="text-2xl font-bold text-cyan-500">
                  Outreach
                </h3>

                <p className="text-gray-600 mt-4">
                  Reaching communities through faith, hope and service.
                </p>

                <p className="mt-6 text-cyan-500 font-semibold">
                  Learn More →
                </p>
              </div>

              {/* Families */}

              <div
                onClick={() => scrollToSection("counselling")}
                className="cursor-pointer bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>

                <h3 className="text-2xl font-bold text-purple-500">
                  Families
                </h3>

                <p className="text-gray-600 mt-4">
                  Supporting families through prayer, guidance and care.
                </p>

                <p className="mt-6 text-purple-500 font-semibold">
                  Learn More →
                </p>
              </div>

              {/* Youth */}

              <div
                onClick={() => scrollToSection("youth-services")}
                className="cursor-pointer bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-3 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500"
              >
                <div className="text-5xl mb-4">🌍</div>

                <h3 className="text-2xl font-bold text-blue-500">
                  Youth Ministry
                </h3>

                <p className="text-gray-600 mt-4">
                  Empowering the next generation through faith and leadership.
                </p>

                <p className="mt-6 text-blue-500 font-semibold">
                  Learn More →
                </p>
              </div>
            </div>

            {/* Donate Button */}

            <div className="text-center mt-16">
              <button
                onClick={() => setShowDonateModal(true)}
                className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-cyan-300 transition-all duration-300 shadow-xl"
              >
                Donate & Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}

      {showDonateModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative shadow-2xl">

            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-3xl font-bold text-center text-blue-900">
              Support Our Ministry
            </h2>

            <p className="mt-4 text-gray-600 text-center">
              Your generous contribution helps us continue spreading
              the Gospel, supporting families and empowering youth.
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <button className="bg-blue-100 py-3 rounded-xl font-semibold">
                £10
              </button>

              <button className="bg-blue-100 py-3 rounded-xl font-semibold">
                £25
              </button>

              <button className="bg-blue-100 py-3 rounded-xl font-semibold">
                £50
              </button>
            </div>

            <button
              onClick={() =>
                window.open(
  "https://pleasegofundme.com/",
  "_blank"
)
              }
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-bold"
            >
              Proceed To Donate
            </button>

          </div>
        </div>
      )}
    </>
  );
}

export default GoFundMe;