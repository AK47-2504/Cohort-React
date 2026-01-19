import { Link } from "react-router-dom"


const Mens = () => {
  return (
    <div className="w-screen h-screen bg-black text-5xl text-white p-10">
      Mens Collection
      <Link to="/product" className="ml-5 bg-gray-500 px-2 py-3 rounded-lg">Back</Link>
    </div>
  )
}

export default Mens
