import React from "react";
import richlogo from "../images/richslogoblue.svg";

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-white fixed top-0 left-0 text-white border">
      <img className="w-10" alt="mb logo" src={richlogo} />
    </div>
  );
};

export default Navbar;
