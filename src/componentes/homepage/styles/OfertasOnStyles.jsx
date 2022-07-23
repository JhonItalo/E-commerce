import styled from "styled-components";

export const ConteinerOfertasOn = styled.section`
  width: 100%;
  position: relative;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 40px;
  }
`;
export const Link = styled.a`
  border: 1px solid red;
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
  border: 1px solid blue;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: none;

  picture img {
    width: 100%;
    border-radius: 15%;
  }
`;
