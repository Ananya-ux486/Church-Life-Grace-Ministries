function BisophSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-500 uppercase font-semibold">
            Leadership
          </span>

          <h2 className="text-5xl font-bold text-blue-900 mt-4">
            Bishop & Reverend
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>

            <h3 className="text-2xl font-bold text-blue-900">
              Bishop Name
            </h3>

            <p className="mt-4 text-gray-600">
              Leading the ministry with faith, vision and dedication.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6"></div>

            <h3 className="text-2xl font-bold text-blue-900">
              Reverend Name
            </h3>

            <p className="mt-4 text-gray-600">
              Serving the church and community through God's word.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default BisophSection;