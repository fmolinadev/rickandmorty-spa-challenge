import { Link } from "react-router-dom";
import {
  NavbarMobile,
  ToggleIcon,
  NavbarOptions,
  Option,
} from "../../styles/NavbarMobile";
const Mobile = ({ open, setOpen }) => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <NavbarMobile>
      <ToggleIcon onClick={() => setOpen(!open)}>
        <i className="fi fi-br-cross"></i>
      </ToggleIcon>
      <NavbarOptions aria-label="options" onClick={() => setOpen(!open)}>
        <Option>
          <Link to="/home" style={noDecoration}>
            <span>Home</span>
          </Link>
        </Option>
        <Option>
          {/* <Link to="/history" style={noDecoration}> */}
          <span>History</span>
          {/* </Link> */}
        </Option>
      </NavbarOptions>
    </NavbarMobile>
  );
};

export default Mobile;
