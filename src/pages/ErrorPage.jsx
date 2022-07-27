import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { Alert, ErrorContainer } from "../styles/ErrorPageStyles";
const Error404 = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <ErrorContainer>
      <Alert>An error occurred while loading the page.</Alert>
      <Button>
        <Link to="/home" style={noDecoration}>
          Return to home
        </Link>
      </Button>
    </ErrorContainer>
  );
};

export default Error404;
