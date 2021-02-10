import React from "react";
import ImageReusable from "./imageReusable";
import richlogo from "../images/richslogoblue.svg";
import { Link } from "gatsby";

const Header = () => {
  return (
    <div className="z-10 w-full h-20 bg-white bg-opacity-90 absolute top-0 left-0 text-white border-b border-red-700 flex">
      <img className="w-10 mx-4 my-4" alt="mb logo" src={richlogo} />
      <div
        style={{ textDecoration: "underline #DF292D" }}
        className="text-black mx-5 my-5 text-2xl w-1/2"
      >
        Rich's Property Maintenance LLC
      </div>
      <div className="flex justify-end w-1/2">
        <div className="text-black flex justify-around w-1/2 mx-5 my-6">
          <Link to="/">Home</Link>
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
