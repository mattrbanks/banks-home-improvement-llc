import React from "react";
import richlogo from "../images/richslogoblue.svg";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white fixed top-0 left-0 text-white border flex z-50">
      <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
      <div
        style={{ textDecoration: "underline red" }}
        className="text-black mx-5 my-5 text-2xl w-1/2"
      >
        Rich's Property Maintenance LLC
      </div>
      <div className="flex justify-end w-1/2">
        <div className="text-black flex justify-around w-1/2 mx-5 my-6">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/extended-gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
