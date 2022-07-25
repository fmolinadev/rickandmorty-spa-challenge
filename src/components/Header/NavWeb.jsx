import { Link } from "react-router-dom";
const Web = () => {
  return (
    <div>
      <ul aria-label="options">
        <li>
          <Link to="/home">
            <span>Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Web;
