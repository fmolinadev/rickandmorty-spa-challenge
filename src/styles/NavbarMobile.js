import styled from "styled-components";

export const NavbarMobile = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  width: 50vh;
  right: 0;
  top: -6px;
  padding: 18px 16px;
`;

export const ToggleIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
`;

export const NavbarOptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-top: 22px;
  width: 100%;
  height: 98%;
`;

export const Option = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 9px 0px;
`;
