import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  heigth: 15px;
  max-width: 1400px;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 720px) {
    bottom: 0;
    position: relative;
  }
`;

export const FooterText = styled.p`
  display: flex;

  padding-bottom: 9px;
  margin-bottom: 12px;
  @media (max-width: 720px) {
    bottom: 0;
    position: relative;
  }
`;
