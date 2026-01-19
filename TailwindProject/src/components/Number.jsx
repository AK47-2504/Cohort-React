const NUmber = () => {
  const numData = [
    { role: "Clients", number: "120+" },
    { role: "Users", number: "500+" },
    { role: "Masterpiece", number: "20K+" },
    { role: "Events", number: "50+" },
  ];

  return (
    <div
      className="
        w-full
        mt-10
        px-4 sm:px-6 lg:px-10
        py-6
        grid
        grid-cols-2
        gap-4
        sm:grid-cols-2
        lg:flex
        lg:flex-row
        lg:flex-wrap
        lg:justify-between
      "
    >
      {numData.map((elem, idx) => {
        return (
          <div
            key={idx}
            className="
              p-4
              rounded-2xl
              text-center sm:text-left
              lg:bg-transparent
              transition
              duration-300
              ease-in-out
            "
          >
            <div className="text-center">
                <h3 className="font-bebas tracking-wide text-2xl sm:text-3xl">
              {elem.role}
            </h3>
            <p className="text-3xl sm:text-4xl font-mono text-orange-500">
              {elem.number}
            </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NUmber;
