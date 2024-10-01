import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/products" element={<Products></Products>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
