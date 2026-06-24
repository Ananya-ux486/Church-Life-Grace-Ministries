import sunday from "../assets/sunday.jpg";

function SundayService() {
  return (
    <section id="events" className="py-24 bg-gradient-to-b from-black to-[#111827]">
      <section
  id="sundayservice"
  className="py-24 bg-gradient-to-b from-black to-[#111827]"
></section>
      <div className="max-w-7xl mx-auto px-6">

        <div className="group relative overflow-hidden rounded-[35px] shadow-2xl">

          <img
            src={sunday}
            alt="Sunday Service"
            className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          {/* Floating Badge */}
          <div className="absolute top-10 left-10 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
            <span className="text-white font-semibold">
              Every Sunday
            </span>
          </div>

          {/* Content */}
          <div className="absolute bottom-12 left-12 max-w-2xl">

            <span className="uppercase tracking-[4px] text-yellow-300 font-semibold">
              Worship With Us
            </span>

            <h2 className="text-5xl md:text-7xl font-black text-white mt-4 leading-tight">
              Power Sunday
              <br />
              <span className="text-yellow-400">
                Service
              </span>
            </h2>

            <p className="text-gray-200 text-xl mt-5">
              Experience powerful worship, prayer,
              miracles and spiritual growth every Sunday.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">

              <div className="bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">
                11:00 AM
              </div>

              <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300"
>
  Join Service
</button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default SundayService;