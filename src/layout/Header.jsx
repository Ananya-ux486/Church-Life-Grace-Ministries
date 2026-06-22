import { useState } from "react";

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

return ( <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md"> <div className="max-w-7xl mx-auto px-6">

```
    <div className="flex items-center justify-between h-20">

      <h1 className="text-2xl font-bold text-white">
        Life Grace Ministries
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-8 text-white font-medium">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#lordscity">Lord's City</a>
        <a href="#counselling">Counselling</a>
        <a href="#contact">Contact Us</a>
      </nav>

      <div className="flex items-center gap-4">

        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-md text-white font-semibold">
          Donate Now
        </button>

        {/* Mobile Hamburger */}
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
      <nav className="lg:hidden flex flex-col gap-4 py-4 text-white font-medium bg-black/90">

        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#events">Events</a>
        <a href="#lordscity">Lord's City</a>
        <a href="#counselling">Counselling</a>
        <a href="#contact">Contact Us</a>

      </nav>
    )}

  </div>
</header>

);
}

export default Header;
