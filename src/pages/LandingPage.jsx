import React from "react";
import { Link } from "react-router-dom";
import rickandmorty from "../assets/rick-and-morty-characters-png.png";
import {
  LandingContainer,
  ContainerLeft,
  ContainerRight,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  TextHeader,
  TextDescription,
} from "../styles/LandingStyles";
import { Button } from "../styles/Button";

const Landing = () => {
  const noDecoration = { textDecoration: "none", color: "inherit" };
  return (
    <LandingContainer>
      <ContainerLeft>
        <ImageContainer
          src={rickandmorty}
          alt="characters"
          aria-label="characters image"
        />
      </ContainerLeft>
      <ContainerRight>
        <TextContainer>
          <TextHeader>See what's happening here</TextHeader>
          <br />
          <TextDescription>
            All information about your favorite Rick and Morty characters, out
            of control (well... this wouldn't be news)!
          </TextDescription>
        </TextContainer>
        <ButtonContainer>
          <Button>
            <Link to="/home" style={noDecoration}>
              See now
            </Link>
          </Button>
        </ButtonContainer>
      </ContainerRight>
    </LandingContainer>
  );
};

export default Landing;
