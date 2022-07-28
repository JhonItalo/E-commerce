import styled from "styled-components";

export const ConteinerEmAlta = styled.section`
  width: 100%;
  margin-bottom: 7rem;
  border: 1px solid green;

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 30px;
  }
`;
export const ConteinerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ContentItens = styled.div`
  width: 284px;
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  a {
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
  }
`;
