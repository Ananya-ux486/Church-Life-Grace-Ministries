import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MainServices() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const services = [
    {
      icon: "🙏",
      title: "Sunday Worship",
      description:
        "Join us every Sunday for powerful worship and spiritual growth.",
      section: "events",
    },
    {
      icon: "📖",
      title: "Bible Study",
      description:
        "Learn God's word through interactive teaching and discussion.",
      section: "thursdayservice",
    },
    {
      icon: "🎵",
      title: "Praise & Worship",
      description:
        "Experience uplifting praise and worship with our ministry team.",
      section: "gallery",
    },
    {
      icon: "❤️",
      title: "Community Outreach",
      description:
        "Serving communities with compassion, faith and practical support.",
      section: "gofundme",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-yellow-400 uppercase font-semibold tracking-[4px]">
            What We Do
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Main Services
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Worship, Fellowship and Spiritual Growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
  <div
    data-aos={
      index === 0
        ? "fade-right"
        : index === 1
        ? "zoom-in"
        : index === 2
        ? "fade-left"
        : "fade-up"
    }
              key={index}
              onClick={() => scrollToSection(service.section)}
              className="
cursor-pointer
bg-gradient-to-br
from-white
via-yellow-50
to-orange-100
rounded-3xl
p-8
shadow-xl
hover:shadow-2xl
hover:-translate-y-4
hover:scale-110
hover:rotate-1
transition-all
duration-500
"
            >
              <div className="text-6xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-orange-600">
                {service.title}
              </h3>

              <p className="text-gray-700 mt-4 leading-relaxed">
                {service.description}
              </p>

              <p className="mt-5 text-orange-600 font-semibold">
                Learn More →
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default MainServices;