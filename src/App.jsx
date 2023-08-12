import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Departments from "./Pages/Departments";
import Products from "./Pages/Products";
import NewProducts from "./Pages/NewProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new-product" element={<NewProducts />} />
      </Routes>
    </>
  );
}

export default App;
