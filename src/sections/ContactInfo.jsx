function ContactInfo() {
  return (
    <section id="contact" className="py-24 bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Contact Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
            </h3>

            <p>Email: info@lifegrace.org</p>
            <p className="mt-3">Phone: +91 XXXXX XXXXX</p>
            <p className="mt-3">Address: Church Location</p>
          </div>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg text-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg text-black"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg text-black"
            ></textarea>

            <button className="bg-red-600 px-8 py-4 rounded-lg">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;