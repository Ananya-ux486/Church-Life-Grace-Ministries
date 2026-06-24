

function Footer() {
return ( <footer className="relative overflow-hidden bg-gradient-to-b from-[#081b36] via-[#0a2347] to-[#06172d] text-white pt-16 pb-8">

```
  {/* Background Effects */}

  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[180px]"></div>

  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Main Footer */}

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* Column 1 */}

      <div>

        <h3 className="text-3xl font-black text-orange-500">
          Life Grace Ministries
        </h3>

        <p className="mt-6 text-gray-300 leading-8">
          A place of faith, worship and spiritual growth.
          We are committed to sharing God's love and
          transforming lives through ministry, prayer,
          discipleship and community service.
        </p>

      </div>

      {/* Column 2 */}

      <div>

        <h4 className="text-2xl font-bold mb-6">
          Quick Links
        </h4>

        <ul className="space-y-4 text-gray-300">

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

        <ul className="space-y-4 text-gray-300">

          <li>
            <a href="#sundayservice" className="hover:text-orange-500 transition-all">
              Sunday Service
            </a>
          </li>

          <li>
            <a href="#thursdayservice" className="hover:text-orange-500 transition-all">
              Thursday Service
            </a>
          </li>

          <li>
            <a href="#youthservices" className="hover:text-orange-500 transition-all">
              Youth Ministry
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-orange-500 transition-all">
              Prayer Meetings
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-orange-500 transition-all">
              Bible Study
            </a>
          </li>

        </ul>

      </div>

      {/* Column 4 */}

      <div>

        <h4 className="text-2xl font-bold mb-6">
          Contact Info
        </h4>

        <div className="space-y-4 text-gray-300">

          <p>📞 +44 (0)20 8617 9624</p>

          <p>📧 info@lifegraceministries.com</p>

          <p>
            📍 Lord's City Adoration Ground,
            Umuocheta Amiri,
            Imo State, Nigeria
          </p>

        </div>

        {/* Social Icons */}

        <div className="flex gap-4 mt-8">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
w-12
h-12
bg-white/10
rounded-full
flex
items-center
justify-center
hover:bg-orange-500
hover:scale-110
hover:shadow-[0_0_20px_rgba(249,115,22,0.7)]
transition-all
duration-300
"
          >
            f
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
w-12
h-12
bg-white/10
rounded-full
flex
items-center
justify-center
hover:bg-orange-500
hover:scale-110
hover:shadow-[0_0_20px_rgba(249,115,22,0.7)]
transition-all
duration-300
"
          >
            ▶
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
w-12
h-12
bg-white/10
rounded-full
flex
items-center
justify-center
hover:bg-orange-500
hover:scale-110
hover:shadow-[0_0_20px_rgba(249,115,22,0.7)]
transition-all
duration-300
"
          >
            📷
          </a>

        </div>

      </div>

    </div>

    {/* Scroll Top */}

   <div className="flex justify-center mt-8">

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
       className="
w-16
h-16
rounded-full
bg-gradient-to-r
from-orange-500
to-orange-600
text-white
text-3xl
shadow-[0_0_25px_rgba(249,115,22,0.5)]
animate-bounce
hover:scale-110
transition-all
duration-300
"
      >
        ↑
      </button>

    </div>

    {/* Copyright */}

    <div className="border-t border-white/10 mt-4 pt-6 text-center">

      <p className="text-gray-400">
        © 2026 Life Grace Ministries International.
        All Rights Reserved.
      </p>

    </div>

    {/* Development Credit */}

    <div className="text-center mt-6 max-w-5xl mx-auto">

      <p className="text-gray-500 leading-8">

        Website designed, developed and maintained by

        <a
          href="https://ftsservices.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 font-semibold hover:text-orange-400 mx-1"
        >
          FTS Services Ltd
        </a>

        in association with

        <a
          href="https://tasmafivesolutions.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 font-semibold hover:text-orange-400 mx-1"
        >
          Tasmafive Solutions LLP
        </a>

        delivering innovative IT solutions, web development,
        automation, cybersecurity and digital transformation
        services for organizations worldwide.

      </p>

    </div>

  </div>

</footer>

);
}

export default Footer;
