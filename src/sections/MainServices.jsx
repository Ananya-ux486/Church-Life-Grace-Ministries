function MainServices() {
  const services = [
    {
      icon: "🙏",
      title: "Sunday Worship",
      description:
        "Join us every Sunday for powerful worship and spiritual growth.",
    },
    {
      icon: "📖",
      title: "Bible Study",
      description:
        "Learn God's word through interactive teaching and discussion.",
    },
    {
      icon: "🎵",
      title: "Praise & Worship",
      description:
        "Experience uplifting praise and worship with our ministry team.",
    },
    {
      icon: "❤️",
      title: "Community Outreach",
      description:
        "Serving communities with compassion, faith and practical support.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-r from-blue-950 to-blue-800">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-yellow-400 uppercase font-semibold">
            What We Do
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Main Services
          </h2>

          <p className="text-gray-300 mt-4">
            Worship, Fellowship and Spiritual Growth
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl hover:-translate-y-3 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default MainServices;