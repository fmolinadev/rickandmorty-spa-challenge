import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import GET_CHARACTER from "../util/GET_CHARACTER";
import generateRandomID from "../util/generateRandomID";
import Character from "./Character";
import History from "./History";

const Body = () => {
  const [open, setOpen] = useState(false);
  const [randomID, setID] = useState(generateRandomID());
  // console.log("ID FLAG-->", randomID);
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: {
      id: randomID,
    },
  });
  // console.log("INFO FLAG-->", data);
  const [resultRequest, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  //On click:
  const handleButton = () => {
    setID(generateRandomID());
    setResult(data.character);
    setHistory([data.character, ...history]);
  };

  return (
    <>
      <Character
        infoCharacter={resultRequest}
        runInfo={handleButton}
        loader={loading}
      />
      <div>
        <div onClick={() => setOpen(!open)} aria-label="menu">
          <i className="fi fi-br-ballot"></i>
          <h5>History</h5>
        </div>
        {open && (
          <History
            history={history}
            open={open}
            setOpen={setOpen}
            loader={loading}
            setResult={setResult}
            error={error}
          />
        )}
      </div>
    </>
  );
};

export default Body;
