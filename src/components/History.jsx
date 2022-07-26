import React from "react";
import ErrorAlert from "./ErrorAlert";
import { Button } from "../styles/Button";

const History = ({ history, open, setOpen, loader, error, setResult }) => {
  const goToCharacter = (char) => {
    // console.log("CHAR-->", char);
    setResult(char);
  };

  if (error) return <ErrorAlert />;

  return (
    <section>
      <div onClick={() => setOpen(!open)}>
        <i className="fi fi-br-cross"></i>
      </div>
      {!history.length ? (
        <h2>Not history</h2>
      ) : loader ? (
        <h4>Updating history...</h4>
      ) : (
        history.map((char, index) => {
          return (
            <article key={index} style={{ textDecoration: "inherit" }}>
              <img
                src={char.image}
                alt="character"
                aria-label="character image"
              />
              <div>
                <span>{char.name}</span>
                <Button onClick={() => goToCharacter(char)}>
                  See all data
                </Button>
              </div>
            </article>
          );
        })
      )}
    </section>
  );
};

export default History;
