import { useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="p-10 text-center ">
      <h1 className="text-4xl font-bold mb-5">{count}</h1>
      <button className="bg-emerald-500 p-2 rounded-xl text-2xl font-bold mr-2"
        onClick={function () {
          setcount(count + 1);
        }}
      >
        Increase
      </button>
      <button className="bg-red-500 p-2 rounded-xl text-2xl font-bold "
        onClick={function () {
          setcount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;
