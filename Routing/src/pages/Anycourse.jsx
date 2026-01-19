import { useParams } from "react-router-dom"


const Anycourse = () => {

  const coursename =  useParams()
  return (
    <div className="w-screen h-screen bg-black text-5xl text-white p-10">
      {coursename.id} Course Page
    </div>
  )
}

export default Anycourse
