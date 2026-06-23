import { useState } from "react";

import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import video4 from "../assets/video/video4.mp4";
function LordsCity() {
  const videos = [video1, video2, video3, video4];

const [currentVideo, setCurrentVideo] = useState(0);



  
  
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

        {/* Lord's City Video Slider */}

<div className="mt-20">

  {/* Main Video */}

  <div className="relative overflow-hidden rounded-[35px] shadow-2xl bg-black">

    <video
      key={currentVideo}
      src={videos[currentVideo]}
      controls
      playsInline
      className="w-full h-[650px] object-cover"
    />

    <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-5 py-3 rounded-2xl">

      <h3 className="text-white text-2xl font-bold">
        Lord's City
      </h3>

      <p className="text-white/80 text-sm">
        Video {currentVideo + 1} of {videos.length}
      </p>

    </div>

  </div>

  {/* Thumbnails */}

  <div className="flex justify-center gap-4 mt-8 flex-wrap">

    {videos.map((video, index) => (

      <div
        key={index}
        onClick={() => setCurrentVideo(index)}
        className={`
          cursor-pointer
          overflow-hidden
          rounded-2xl
          transition-all
          duration-300
          ${
            currentVideo === index
              ? "ring-4 ring-cyan-500 scale-105"
              : "opacity-70 hover:opacity-100"
          }
        `}
      >

        <video
          src={video}
          muted
          className="w-36 h-24 object-cover"
        />

      </div>

    ))}

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