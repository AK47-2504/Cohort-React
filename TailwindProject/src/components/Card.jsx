import Button from "./Button";

const Card = () => {
  const cardcontent = [
    {
      title: "Independency",
      para: "Explore the creativity of independent designers from around the globe",
    },
    {
      title: "Uniquity",
      para: "Explore the creativity of independent designers from around the globe",
    },
    {
      title: "Quality",
      para: "Explore the creativity of independent designers from around the globe",
    },
    {
      title: "Sustainability",
      para: "Explore the creativity of independent designers from around the globe",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center font-[poppins]">
      {cardcontent.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="
              sm:w-[45%] 
              lg:w-[22%]
              p-5 
              m-4 
              bg-zinc-800 
              rounded-lg 
              shadow-md
            "
          >
            <h3 className="font-bold uppercase mb-2 text-lg ">{elem.title}</h3>

            <p className="capitalize mb-10 text-gray-300 text-sm">
              {elem.para}
            </p>

            <Button />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
