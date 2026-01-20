import Button from "./Button";

const HeroSection = () => {
  return (
    <div className="relative w-full mb-10">
      {/* Image Container */}
      <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1758613655976-e8c8f85849a2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Hero"
        />

        {/* Content */}
        <div
          className="
            absolute 
            top-24 sm:top-32 md:top-40 
            left-4 sm:left-10 md:left-20
            flex flex-col 
            gap-4 
            px-2 sm:px-4
          "
        >
          <h1
            className="
              font-[poppins] uppercase tracking-wider
              text-5xl sm:text-5xl md:text-7xl lg:text-9xl
              w-full md:w-3/4 lg:w-1/2
            "
          >
            Design & Freedom
          </h1>

          <p
            className="
              text-sm sm:text-base md:text-lg lg:text-xl
              text-gray-300
              w-full sm:w-3/4 md:w-2/3 lg:w-1/3
            "
          >
            Explore Independent Style by Embracing Uniqueness with our exclusive
            Designer Apparel
          </p>
        </div>
      </div>

      <div
        className="
          absolute 
          bottom-6 sm:bottom-10 md:bottom-14
          right-4 sm:right-10 md:right-20
        "
      >
        <Button />
      </div>
    </div>
  );
};

export default HeroSection;
