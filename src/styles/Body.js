import styled from "styled-components";

export const BodyContainer = styled.div`
  display: grid;
  padding-top: 1%;
  margin: 0px 16px;
  grid-template-columns: 4fr 2fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 4em;
  }
`;

export const CharacterContainer = styled.div``;

export const ToggleMenu = styled.div`
  display: flex;
  flex-direction: colum;
`;
