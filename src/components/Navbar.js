import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  function closeMobileMenu() {
    setClick(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z50 w-screen bg-transparent">
      <div className="container px-6 py-4 mx-auto flex flex-col md:flex-row items-center bg-transparent justify-between text-white">
        {/* Menu Icons  */}
        <div className="w-full md:w-auto flex justify-between text-2xl font-medium pb-4">
          <Link to={"/home"}>U N O B R E A T H</Link>
          <div
            onClick={() => {
              handleClick();
            }}
            className="cursor-pointer"
          >
            <i
              className={`${click ? "fas fa-times" : "fas fa-bars"} md:hidden`}
            >
              {" "}
            </i>
          </div>
        </div>

        {/* Nav Links  */}
        <div
          className={`flex flex-col space-y-4  md:flex-row md:space-x-8 md:block text-center ${
            click ? "block" : "hidden"
          }`}
        >
          <Link to={"/home"}>Home</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/products"}>Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
