import thursday from "../assets/thursday.jpg";

function ThursdayService() {
  return (
    <section id="thursday-service" className="py-24 bg-gradient-to-b from-[#0d1326] to-black">

      <div className="max-w-7xl mx-auto px-6">

        <div className="group relative overflow-hidden rounded-[35px] shadow-2xl">

          <img
            src={thursday}
            alt="Thursday Service"
            className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute bottom-12 left-12">

            <span className="bg-red-600 px-6 py-2 rounded-full text-white font-semibold">
              Every Thursday
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-white mt-6">
              Wonders &
              <br />
              Deliverance Night
            </h2>

            <p className="text-orange-300 text-2xl mt-4">
              07:00 PM
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ThursdayService;