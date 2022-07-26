import React from "react";
import Loader from "./Loader";

const History = ({ history, open, setOpen, loader, setResult }) => {
  const goToCharacter = (char) => {
    // console.log("CHAR-->", char);
    setResult(char);
  };

  return (
    <section>
      <div onClick={() => setOpen(!open)}>
        <i className="fi fi-br-cross"></i>
      </div>
      {!history.length ? (
        <h2>Not history</h2>
      ) : loader ? (
        <Loader />
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
                <button onClick={() => goToCharacter(char)}>
                  See all data
                </button>
              </div>
            </article>
          );
        })
      )}
    </section>
  );
};

export default History;
