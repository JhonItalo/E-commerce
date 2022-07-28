import styled from "styled-components";

export const ConteinerExclusivos = styled.section`
  width: 100%;
  margin-bottom: 7rem;
  // border: 1px solid green;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 30px;
  }
`;
export const Link = styled.a`
  width: 33%;
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
  width: 100%;

  picture img {
    width: 100%;
    border-radius: 2%;
  }
`;
