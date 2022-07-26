import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 40px;
  align-items: center;
  font-style: normal;
  justify-content: space-between;
  margin: 12px 0px;
  -webkit-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.1);
`;

export const BrandSite = styled.img`
  height: 35px;
  width: 130px;
  margin-left: 1em;
  @media (max-width: 720px) {
    height: 27px;
    width: 120px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export const MenuContainerWeb = styled.div`
  display: flex;

  @media (max-width: 720px) {
    display: none;
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: flex;
  }
`;
