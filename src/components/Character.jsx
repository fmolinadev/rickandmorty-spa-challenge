import React from "react";
import Placeholder from "../assets/placeholder-img.png";
import Loader from "./Loader";
import { Button } from "../styles/Button";

const Character = ({ infoCharacter, runInfo, loader }) => {
  return (
    <section>
      {!infoCharacter ? (
        <>
          <h1>Click on the button to begin!</h1>
          <Button onClick={() => runInfo()}>See a character</Button>
        </>
      ) : loader ? (
        <Loader />
      ) : (
        <>
          <div>
            <div>
              <img
                src={infoCharacter.image ? infoCharacter.image : Placeholder}
                alt="character"
                aria-label="image of a character"
              ></img>
            </div>
            <div>
              <div>
                <h1>{infoCharacter.name ? infoCharacter.name : "Not known"}</h1>
                <h6>id: {infoCharacter.id ? infoCharacter.id : "Not known"}</h6>
              </div>
              <div>
                <div>
                  <span>Status: </span>
                  {infoCharacter.status ? infoCharacter.status : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Species: </span>
                  {infoCharacter.species ? infoCharacter.species : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Type: </span>
                  {infoCharacter.type ? infoCharacter.type : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Gender: </span>
                  {infoCharacter.gender ? infoCharacter.gender : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Origin: </span>
                  {infoCharacter.origin.name
                    ? infoCharacter.origin.name
                    : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Location: </span>
                  {infoCharacter.location.name
                    ? infoCharacter.location.name
                    : "Not known"}
                </div>
                <hr />
                <div>
                  <span>Created at: </span>
                  {new Date(
                    infoCharacter.created ? infoCharacter.created : "Not known"
                  )
                    .toString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")}
                </div>
                <hr />
              </div>
            </div>
          </div>
          <Button onClick={() => runInfo()}>Generate a new character</Button>
        </>
      )}
    </section>
  );
};

export default Character;
