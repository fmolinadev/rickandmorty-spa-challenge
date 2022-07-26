import { Link } from "react-router-dom";
import { Navbar, NavbarOptions, OptionName } from "../../styles/NavbarWeb.js";
const Web = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <Navbar>
      <NavbarOptions aria-label="options">
        <OptionName></OptionName>
        <OptionName>
          <Link to="/about" style={noDecoration}>
            About
          </Link>
        </OptionName>
      </NavbarOptions>
    </Navbar>
  );
};

export default Web;
