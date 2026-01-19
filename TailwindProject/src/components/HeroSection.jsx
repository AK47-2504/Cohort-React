import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1627489107638-2d42cf60bc1b?q=80&w=1932&auto=format&fit=crop"
          alt="Hero"
        />

        {/* Content */}
        <div className="absolute top-40 left-20 flex flex-col  gap-4 px-4 text-center">
          <h1
            className="font-[poppins] uppercase tracking-wider 
            text-4xl sm:text-5xl md:text-7xl lg:text-9xl 
            w-full md:w-3/4 lg:w-1/2"
          >
            Design & Freedom
          </h1>

          <p
            className="text-sm text-left sm:text-base md:text-lg lg:text-xl 
            text-gray-300 
            w-full sm:w-3/4 md:w-2/3 lg:w-1/3"
          >
            Explore Independent Style by Embracing Uniqueness with our exclusive
            Designer Apparel
          </p>
        </div>
      </div>
      <Button className="absolute bottom-15 right-20" />
    </div>
  );
};

export default HeroSection;
