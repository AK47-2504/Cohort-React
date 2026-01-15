import { useState } from "react";

const App = () => {

  
  const [title, settitle] = useState("");
  const [allUsers, setallUsers] = useState([]);

// This logic is very important 
  const submitHandler = (e) => {
    e.preventDefault();
    const updatedUser = [...allUsers, title];
    setallUsers(updatedUser);
    console.log(updatedUser);

    settitle("");
  };

  return (
    <div className="w-screen h-screen bg-gray-700 ">
      <form onSubmit={submitHandler} className="p-10 bg-black">
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text "
          className="p-3 bg-gray-300 mr-5"
          placeholder="Enter your Name"
          value={title}
          required
        />
        <button className="p-3 bg-emerald-400 rounded">Submit</button>
      </form>

      {allUsers.map((elem, idx) => {
        return (
          <h1 key={idx} className="text-white">
            {elem}
          </h1>
        );
      })}
    </div>
  );
};

export default App;
