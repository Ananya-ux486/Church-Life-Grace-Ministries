import about3 from "../assets/about3.png";
import sunday from "../assets/sunday.jpg";
import thursday from "../assets/thursday.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import youth from "../assets/youth.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function Gallery() {
  const images = [
    about3,
  sunday,
  thursday,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    youth,
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-red-500 uppercase tracking-[4px] font-semibold">
            Photo Gallery
          </span>

          <h2 className="text-6xl font-bold text-blue-900 mt-4">
            Gallery
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            Moments of worship, fellowship and community.
            Glimpses of God's faithfulness in our lives.
          </p>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={3}
          spaceBetween={25}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
  className="
  overflow-hidden
  rounded-3xl
  shadow-2xl
  border-4
  border-white
  bg-white
  hover:-translate-y-2
  transition-all
  duration-500
"
>

                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="
w-full
h-96
object-cover
hover:scale-110
hover:rotate-1
transition-all
duration-700
"
                />

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}

export default Gallery;