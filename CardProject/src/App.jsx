// ...existing code...
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [username, setusername] = useState("");
  const [image, setimage] = useState("");
  const [role, setrole] = useState("");
  const [description, setdescription] = useState("");
  const [allUsers, setallUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({ username, image, role, description });
    console.log(oldUsers);
    setallUsers(oldUsers);

    setusername("");
    setimage("");
    setrole("");
    setdescription("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-gray-900 font-bold text-3xl sm:text-4xl text-center mb-6">
          Please Fill the Form
        </h1>

        <form onSubmit={submitHandler} className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm text-gray-600 mb-1">
              Name
            </label>
            <input
              id="username"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image" className="text-sm text-gray-600 mb-1">
              Image URL
            </label>
            <input
              id="image"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              type="url"
              placeholder="https://example.com/avatar.jpg"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="role" className="text-sm text-gray-600 mb-1">
              Role
            </label>
            <input
              id="role"
              value={role}
              onChange={(e) => setrole(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Enter your role"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="description" className="text-sm text-gray-600 mb-1">
              Description
            </label>
            <input
              id="description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Enter a short description"
            />
          </div>

          <div className="sm:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-5 py-3 bg-emerald-500 text-white rounded-lg shadow hover:bg-emerald-600 transition"
            >
              Create User
            </button>
          </div>
        </form>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allUsers.map((elem, idx) => {
            return <Card data={elem} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
// ...existing code...