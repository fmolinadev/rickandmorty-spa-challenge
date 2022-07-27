import { Link } from "react-router-dom";
import { Navbar, NavbarOptions, OptionName } from "../../styles/NavbarWeb.js";
const Web = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <Navbar>
      <NavbarOptions aria-label="options">
        <OptionName>
          {/* {This error is forced to show the error handle if the page is not there.} */}
          <Link to="/about" style={noDecoration}>
            About
          </Link>
        </OptionName>
      </NavbarOptions>
    </Navbar>
  );
};

export default Web;
