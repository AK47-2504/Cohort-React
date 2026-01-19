import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Courses from "./pages/Courses";
import Anycourse from "./pages/Anycourse";
import Random from "./pages/Random";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/mens" element={<Mens />} />
        <Route path="/product/womens" element={<Womens />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<Anycourse />} />
        <Route path="/*" element={<Random />} />


      </Routes>
    </div>
  );
};

export default App;
