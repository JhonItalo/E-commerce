import { Link } from "react-router-dom";
//icons
import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
//styles
import {
  ConteinerHeader,
  Content,
  ConteinerBusca,
  ConteinerServicos,
  ContentItens,
  Carrinho,
  DesignMobile,
} from "./styles/HeaderStyles";

function Header() {
  return (
    <ConteinerHeader>
      <Content>
        <div className="menu">
          <AiOutlineMenu />
        </div>

        <div className="logo">
          <Link to="/home">
            <h1>A&C</h1>
          </Link>
        </div>

        <ConteinerBusca>
          <input
            type="text"
            placeholder="busque por produto, categoria ou marca..."
          />
          <BsSearch />
        </ConteinerBusca>

        <ConteinerServicos>
          <ContentItens>
            <FaRegComment />
            <div>
              <p>serviçose e</p>
              <b>atendimento</b>
            </div>
            <IoIosArrowDown />
          </ContentItens>

          <ContentItens>
            <AiOutlineUser />
            <div>
              <p>minha conta e</p>
              <b>meus pedidos</b>
            </div>
            <IoIosArrowDown />
          </ContentItens>

          <Carrinho>
            <a href="dfgg" alt="!hj">
              <BsBag />
            </a>
          </Carrinho>
        </ConteinerServicos>

        <DesignMobile>
          <AiOutlineMenu />
          <h1 className="logo-mobile">E-commerce</h1>
          <BsSearch />
        </DesignMobile>
      </Content>
    </ConteinerHeader>
  );
}

export default Header;
