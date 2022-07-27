import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85vh;
  @media (max-width: 720px) {
    padding-top: 1%;
    height: 100vh;
  }
`;

export const Alert = styled.h2`
  font-size: 25px;
  padding-bottom: 10px;
`;
