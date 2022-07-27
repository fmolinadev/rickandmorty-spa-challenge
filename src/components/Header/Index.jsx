import React, { useState } from "react";
import { Link } from "react-router-dom";
import Web from "./NavWeb";
import Mobile from "./NavMobile";
import logo from "../../assets/rick-and-morty-name-png.png";
import {
  HeaderContainer,
  BrandSite,
  MenuContainer,
  MenuContainerWeb,
  ToggleMenu,
} from "../../styles/MainHeader";

const Header = () => {
  const [open, setOpen] = useState(false);
  const noDecoration = { textDecoration: "none", color: "inherit" };
  const actualUrl = window.location.pathname;

  const reloadPage = (e) => {
    window.location.reload();
  };

  return (
    <HeaderContainer>
      {actualUrl[1] === "h" && actualUrl[4] === "e" ? (
        <span
          onClick={(e) => {
            reloadPage();
          }}
          style={noDecoration}
        >
          <BrandSite src={logo} alt="logo" aria-label="logo spa" />
        </span>
      ) : (
        <Link to="/home" style={noDecoration}>
          <BrandSite src={logo} alt="logo" aria-label="logo spa" />
        </Link>
      )}
      <MenuContainer>
        <MenuContainerWeb aria-label="menu">
          <Web />
        </MenuContainerWeb>
        <ToggleMenu>
          <div onClick={() => setOpen(!open)} aria-label="menu">
            <i className="fi fi-br-menu-burger"></i>
          </div>
          {open && <Mobile open={open} setOpen={setOpen} />}
        </ToggleMenu>
      </MenuContainer>
    </HeaderContainer>
  );
};

export default Header;
