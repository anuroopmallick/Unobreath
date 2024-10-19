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

  function handleResize() {
    if (window.innerWidth > 768) {
      setClick(false);
    }
  }

  window.addEventListener("resize", handleResize);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white">
      <div className="px-6 py-4 mx-0 flex flex-col md:flex-row items-center justify-between text-black w-full">
        {/* Menu Icons  */}

        <div className=" flex flex-row justify-between items-center text-2xl font-medium w-full">
          <Link to={"/home"}>U N O B R E A T H</Link>
          <div
            onClick={() => {
              handleClick();
            }}
            className="w-min cursor-pointer md:hidden"
          >
            <i className="fa-solid fa-bars"> </i>
          </div>
        </div>

        <div
          className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg transiton-transform duration-300 ease-in-out ${
            click ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div className="flex flex-col text-center">
            <div className="container w-full text-2xl px-6 py-4 flex justify-end ">
              <div
                className="w-fit px-2 rounded-md transition-shadow duration-300 ease-in-out shadow-md hover:shadow-xl bg-gray-300 cursor-pointer"
                onClick={() => {
                  handleClick();
                }}
              >
                <i className="fa-solid fa-times rounded-md "> </i>
              </div>
            </div>
            <Link
              to={"/home"}
              onClick={closeMobileMenu}
              className="py-6 transition-all duration-300 ease-in-out  hover:shadow-md hover:bg-gray-300"
            >
              Home
            </Link>
            {/* <Link
              to={"/products"}
              onClick={closeMobileMenu}
              className="py-6 transition-all duration-300 ease-in-out  hover:shadow-md hover:bg-gray-300"
            >
              Products
            </Link> */}
            <Link
              to={"/services"}
              onClick={closeMobileMenu}
              className="py-6 transition-all duration-300 ease-in-out  hover:shadow-md hover:bg-gray-300"
            >
              Courses
            </Link>
            {/* <Link
              to={"/products"}
              onClick={closeMobileMenu}
              className="py-6 transition-all duration-300 ease-in-out  hover:shadow-md hover:bg-gray-300"
            >
              Products
            </Link> */}
            <Link
              onClick={closeMobileMenu}
              className="py-6 transition-all duration-300 ease-in-out  hover:shadow-md hover:bg-gray-300"
            >
              +91-7410095842
            </Link>
          </div>
        </div>

        {/* Nav Links  */}
        <div
          className={`space-y-4 flex-row md:space-x-8 text-center hidden md:block`}
        >
          <Link to={"/home"} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to={"/services"} onClick={closeMobileMenu}>
            Courses
          </Link>
          {/* <Link to={"/products"} onClick={closeMobileMenu}>
            Products
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
