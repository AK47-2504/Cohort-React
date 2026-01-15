import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [product, setproduct] = useState([]);

  const getData = async function () {
    const Alldata = await axios.get("https://fakestoreapi.com/products");
    setproduct(Alldata);
    console.log(product.data)
  };

  useEffect(() => {
    getData();

  
  }, []);

  return (
    <div>
      <button onClick={getData}>Click Here</button>
      {/* {product.map((elem, idx) => {
        return <h1 key={idx}>{elem}</h1>;
      })} */}
    </div>
  );
};

export default App;
