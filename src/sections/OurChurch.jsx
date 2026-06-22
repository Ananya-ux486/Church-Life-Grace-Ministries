import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
function OurChurch() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Block 1 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={about1}
              alt="Bishop"
              className="w-full hover:scale-110 transition-all duration-700"
            />
          </div>

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              ABOUT OUR CHURCH
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              Faith, Hope &
              <span className="text-orange-500">
                {" "}Love
              </span>
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Life Grace Ministries International is committed to
              spreading the Gospel, transforming lives and building
              a strong community of believers through worship,
              prayer and service.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-3xl font-bold text-orange-500">
                  Mission
                </h3>

                <p className="mt-3 text-gray-600">
                  To share God's love and transform lives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow-lg">
                <h3 className="text-3xl font-bold text-orange-500">
                  Vision
                </h3>

                <p className="mt-3 text-gray-600">
                  Building a strong faith community worldwide.
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Block 2 */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              WORSHIP WITH US
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              Growing Together
              <span className="text-orange-500">
                {" "}In Faith
              </span>
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Join us every week for powerful worship services,
              prayer meetings, youth gatherings and community
              outreach programs that strengthen faith and bring
              people closer to God.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
              Learn More
            </button>

          </div>

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={about2}
              alt="Church Worship"
              className="w-full hover:scale-110 transition-all duration-700"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default OurChurch;