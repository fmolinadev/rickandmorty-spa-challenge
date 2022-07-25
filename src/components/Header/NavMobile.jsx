import { Link } from "react-router-dom";
const Mobile = ({ open, setOpen }) => {
  return (
    <div>
      <div onClick={() => setOpen(!open)}>
        <i className="fi fi-br-cross"></i>
      </div>
      <div onClick={() => setOpen(!open)}>
        <ul aria-label="options">
          <li>
            <Link to="/home">
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
