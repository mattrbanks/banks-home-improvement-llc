import React from "react";

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
        <h5>© {new Date().getFullYear()} Rich's Property Maintenance LLC</h5>
        <h5>
          77 Toad Ridge Road
          <br />
          Middlefield, CT 06455-1129
          <br />
          (860) 518-4302 (c)
        </h5>
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
