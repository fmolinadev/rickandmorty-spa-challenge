import React from "react";
import { Button } from "../styles/Button";
import {
  HistoryContainer,
  ToggleMenuHistory,
  Text,
  CardHistory,
  ImageHistory,
  ResumeHistory,
  Name,
} from "../styles/HistoryStyles";

const History = ({ history, open, setOpen, loader, error, setResult }) => {
  const goToCharacter = (char) => {
    // console.log("CHAR-->", char);
    setResult(char);
  };

  if (error) return <Text>Ups...</Text>;

  return (
    <>
      <ToggleMenuHistory onClick={() => setOpen(!open)}>
        {/* <i className="fi fi-br-cross"></i> */}
      </ToggleMenuHistory>
      <HistoryContainer>
        {!history.length ? (
          <Text>Not history</Text>
        ) : loader ? (
          <Text>Updating history...</Text>
        ) : (
          history.map((char, index) => {
            return (
              <CardHistory key={index} style={{ textDecoration: "inherit" }}>
                <ImageHistory
                  src={char.image}
                  alt="character"
                  aria-label="character image"
                />
                <ResumeHistory>
                  <Name>{char.name}</Name>
                  <Button onClick={() => goToCharacter(char)}>View</Button>
                </ResumeHistory>
              </CardHistory>
            );
          })
        )}
      </HistoryContainer>
    </>
  );
};

export default History;
