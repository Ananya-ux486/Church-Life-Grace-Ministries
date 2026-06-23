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

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg">
            We would love to hear from you. Whether you need prayer,
            counselling or ministry information, our team is here to help.
          </p>

        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">

          <div className="bg-white p-8 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">

            <div className="text-4xl mb-4">📞</div>

            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Call Us
            </h3>

            <p className="text-[#071B34] text-2xl font-bold">
              +44 (0)20 8617 9624
            </p>

          </div>

          <div className="bg-white p-8 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">

            <div className="text-4xl mb-4">📍</div>

            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Visit Us
            </h3>

            <p className="text-[#071B34] text-lg font-bold">
              Lord's City Adoration Ground,
              <br />
              Umuocheta, Amiri,
              <br />
              Imo State, Nigeria
            </p>

          </div>

          <div className="bg-white p-8 rounded-[25px] shadow-lg hover:shadow-xl transition-all duration-300">

            <div className="text-4xl mb-4">📧</div>

            <h3 className="text-orange-500 font-bold text-xl mb-3">
              Email Us
            </h3>

            <p className="text-[#071B34] text-lg font-bold break-all">
              info@lifegraceministries.com
            </p>

          </div>

        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white p-10 rounded-[30px] shadow-2xl">

            <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Life Grace Ministries. We will get back to you soon."
    );
  }}
>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

                <input
                  type="text"
                  required
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
                />

              </div>

              <textarea
                rows="8"
                placeholder="Write your message..."
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
              ></textarea>

              <button
                type="submit"
                className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-12
                py-4
                rounded-xl
                font-bold
                transition-all
                duration-300
                hover:scale-105
                "
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[30px] shadow-2xl">

            <iframe
              title="Lord's City Location"
              src="https://maps.google.com/maps?q=Amiri%20Imo%20State%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactInfo;