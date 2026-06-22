import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Events", link: "#events" },
    { name: "Lord's City", link: "#gofundme" },
    { name: "Counselling", link: "#counselling" },
    { name: "Contact Us", link: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-yellow-400 transition-all duration-300">
            Life Grace Ministries
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 text-gray-200 font-medium">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="relative group transition-all duration-300 hover:text-yellow-400"
              >
                {item.name}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:w-full
                  "
                ></span>
              </a>
            ))}

          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <button
              className="
              bg-gradient-to-r
              from-orange-500
              to-orange-600
              hover:from-orange-400
              hover:to-orange-500
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Donate Now
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="lg:hidden flex flex-col gap-5 py-5 bg-black/90 backdrop-blur-md text-white font-medium rounded-b-xl">

            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-yellow-400 transition-all duration-300 px-2"
              >
                {item.name}
              </a>
            ))}

          </nav>
        )}

      </div>

    </header>
  );
}

export default Header;