import React from "react";

const Footer = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <footer>
      <a
        href="https://www.franciscomolina.com.ar/"
        rel="noopener noreferrer"
        target="_blank"
        style={noDecoration}
      >
        <p>© Francisco Molina</p>
      </a>
    </footer>
  );
};

export default Footer;
