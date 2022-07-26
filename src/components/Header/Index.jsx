import React, { useState } from "react";
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

  return (
    <HeaderContainer>
      <BrandSite src={logo} alt="logo" aria-label="logo spa" />
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
