import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Slider = () => {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1000, // Autoplay time (milliseconds)
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 5, // Number of slides visible
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2, // Adjust perView for medium screens
        },
        640: {
          perView: 1, // Adjust perView for small screens
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/* Testimonial carousel */}
      <div className="glide-09 relative max-w-[118rem]  mx-auto overflow-hidden">
        {/* Slides */}
        <div data-glide-el="track">
          <ul className="whitespace-nowrap flex overflow-hidden p-0">
            {/* Individual slide */}
            <li className="flex-shrink-0 mr-7  w-1/3 md:w-1/2 sm:w-full">
            <div className="flex items-center gap-5">
            <img
                src="/public/images/brand-icon1.png"
                alt="Logo 1"
                className="m-auto h-20 max-h-full w-auto max-w-full -mr-16"
              />
              <h1 className="text-white text-4xl font-russo ml-14">Web Design</h1>
            </div>
            </li>
            <li className="flex-shrink-0 w-1/3 md:w-1/2 sm:w-full">
              <div className="flex items-center">
              <img
                src="/public/images/brand-icon2.png"
                alt="Logo 2"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
              <h1 className="text-white text-4xl font-russo">UI/UX Design</h1>
              </div>
            </li>
            <li className="flex-shrink-0 w-1/3 md:w-1/2 sm:w-full">
              <div className="flex items-center">
              <img
                src="/public/images/brand-icon3.png"
                alt="Logo 3"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
               <h1 className="text-white text-4xl font-russo">Developer</h1>
              </div>
            </li>
            <li className="flex-shrink-0 w-1/3 md:w-1/2 sm:w-full">
             <div className="flex items-center">
             <img
                src="/public/images/brand-icon4.png"
                alt="Logo 4"
                className="m-auto h-20 max-h-full w-auto max-w-full"/>
              <h1 className="text-white text-4xl font-russo">ISO Developer</h1>
             </div>
            </li>
            <li className="flex-shrink-0 w-1/3 md:w-1/2 sm:w-full">
             <div className="flex items-center gap-5"> 
             <img
                src="/public/images/brand-icon5.png"
                alt="Logo 5"
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
                <h1 className="text-white text-4xl font-russo">Digital App Agency</h1>
             </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Slider;
