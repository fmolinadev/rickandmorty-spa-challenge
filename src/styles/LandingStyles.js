import styled from "styled-components";

export const LandingContainer = styled.div`
  display: grid;
  padding-top: 1%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3em;
    padding-top: 5%;
    padding-bottom: 5%;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    padding: 10px 0px;
  }
`;

export const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerRight = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 720px) {
    margin: auto;
    padding: 18px;
  }
`;

export const TextContainer = styled.div`
  margin-right: 20px;
  @media (max-width: 720px) {
    margin: auto;
  }
`;

export const ButtonContainer = styled.div`
  margin: 22px 0px 20px 0px;
`;

export const TextHeader = styled.h1`
  font-size: 38px;
`;

export const TextDescription = styled.h3`
  font-size: 22px;
`;
