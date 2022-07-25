import React, { useState } from "react";
import Web from "./NavWeb";
import Mobile from "./NavMobile";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <span>Rick and Morty</span>
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
