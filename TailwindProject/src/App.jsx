import Bigcard from "./components/Bigcard";
import Card from "./components/Card";
import Footer from "./components/Footer";
import ImageCard from "./components/ImageCard";
import Number from "./components/NUmber";
import Pageone from "./components/Pageone";
import RectCard from "./components/RectCard";

const App = () => {
  const imgLinks = [
    {
      img1: "https://images.unsplash.com/photo-1766365350485-72904d0529a7?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div
      className="w-full h-full  bg-black text-white 
    "
    >
      <Pageone />
      <Card />
      <Number />
      <div className="flex flex-wrap">
        <Bigcard />
        <ImageCard image={imgLinks} />
        <h2 className="mt-30 mb-5 px-5 lg:px-10 text-5xl uppercase font-[poppins]">Our <span className="text-orange-500 font-bold">Advantages</span></h2>
        
      </div>
      <RectCard />
      <Footer />
    </div>
  );
};

export default App;
