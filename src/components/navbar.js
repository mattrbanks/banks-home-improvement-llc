import React from "react";
import richlogo from "../images/richslogoblue.svg";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white fixed top-0 left-0 text-white border flex z-50">
      <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
      <div className="text-black flex justify-between w-2/4 mx-5 my-6">
        <Link to="/about">About Us</Link>
        <Link to="/services">Services</Link>
        <Link to="/extended-gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
