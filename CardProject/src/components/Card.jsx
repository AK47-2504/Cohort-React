const Card = (props) => {
  return (
    <div className="w-64 bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300 ml-5 flex flex-col items-center rounded-2xl p-4">
      
      {/* Image */}
      <img
        src={props.data.image}
        alt={props.data.username}
        className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
      />

      {/* Username */}
      <h1 className="text-xl font-bold mt-3 text-emerald-500">
        {props.data.username}
      </h1>

      {/* Role */}
      <h2 className="text-sm mt-1 font-medium text-blue-500">
        {props.data.role}
      </h2>

      {/* Description */}
      <p className="text-center mt-2 text-sm text-gray-600 leading-relaxed">
        {props.data.description}
      </p>

      {/* Remove Button */}
      <button
        className="mt-4 px-5 py-2 bg-red-100 text-red-600 rounded-full font-medium hover:bg-red-200 active:scale-95 transition-all duration-200"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
