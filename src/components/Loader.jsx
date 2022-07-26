import React from "react";
import { Spinner } from "../styles/LoaderStyles.js";

const Loader = () => {
  return (
    <Spinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </Spinner>
  );
};

export default Loader;
