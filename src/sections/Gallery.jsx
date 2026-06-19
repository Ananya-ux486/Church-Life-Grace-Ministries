function Gallery() {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-900">
            Gallery
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="h-72 bg-gray-300 rounded-2xl"></div>
          <div className="h-72 bg-gray-300 rounded-2xl"></div>
          <div className="h-72 bg-gray-300 rounded-2xl"></div>
          <div className="h-72 bg-gray-300 rounded-2xl"></div>
          <div className="h-72 bg-gray-300 rounded-2xl"></div>
          <div className="h-72 bg-gray-300 rounded-2xl"></div>

        </div>

      </div>

    </section>
  );
}

export default Gallery;