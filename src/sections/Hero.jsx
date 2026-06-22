import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1438032005730-c779502df39b",
      text: "Transforming lives through faith, worship and community.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334",
      text: "Join a welcoming community of worship, prayer and fellowship.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519491050282-cf00c82424b4",
      text: "Making a difference through outreach and compassionate service.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${slides[currentImage].image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="max-w-5xl mx-auto text-center text-white px-6">

          {/* Welcome */}
          <motion.p
            className="uppercase tracking-[8px] text-yellow-400 text-lg font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            ✦ Welcome To ✦
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            key={currentImage}
            className="text-6xl md:text-8xl font-black leading-tight"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
              Life Grace
            </span>

            <br />

            <span className="bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Ministries
            </span>
          </motion.h1>

          {/* Text */}
          <motion.p
            key={`text-${currentImage}`}
            className="mt-6 text-xl md:text-2xl max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {slides[currentImage].text}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-10 flex justify-center gap-6 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <button
              className="
              bg-red-600
              hover:bg-red-700
              hover:scale-110
              px-10
              py-4
              rounded-full
              font-semibold
              text-lg
              shadow-xl
              transition-all
              duration-300
              "
            >
              Join Us
            </button>

            <button
              className="
              bg-white
              text-black
              hover:scale-110
              px-10
              py-4
              rounded-full
              font-semibold
              text-lg
              shadow-xl
              transition-all
              duration-300
              "
            >
              Donate Now
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;