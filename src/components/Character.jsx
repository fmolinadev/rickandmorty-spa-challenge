import React from "react";
import Placeholder from "../assets/placeholder-img.png";
import Loader from "./Loader";
import { Button } from "../styles/Button";
import ErrorAlert from "./ErrorAlert";
import {
  CharacterContainer,
  DefaultSetting,
  DefaulText,
  LoaderContainer,
  CharacterCard,
  CharacterImage,
  CharacterHeader,
  CharacterData,
  CharacterLeft,
  CharacterName,
  CharacterTag,
  CharacterResults,
  DataContainer,
} from "../styles/CharacterStyles.js";

const Character = ({ infoCharacter, runInfo, loader, error }) => {
  if (error) return <ErrorAlert />;
  return (
    <CharacterContainer>
      {!infoCharacter ? (
        <DefaultSetting>
          <DefaulText>Click on the button to begin!</DefaulText>
          <Button onClick={() => runInfo()}>See a character</Button>
        </DefaultSetting>
      ) : loader ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <CharacterCard>
          <CharacterLeft>
            <CharacterImage
              src={infoCharacter.image ? infoCharacter.image : Placeholder}
              alt="character"
              aria-label="image of a character"
            />
            <div>
              <Button onClick={() => runInfo()}>Get new character</Button>
            </div>
          </CharacterLeft>
          <CharacterData>
            <CharacterHeader>
              <CharacterName>
                {infoCharacter.name ? infoCharacter.name : "Not known"}
              </CharacterName>
              <CharacterTag>
                id: #{infoCharacter.id ? infoCharacter.id : "Not known"}
              </CharacterTag>
            </CharacterHeader>
            <CharacterResults>
              <DataContainer>
                <span>Status: </span>
                {infoCharacter.status ? infoCharacter.status : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Species: </span>
                {infoCharacter.species ? infoCharacter.species : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Type: </span>
                {infoCharacter.type ? infoCharacter.type : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Gender: </span>
                {infoCharacter.gender ? infoCharacter.gender : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Origin: </span>
                {infoCharacter.origin.name
                  ? infoCharacter.origin.name
                  : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Location: </span>
                {infoCharacter.location.name
                  ? infoCharacter.location.name
                  : "Not known"}
              </DataContainer>
              <hr />
              <DataContainer>
                <span>Created at: </span>
                {new Date(
                  infoCharacter.created ? infoCharacter.created : "Not known"
                )
                  .toString()
                  .split(" ")
                  .slice(0, 4)
                  .join(" ")}
              </DataContainer>
              <hr />
            </CharacterResults>
          </CharacterData>
        </CharacterCard>
      )}
    </CharacterContainer>
  );
};

export default Character;
