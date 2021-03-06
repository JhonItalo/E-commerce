import styled from "styled-components";

export const ConteinerOfertasOn = styled.section`
  width: 100%;
  margin-bottom: 7rem;
  // border: 1px solid green;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 30px;
  }
`;
export const CarroselItem = styled.div`
  picture img {
    //width: 390px;
    //height: 340px;
    border-radius: 2%;
  }
`;

export const Link = styled.a`
  //width: 30%;
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
