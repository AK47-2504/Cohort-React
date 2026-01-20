import Explorebtn from "./Explorebtn";


const RectCard = () => {
  const rectCardData = [
    {
      title: "Independent",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea inventore deleniti cupiditate alias explicabo accusamus veniam earum debitis amet.",
    },
    {
      title: "Exclusive & Uniquity",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea inventore deleniti cupiditate alias explicabo accusamus veniam earum debitis amet.",
    },
    {
      title: "HIgh Quality",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea inventore deleniti cupiditate alias explicabo accusamus veniam earum debitis amet.",
    },
    {
      title: "Eco-Friendly",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea inventore deleniti cupiditate alias explicabo accusamus veniam earum debitis amet.",
    },
  ];

  return (
    <div
      className="
        font-poppins
        px-4 sm:px-6 md:px-8 lg:px-10
        mt-5 lg:mt-10
        grid
        grid-cols-1
        gap-5
        lg:grid-cols-2
      "
    >
      {rectCardData.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="bg-zinc-800 rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10"
          >
            <h3 className="text-2xl sm:text-3xl uppercase mb-4 font-bold font-mono">
              {elem.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
              {elem.description}
            </p>

            <Explorebtn />
          </div>
          
        );
        
      })}
    </div>
  );
};

export default RectCard;
