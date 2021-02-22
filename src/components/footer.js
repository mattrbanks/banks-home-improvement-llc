import React from "react";
import richquality from "../images/richquality 1.svg";
import { FaFacebookF, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid black",
          marginBottom: "0",
          padding: "1rem",
        }}
      >
        <div className="block md:flex md:justify-evenly">
          <div className="flex justify-center m-4">
            <div className="rounded-full bg-blue-800 text-white text-center p-2 hover:bg-black mt-8 mr-4">
              <a href="tel:+496170961709" className="block">
                <FaPhone
                  style={{
                    fontSize: "70px",
                    filter: "drop-shadow(2px 2px 0 rgb(255,0,0))",
                    padding: "0.5rem",
                  }}
                />
              </a>
            </div>
            <div className="rounded-full bg-blue-800 text-white text-center p-2 hover:bg-black mt-8">
              <a
                href="https://www.facebook.com/carmena.damico"
                className="block"
              >
                <FaFacebookF
                  style={{
                    fontSize: "70px",
                    filter: "drop-shadow(2px 2px 0 rgb(255,0,0))",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="mb-4">
            <h5>
              © {new Date().getFullYear()} Rich's Property Maintenance LLC
            </h5>
            <h5>
              77 Toad Ridge Road
              <br />
              Middlefield, CT 06455-1129
              <br />
              (860) 518-4302 (c)
            </h5>
          </div>
          <div className="flex justify-center mb-4">
            <img className="w-32" alt="quality seal" src={richquality} />
          </div>
        </div>
      </div>
      {/* <p>
        Built by
        {` `}
        <a href="https://mattbanksdev.com/" target="_blank">
          M.Banks Development LLC
        </a>
      </p> */}
    </div>
  );
};

export default Footer;
