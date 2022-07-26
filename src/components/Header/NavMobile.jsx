import { Link } from "react-router-dom";
const Mobile = ({ open, setOpen }) => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <i className="fi fi-br-cross"></i>
      </div>
      <div onClick={() => setOpen(!open)}>
        <ul aria-label="options">
          <li>
            <Link to="/home" style={noDecoration}>
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
