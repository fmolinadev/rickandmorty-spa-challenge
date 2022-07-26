import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rick-and-morty-name-png.png";
import rickandmorty from "../assets/rick-and-morty-characters-png.png";

const Landing = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <div>
      <div>
        <img
          src={rickandmorty}
          alt="characters"
          aria-label="characters image"
        />
        <img src={logo} alt="logo" aria-label="logo" />
      </div>
      <div>
        <div>
          <h1>See what's happening here</h1>
          <h3>
            All information about your favorite Rick and Morty characters, out
            of control (well... this wouldn't be news)!
          </h3>
        </div>
        <button>
          {
            <Link to="/home" style={noDecoration}>
              See now
            </Link>
          }
        </button>
      </div>
    </div>
  );
};

export default Landing;
