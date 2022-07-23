import styled from "styled-components";

export const ConteinerBombando = styled.section`
  width: 100%;
  margin-top: 25px;
  position: relative;
  margin-bottom: 7rem;
  overflow: hidden;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 40px;
  }
`;
export const Link = styled.a`
  flex: none;
  text-decoration: none;
  :visited {
    color: inherit;
  }
  :hover {
    color: inherit;
  }
  :active {
    color: inherit;
  }
  :link {
    color: inherit;
  }
`;
export const CarroselItem = styled.div`
  width: 168px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  picture img {
    width: 100%;
    flex: none;
    border-radius: 15%;
  }
`;
