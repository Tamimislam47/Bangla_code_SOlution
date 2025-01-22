const HeroSection = () => {
  return (
   <div className="bg-black">
    <div>
    <div
      className=" max-w-[80%] mx-auto pt-40 text-white flex justify-between px-16"
      style={{
        backgroundImage: "url('/images/banner-bg-01.png')",
        backgroundRepeat: "no-repeat",
        height: "30rem" 
        
      }}
    >
      {/* Left Side: Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/banner-shape-01.png" 
          alt="Banner Shape"
          className="animate-rotate pl-36 pt-8" 
        />
      </div>
   
      <div className=" space-y-6 font-russo">
        <h1 className="text-4xl md:text-6xl ">Creative Solutions</h1>
        <h2 className="text-6xl md:text-6xl">Real Results</h2>
      </div>
    </div>
    </div>
    <div>
      <h1 className="text-[24rem] text-white font-russo">Infinite</h1>
     </div>
   </div>
  );
};

export default HeroSection;
