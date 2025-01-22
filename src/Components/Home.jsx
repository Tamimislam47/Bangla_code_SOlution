import Navbar from "../SharedComponents/Navber";
import AboutUs from "./AboutUs";
import HeroSection from "./HeroSection";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Navbar/>
     <HeroSection/>
     <AboutUs/>
     <Slider/>
    </div>
  );
};

export default Home;