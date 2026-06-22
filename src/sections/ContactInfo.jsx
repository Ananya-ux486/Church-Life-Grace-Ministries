function ContactInfo() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#F5EFE8]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-black text-[#071B34] mt-4">
            Reach Out To Our Ministry
          </h2>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
            We would love to hear from you. Whether you need prayer,
            counselling or ministry information, our team is here to help.
          </p>

        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-orange-500 font-semibold mb-2">
                📞 Call Us
              </p>

              <p className="text-[#071B34] text-2xl font-bold">
                +44 (0)20 8617 9624
              </p>
            </div>

            <div className="bg-white p-6 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-orange-500 font-semibold mb-2">
                📧 Email Us
              </p>

              <p className="text-[#071B34] text-xl font-bold break-all">
                info@lifegraceministries.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-orange-500 font-semibold mb-2">
                📍 Visit Us
              </p>

              <p className="text-[#071B34] text-xl font-bold">
                81 Parcemore Road,
                <br />
                Thorn,
                <br />
                United Kingdom
              </p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-[35px] shadow-2xl">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

              </div>

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* MAP */}
        <div className="mt-16 overflow-hidden rounded-[35px] shadow-2xl">

          <iframe
            title="Church Location"
            src="https://maps.google.com/maps?q=81%20Parcemore%20Road%20Thorn%20United%20Kingdom&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;