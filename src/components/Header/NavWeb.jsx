import { Link } from "react-router-dom";
const Web = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <div>
      <ul aria-label="options">
        <li>
          <Link to="/home" style={noDecoration}>
            <span>Home</span>
          </Link>
        </li>
        <li>
          {/* <Link to="/history" style={noDecoration}> */}
          <span>History</span>
          {/* </Link> */}
        </li>
      </ul>
    </div>
  );
};

export default Web;
