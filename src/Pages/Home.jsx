
import AboutUs from "../Components/ui/AboutUs.jsx";
import HeroSection from "../Components/ui/HeroSection.jsx";
import Navbar from "../ReuseableCom/Navbar.jsx";
import Slider from "../Components/ui/Slider.jsx";
import Steps from "../ReuseableCom/Steps.jsx"; 
import Faq from "../ReuseableCom/Faq.jsx"; 


const Home = () => {
  return (
    <div className="bg-black">
     
     <Navbar/>
     <HeroSection/>
     <AboutUs/>
     <Slider/>
     <div className="pt-10">
     <Steps/>
     <div className="pt-36"> 
     <Faq/>
     </div>
     </div>
    
    </div>
  );
};

export default Home;