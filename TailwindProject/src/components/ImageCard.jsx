const ImageCard = (props) => {
  console.log(props);

  return (
    <div
      className="w-full
            lg:w-[45vw] 
          sm:w-[full] h-[62vh] overflow-hidden
            p-6 sm:p-8 lg:p-10
            rounded-xl "
    >
      <div className="w-full h-auto  overflow-hidden bg-zinc-800 rounded-lg">
        <img
          className="
    w-full
    h-full
    object-cover
    object-center
    lg:object-bottom
    transition-transform
    duration-500
    hover:scale-110
  "
          src={props.image[0].img1}
          alt="Fashion visual"
        />
      </div>
    </div>
  );
};

export default ImageCard;
