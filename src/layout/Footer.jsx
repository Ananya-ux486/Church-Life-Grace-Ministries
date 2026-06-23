import cross from "../assets/cross.png";
function Footer() {
  return (
    <footer className="bg-[#071B34] text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 */}

          <div>

            <h3 className="text-3xl font-black text-orange-500">
              Life Grace Ministries
            </h3>

            <p className="mt-6 text-gray-300 leading-8">
              A place of faith, worship and spiritual growth.
              We are committed to sharing God's love and
              transforming lives through ministry and service.
            </p>

          </div>

          {/* Column 2 */}

          <div>

            <h4 className="text-2xl font-bold mb-6">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-300">

              <li>
                <a href="#home" className="hover:text-orange-500 transition-all">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-orange-500 transition-all">
                  About Us
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-orange-500 transition-all">
                  Services
                </a>
              </li>

              <li>
                <a href="#events" className="hover:text-orange-500 transition-all">
                  Events
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-500 transition-all">
                  Contact Us
                </a>
              </li>

            </ul>

          </div>

          {/* Column 3 */}

          <div>

            <h4 className="text-2xl font-bold mb-6">
              Ministries
            </h4>

            <ul className="space-y-3 text-gray-300">

              <li>Sunday Service</li>

              <li>Thursday Service</li>

              <li>Youth Ministry</li>

              <li>Prayer Meetings</li>

              <li>Bible Study</li>

            </ul>

          </div>

          {/* Column 4 */}

          <div>

            <h4 className="text-2xl font-bold mb-6">
              Contact Info
            </h4>

            <div className="space-y-4 text-gray-300">

              <p>
                📞 +44 (0)20 8617 9624
              </p>

              <p>
                📧 info@lifegraceministries.com
              </p>

              <p>
                📍 81 Parcemore Road,
                Thorn,
                United Kingdom
              </p>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer">
                f
              </div>

              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer">
                ▶
              </div>

              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 cursor-pointer">
                📷
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Bar */}

        <div className="border-t border-white/10 mt-16 pt-8 text-center">

          <p className="text-gray-400">
            © 2026 Life Grace Ministries International.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;