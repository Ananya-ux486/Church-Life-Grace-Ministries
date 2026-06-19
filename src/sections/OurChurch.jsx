function OurChurch() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65"
              alt="Church"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Right Content */}
          <div>

            <span className="text-red-500 font-semibold uppercase">
              About Our Church
            </span>

            <h2 className="text-5xl font-bold text-blue-900 mt-4">
              Growing Together In Faith
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Life Grace Ministries is committed to spreading the
              Gospel, serving communities, and helping people
              strengthen their relationship with God through
              worship, prayer, and fellowship.
            </p>

            <div className="mt-8">

              <h3 className="text-2xl font-bold text-blue-800">
                Mission
              </h3>

              <p className="mt-2 text-gray-600">
                To share God's love and transform lives through
                faith and service.
              </p>

              <h3 className="text-2xl font-bold text-blue-800 mt-6">
                Vision
              </h3>

              <p className="mt-2 text-gray-600">
                Building a strong and compassionate faith
                community across the world.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OurChurch;