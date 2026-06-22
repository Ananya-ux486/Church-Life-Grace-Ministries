import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

function OurChurch() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* About Church */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={about1}
              alt="Church"
              className="w-full hover:scale-110 transition-all duration-700"
            />
          </div>

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              ABOUT OUR CHURCH
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              Faith, Hope &
              <span className="text-orange-500"> Love</span>
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Life Grace Ministries International is committed to
              spreading the Gospel, transforming lives and building
              a strong community of believers through worship,
              prayer and service.
            </p>

          </div>

        </div>

        {/* Mission & Vision */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* Mission */}

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-[30px] shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <span className="uppercase tracking-[3px] text-orange-100 font-semibold">
              Our Mission
            </span>

            <h3 className="text-4xl font-black mt-4">
              Transforming Lives
            </h3>

            <p className="mt-5 text-lg leading-8 text-orange-50">
              Our mission is to share the Gospel of Jesus Christ,
              strengthen believers through prayer, worship and
              discipleship, and serve communities with love,
              compassion and faith.
            </p>

            <p className="mt-4 text-orange-100">
              We are committed to bringing hope, encouragement
              and spiritual growth to people from all walks of life.
            </p>

          </div>

          {/* Vision */}

          <div className="bg-white p-10 rounded-[30px] shadow-2xl border-l-[8px] border-orange-500 hover:-translate-y-2 transition-all duration-300">

            <span className="uppercase tracking-[3px] text-orange-500 font-semibold">
              Our Vision
            </span>

            <h3 className="text-4xl font-black mt-4 text-gray-900">
              Building God's Kingdom
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our vision is to build a Christ-centered community
              where individuals and families grow in faith,
              experience God's love and discover their purpose.
            </p>

            <p className="mt-4 text-gray-600">
              Through worship, outreach and fellowship,
              we seek to impact lives locally and globally
              while advancing God's Kingdom.
            </p>

          </div>

        </div>

        {/* Worship Section */}

        <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              WORSHIP WITH US
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              Growing Together
              <span className="text-orange-500"> In Faith</span>
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