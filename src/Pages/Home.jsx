import AboutUs from "../Components/ui/AboutUs.jsx";
import HeroSection from "../Components/ui/HeroSection.jsx";
import Navbar from "../ReuseableCom/Navbar.jsx";
import Slider from "../Components/ui/Slider.jsx";
import Steps from "../ReuseableCom/Steps.jsx";
import Faq from "../ReuseableCom/Faq.jsx";
import Footer from "../ReuseableCom/Footer.jsx";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Slider />
      <div className="flex flex-col gap-[11rem]">
        <div className="pt-10"  >
          <Steps />
        </div>
        <Faq />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
