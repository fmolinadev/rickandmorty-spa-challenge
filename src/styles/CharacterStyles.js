import styled from "styled-components";

export const CharacterContainer = styled.section``;

export const DefaultSetting = styled.div`
  display: block;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding-left: 25%;
  padding-top: 15%;
  @media (max-width: 720px) {
    padding-left: 4%;
    margin-top: 9%;
    height: 60vh;
  }
`;

export const DefaulText = styled.h1`
  font-size: 22px;
  padding-bottom: 10px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  padding-left: 65%;
  padding-top: 19%;
  @media (max-width: 720px) {
    padding-left: 54%;
    margin-top: 55%;
    margin-bottom: 85%;
  }
`;

export const CharacterCard = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4em;
    grid-column-gap: 3em;
  }
`;

export const CharacterLeft = styled.div``;

export const CharacterImage = styled.img`
  border: 2px;
  border-radius: 6px;
`;

export const CharacterData = styled.div`
  width: 85%;
`;

export const CharacterHeader = styled.div`
  height: 45px;
`;

export const CharacterName = styled.h1`
  font-size: 23px;
`;
export const CharacterTag = styled.h6`
  font-size: 14px;
`;

export const CharacterResults = styled.div`
  padding-top: 28px;
`;

export const DataContainer = styled.div`
  padding: 6px 0px;
`;
