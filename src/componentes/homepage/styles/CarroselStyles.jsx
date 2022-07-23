import styled from "styled-components";

export const ConteinerCarrosel = styled.div`
  width: 100%;
  position: relative;
`;
export const Carrosel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: ${(props) => props.gap || "3rem"};
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-right: 2rem;
  //background-color: yellow;

  ::-webkit-scrollbar {
    display: none;
  }
`;
export const ButtonNext = styled.button`
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  right: 5px;
  border: none;
  border-radius: 50%;
  background-color: white;

  svg {
    font-size: 2rem;
  }
`;
export const ButtonPrevious = styled.div`
  padding: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 5px;
  border: none;
  border-radius: 50%;
  background-color: white;

  svg {
    font-size: 2rem;
  }
`;
