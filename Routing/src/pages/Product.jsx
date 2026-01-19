import { Link } from "react-router-dom"

const Product = () => {
  return (
    <div className="w-screen h-screen bg-black text-5xl text-white p-10">
      Product Page  


      <div className="mt-10">
    <Link className=" bg-blue-500 mr-3 px-2 py-3 rounded-lg" to="/product/mens">Mens Collection</Link>
        <Link className=" bg-pink-600 px-2 py-3 rounded-lg" to="/product/womens">Womens Collection</Link>
      </div>
    </div>
  )
}

export default Product
