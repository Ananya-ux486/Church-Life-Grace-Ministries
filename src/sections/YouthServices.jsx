function YouthServices() {
  return (
    <section className="py-24 bg-white">

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

            <span className="text-red-500 uppercase font-semibold">
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

            <div className="mt-8 flex gap-4">

              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold">
                Join Youth Ministry
              </button>

              <button className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold">
                Learn More
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default YouthServices;