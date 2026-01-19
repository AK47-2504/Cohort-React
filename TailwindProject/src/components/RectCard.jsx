import Explorebtn from "./Explorebtn";

const RectCard = () => {
  return (
    <div className="font-poppins px-4 sm:px-6 md:px-8 lg:px-10 mt-5 lg:mt-10 flex flex-col lg:flex-row gap-5">
      {/* Card */}
      <div className="w-full lg:w-1/2 bg-zinc-800 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
        <h3 className="text-2xl sm:text-3xl lg:text-3xl uppercase mb-4 sm:mb-5 font-bold font-mono">
          Independent
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 mb-3 sm:mb-4 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea inventore deleniti cupiditate alias explicabo accusamus veniam earum debitis amet.
        </p>
        <Explorebtn />
      </div>

      {/* Optional: add another card here if needed for lg layout */}
      {/* <div className="w-full lg:w-1/2 bg-zinc-700 rounded-2xl p-5">Another Card</div> */}
    </div>
  );
};

export default RectCard;
