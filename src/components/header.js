import React from "react";
import ImageReusable from "./imageReusable";
import richlogo from "../images/richslogoblue.svg";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="h-screen bg-main-img bg-cover relative">
      <div className="w-full h-20 bg-white bg-opacity-90 absolute top-0 left-0 text-white border flex">
        <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
        <div className="text-black flex justify-between w-2/4 mx-5 my-6">
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/extended-gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
