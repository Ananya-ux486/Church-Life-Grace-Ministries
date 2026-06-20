function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold">
          Get In Touch
        </h2>

        <p className="mt-4 text-blue-200">
          We'd love to hear from you. Reach out to us for prayer,
          counselling, support, or ministry information.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xl mb-6">
              📧 info@lifegraceministries.com
            </p>

            <p className="text-xl mb-6">
              📞 +44 (0)20 8617 9624
            </p>

            <p className="text-xl">
              📍 81 Parcemore Road, Thorn
            </p>
          </div>

          {/* RIGHT SIDE */}
          <form className="space-y-6">

            <div>
              <label className="block mb-2 font-semibold text-lg">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 rounded-lg bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-4 rounded-lg bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-lg">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full p-4 rounded-lg bg-white text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;