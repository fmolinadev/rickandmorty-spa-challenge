import React from "react";
import { FooterContainer, FooterText } from "../styles/FooterStyles";

const Footer = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <FooterContainer>
      <a
        href="https://www.franciscomolina.com.ar/"
        rel="noopener noreferrer"
        target="_blank"
        style={noDecoration}
      >
        <FooterText>© Code by: Francisco D. Molina</FooterText>
      </a>
    </FooterContainer>
  );
};

export default Footer;
