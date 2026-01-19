const Bigcard = () => {
  const cardsData = [
    {
      title: "About",
      heading: "Where Fashion Meets Freedom",
      para: "We believe fashion is more than clothing—it is self-expression. Our designs are created for people who value comfort, confidence, and individuality. Every piece is thoughtfully crafted to move with you, adapt to your lifestyle, and reflect your personality without compromise.\n\nFrom everyday essentials to statement styles, we focus on quality, detail, and authenticity. Our goal is simple, no matter where life takes you.",
    },
  ];

  return (
    <div className="px-4 sm:px-8 lg:px-12 mt-10">
      {cardsData.map((elem, idx) => (
        <div
          key={idx}
          className="
            w-full
            lg:w-[45vw]
            bg-zinc-800
            p-6 sm:p-8 lg:p-10
            rounded-xl
          "
        >
          {/* Title */}
          <h4 className="font-bebas tracking-wider text-lg sm:text-xl mb-15">
            {elem.title}
          </h4>

          {/* Heading */}
          <p className="text-3xl sm:text-4xl lg:text-5xl uppercase font-poppins text-orange-500 font-bold mb-5">
            {elem.heading}
          </p>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-6 text-sm text-zinc-300 leading-relaxed">
            <p className=" ">{elem.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bigcard;
