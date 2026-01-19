import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5 text-4xl text-white font-bold  bg-blue-900">
      <h1 className="text-yellow-400"> Navbar</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Product</Link>
      <Link to="/courses">Courses</Link>
    </div>
  )
}

export default Navbar
