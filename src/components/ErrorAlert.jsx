import React from "react";
import { Link } from "react-router-dom";
const ErrorAlert = () => {
  return (
    <div>
      <h1>As usual, something got out of hand...</h1>
      <button>
        <Link to="/home">Return</Link>
      </button>
    </div>
  );
};

export default ErrorAlert;
