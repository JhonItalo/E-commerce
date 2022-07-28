import styled from "styled-components";

export const ConteinerHeader = styled.header`
  width: 100%;
  height: 66px;
  background-color: white;
`;
export const Content = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: beige;

  .menu {
    display: none;
  }

  .logo {
    h1 {
      font-size: 2rem;
      border: 0.1px solid red;
    }
  }
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const ConteinerBusca = styled.div`
  width: 65%;
  height: 55%;
  border-radius: 4px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(223, 228, 239);
  background-color: var(--azulfosco);

  input {
    width: 96%;
    font-size: 0.9rem;
    border: none;
    outline: none;
    background-color: inherit;
  }
  svg {
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  /* @media (max-width: 1140px) {
    width: 45%;
    height: 70%;
  }
  @media (max-width: 930px) {
    width: 60%;
  }
  @media (max-width: 700px) {
    display: none;
  }*/
`;
export const ConteinerServicos = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border: 1px solid orange;
`;

export const Carrinho = styled.div`
  svg {
    font-size: 1.6rem;
  }
`;
export const ContentItens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;

  span {
    font-size: 0.8rem;
    font-weight: 100;
    color: rgba(0, 0, 0, 0.7);
    b {
      font-size: 0.9rem;
      font-weight: 700;
    }
  }
  //icons comments e user
  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  //icons arrow down
  svg ~ svg {
    font-size: 1rem;
    margin-top: 15%;
    margin-right: 0rem;
  }
`;
export const DesignMobile = styled.div`
  display: none;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-mobile {
      font-size: 1.8rem;
    }
    svg {
      font-size: 1.5rem;
    }
  }
`;
