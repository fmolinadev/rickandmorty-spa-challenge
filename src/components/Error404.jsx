import React from "react";
import { Link } from "react-router-dom";
const Error404 = () => {
  return (
    <div>
      <h4>An error occurred while loading the page.</h4>
      <button>
        <Link to="/home">Return to home</Link>
      </button>
    </div>
  );
};

export default Error404;
