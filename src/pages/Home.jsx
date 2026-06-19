import Header from "../layout/Header";
import Hero from "../sections/Hero";
import OurChurch from "../sections/OurChurch";
import MainServices from "../sections/MainServices";
import YouthServices from "../sections/YouthServices";
import SundayService from "../sections/SundayService";
import ThursdayService from "../sections/ThursdayService";
import GoFundMe from "../sections/GoFundMe";
import LordsCity from "../sections/LordsCity";
import BisophSection from "../sections/BisophSection";
import Gallery from "../sections/Gallery";
import ContactInfo from "../sections/ContactInfo";
import Footer from "../layout/Footer";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurChurch />
      <MainServices />
      <YouthServices />
      <SundayService />
      <ThursdayService />
      <GoFundMe />
      <LordsCity />
      <BisophSection />
      <Gallery />
      <ContactInfo />
      <Footer />
    </>
  );
}

export default Home;