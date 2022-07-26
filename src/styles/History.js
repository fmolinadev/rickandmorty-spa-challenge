import styled from "styled-components";

export const HistoryContainer = styled.section`
  height: 480px;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export const ToggleMenuHistory = styled.div`
  padding-top: -12px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-style: italic;
`;

export const CardHistory = styled.article`
  display: flex;
  flex-direction: colum;
  align-items: center;
  justify-content: space-between;
  padding: 5px 1px;
  :hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageHistory = styled.img`
  height: 50px;
  width: 50px;
`;

export const ResumeHistory = styled.div`
  display: flex;
  font-style: normal;
  flex-direction: colum;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-size: 15px;
  padding-right: 3px;
`;
