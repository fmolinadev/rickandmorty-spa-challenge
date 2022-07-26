import React, { useState } from "react";
import Web from "./NavWeb";
import Mobile from "./NavMobile";
import logo from "../../assets/rick-and-morty-name-png.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <img
        src={logo}
        alt="logo"
        aria-label="logo spa"
        height={"60px"}
        width={"170px"}
      />
      <div>
        <div>
          <Web />
        </div>
        <div>
          <div onClick={() => setOpen(!open)} aria-label="menu">
            <i className="fi fi-br-menu-burger"></i>
          </div>
          {open && <Mobile open={open} setOpen={setOpen} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
