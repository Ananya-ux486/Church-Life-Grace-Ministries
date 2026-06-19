function SundayService() {
  return (
    <section id="events" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-500 uppercase font-semibold">
            Weekly Worship
          </span>

          <h2 className="text-5xl font-bold text-blue-900 mt-4">
            Sunday Service
          </h2>

        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Time
              </h3>

              <p className="mt-3 text-gray-600">
                Every Sunday
                <br />
                10:00 AM
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Location
              </h3>

              <p className="mt-3 text-gray-600">
                Life Grace Ministries
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-900">
                Worship
              </h3>

              <p className="mt-3 text-gray-600">
                Praise, Worship & Teaching
              </p>
            </div>

          </div>

          <div className="text-center mt-10">

            <button className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700">
              Join Service
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SundayService;