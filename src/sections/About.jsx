import Leadership from "../sections/Leadership";
import OurChurch from "../sections/OurChurch";
import Gallery from "../sections/Gallery";

function About() {
  return (
    <>
      <section className="bg-[#081B29] py-24 text-center text-white">

        <h1 className="text-6xl font-black">
          About Us
        </h1>

        <p className="mt-4 text-gray-300">
          Home / About Us
        </p>

      </section>

      <Leadership />

      <OurChurch />

      <Gallery />

    </>
  );
}

export default About;