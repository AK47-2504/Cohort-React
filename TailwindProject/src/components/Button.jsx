const Button = ({ className }) => {
  return (
    <div className={`flex items-center  ${className}`}>
      <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition cursor-pointer">
        <i className="ri-arrow-down-long-line text-2xl"></i>
      </div>

      <button className="text-sm font-mono sm:text-base md:text-lg uppercase    px-4 py-2">
        Learn More
      </button>
    </div>
  );
};

export default Button;
