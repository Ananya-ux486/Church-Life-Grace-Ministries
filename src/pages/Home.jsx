import Header from "../layout/Header";
import Hero from "../sections/Hero";
import OurChurch from "../sections/OurChurch";
import Leadership from "../sections/Leadership";
import MainServices from "../sections/MainServices";
import YouthServices from "../sections/YouthServices";
import SundayService from "../sections/SundayService";
import ThursdayService from "../sections/ThursdayService";
import GoFundMe from "../sections/GoFundMe";
import LordsCity from "../sections/LordsCity";
import Gallery from "../sections/Gallery";
import Counselling from "../sections/Counselling";
import ContactInfo from "../sections/ContactInfo";
import Footer from "../layout/Footer";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurChurch />
      <Leadership />
      <Gallery />
      <MainServices />
      <YouthServices />
      <SundayService />
      <ThursdayService />
      <GoFundMe />
      <LordsCity />
      <Counselling />
      <ContactInfo />
      <Footer />
      </>
  );
}

export default Home;