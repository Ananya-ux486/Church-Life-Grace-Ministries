import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.png";

function OurChurch() {
  return (
    <section id="about" className="py-24 bg-[#f8f8f8]">

      <div className="max-w-7xl mx-auto px-6">

        {/* About Church */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images Section */}

          <div className="relative h-[650px]">

            {/* Main Large Image */}

            <img
              src={about3}
              alt="Church"
              className="
                absolute
                right-0
                top-0
                w-[500px]
                h-[600px]
                object-cover
                rounded-[50px]
                shadow-2xl
                z-10
              "
            />

            {/* Small Overlapping Image */}

            <img
              src={about1}
              alt="Ministry"
              className="
                absolute
                left-0
                bottom-0
                w-[260px]
                h-[340px]
                object-cover
                rounded-[40px]
                border-[8px]
                border-white
                shadow-2xl
                z-20
              "
            />

            {/* Decorative Circle */}

            <div className="absolute top-10 left-20 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

          </div>

          {/* Content */}

          <div>

            <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
              ABOUT OUR CHURCH
            </span>

            <h2 className="text-5xl lg:text-7xl font-black mt-4 leading-tight">
              Faith, Hope &
              <span className="text-orange-500"> Love</span>
            </h2>

            <p className="text-gray-600 mt-8 text-lg leading-9">
              Life Grace Ministries International is dedicated to spreading
              the Gospel of Jesus Christ, transforming lives and building a
              strong community of believers through worship, prayer and service.
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-9">
              Through faith-centered teaching, leadership development and
              outreach programs, we help individuals discover God's purpose
              and strengthen their spiritual journey.
            </p>

            <p className="text-gray-600 mt-6 text-lg leading-9">
              Our mission is to bring hope, healing and encouragement to
              families and communities while creating an environment where
              everyone can experience God's love and grace.
            </p>

          </div>

        </div>

        {/* Mission & Vision */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-[30px] shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <span className="uppercase tracking-[3px] text-orange-100 font-semibold">
              Our Mission
            </span>

            <h3 className="text-4xl font-black mt-4">
              Transforming Lives
            </h3>

            <p className="mt-5 text-lg leading-8 text-orange-50">
              Our mission is to share the Gospel of Jesus Christ,
              strengthen believers through prayer, worship and discipleship,
              and serve communities with love, compassion and faith.
            </p>

          </div>

          <div className="bg-white p-10 rounded-[30px] shadow-2xl border-l-[8px] border-orange-500 hover:-translate-y-2 transition-all duration-300">

            <span className="uppercase tracking-[3px] text-orange-500 font-semibold">
              Our Vision
            </span>

            <h3 className="text-4xl font-black mt-4 text-gray-900">
              Building God's Kingdom
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our vision is to build a Christ-centered community where
              individuals and families grow in faith, experience God's
              love and discover their purpose.
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