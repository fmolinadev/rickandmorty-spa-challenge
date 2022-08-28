import styled from "styled-components";

export const BodyContainer = styled.div`
  display: grid;
  padding-top: 6%;
  margin: 0px 16px;
  grid-template-columns: 4fr 2fr;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    grid-row-gap: 3em;
    grid-column-gap: 2em;
  }
`;

export const CharacterContainer = styled.div``;

export const HistoryAside = styled.aside`
  margin: 0px 16px;
  @media (max-width: 720px) {
    margin: 0px 2px;
  }
`;

export const ToggleMenu = styled.div`
  display: flex;
  flex-direction: colum;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 7px;
  & i {
    padding-right: 5px;
  }
  @media (max-width: 720px) {
    justify-content: flex-start;
  }
`;
