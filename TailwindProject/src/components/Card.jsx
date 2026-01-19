import Button from "./Button";

const Card = () => {
  const cardcontent = [
    {
      title: "Independency",
      para: "Explore the creativity of independent designers from around the globe  ",
    },
    {
      title: "Uniquity",
      para: "Explore the creativity of independent designers from around the globe  ",
    },
    {
      title: "Quality",
      para: "Explore the creativity of independent designers from around the globe  ",
    },
    {
      title: "Sustainability",
      para: "Explore the creativity of independent designers from around the globe  ",
    },
  ];

  return (
    <div className="flex font-[poppins] ">
      {cardcontent.map((elem, idx) => {
        return (
          <div className="w-150 h-50 p-5 m-4 bg-zinc-800 rounded-lg shadow-md" key={idx}>
            <h3 className="font-bold uppercase mb-2">{elem.title}</h3>
            <p className="capitalize mb-10 text-gray-200">{elem.para}</p>
            <Button  />
          </div>
        );
       
      })}
      
    </div>
  );
};

export default Card;
