function LordsCity() {
  return (
    <section
      id="lordscity"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-sky-100 via-cyan-50 to-indigo-100"
    >
      {/* Background Blur Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-300/30 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-300/30 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center">

          <span className="uppercase tracking-[5px] text-sky-600 font-bold">
            Spiritual Growth
          </span>

          <h2 className="text-5xl lg:text-7xl font-black mt-5 leading-tight text-slate-900">
            Peace On The
            <br />
            Lord's City
          </h2>

          <div className="w-40 h-1.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto mt-6 rounded-full"></div>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-slate-600 leading-9">
            Discover a place of peace, worship and spiritual
            transformation. We welcome everyone to experience
            God's love, grace and divine purpose.
          </p>

        </div>

        {/* Lord's City Video Placeholder */}

<div className="mt-20">

  <div className="relative overflow-hidden rounded-[35px] shadow-2xl group">

    <img
      src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=1600"
      alt="Lord's City"
      className="w-full h-[550px] object-cover group-hover:scale-105 transition-all duration-700"
    />

    <div className="absolute inset-0 bg-black/50"></div>

    <div className="absolute inset-0 flex items-center justify-center">

      <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 animate-pulse">

        <span className="text-5xl text-white">
          ▶
        </span>

      </div>

    </div>

    <div className="absolute bottom-10 left-10">

      <h3 className="text-4xl font-black text-white">
        Lord's City Video
      </h3>

      <p className="text-white/90 mt-3 text-lg">
        Official video presentation coming soon...
      </p>

    </div>

  </div>

</div>

{/* Address */}

<div className="mt-12 bg-white/70 backdrop-blur-xl p-8 rounded-[30px] shadow-xl border border-white">

  <h3 className="text-3xl font-bold text-slate-900">
    📍 Location
  </h3>

  <p className="mt-4 text-xl text-slate-700 leading-8">
    Lord's City Adoration Ground,
    <br />
    Umuocheta, Amiri,
    <br />
    Imo State, Nigeria
  </p>

</div>

{/* Content */}

<div className="mt-12 max-w-5xl mx-auto text-center">

  <p className="text-slate-700 text-xl leading-10">
    Lord's City Adoration Ground is a place of worship,
    prayer, spiritual renewal and community fellowship
    where believers gather to experience God's presence,
    grow in faith and strengthen their relationship with God.
  </p>

  <p className="mt-6 text-slate-600 text-lg leading-9">
    Through worship services, prayer gatherings,
    discipleship programs, counselling and outreach
    initiatives, Lord's City continues to transform lives
    and bring hope, encouragement and spiritual growth
    to individuals, families and communities.
  </p>

</div>

        {/* CTA */}

        <div className="text-center mt-16">

          <button
  onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="
  bg-gradient-to-r
  from-cyan-500
  to-violet-500
  text-white
  px-10
  py-4
  rounded-full
  font-bold
  text-lg
  hover:scale-105
  transition-all
  duration-300
  shadow-xl
  "
>
  Visit Lord's City
</button>

        </div>

      </div>
    </section>
  );
}

export default LordsCity;