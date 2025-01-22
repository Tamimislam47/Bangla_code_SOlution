const AboutUs = () => {
    return (
        <div className="bg-black py-10">
            {/* Container for content */}
            <div className="max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">

                {/* Left Side (Image and Info) */}
                <div className="lg:w-1/2">
                    <div className="text-blue-400 text-2xl font-bold flex items-center gap-2">
                        <span>
                            <img src="/public/images/subtitle-icon.png" alt="icon" />
                        </span>
                        ABOUT US
                    </div>
                    <h1 className="font-russo text-6xl text-white pt-4 leading-tight">
                        Your Experience Is <br />
                        Everything To Us
                    </h1>
                   <div className="flex gap-10 font-poppins pt-20">
                    <img src="/public/images/about-03.jpeg" alt="" />
                     <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                        enim ad minim veniam.
                    </p>
                   </div>
                    {/* Statistics Section */}
                    <div className="flex gap-20 mt-8">
                        <div className="flex font-russo items-center gap-4">
                            <h2 className="text-white text-4xl font-bold">240+</h2>
                            <p className="text-gray-400">Business Peoples</p>
                        </div>
                        <div className="font-russo flex items-center gap-4">
                            <h2 className="text-white text-4xl font-bold">100%</h2>
                            <p className="text-gray-400">Customer Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Right Side (Image) */}
                <div className="lg:w-1/2 flex justify-center items-center">
                    <img
                        src="/public/images/about-01.jpeg" 
                        alt="coding illustration"
                        className="h-[50rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
