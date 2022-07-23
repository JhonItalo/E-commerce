
//icons
import { BsBag } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineMenu } from "react-icons/ai"
//styles
import { ConteinerHeader, ContentSearch, ContentUserServices, UserServicesItem, Logo, DesignMobile } from "./styles/HeaderStyles";


function Header() {
    return (
        <ConteinerHeader>
            <Logo>E-commerce</Logo>

            <ContentSearch>
                <input type="text" placeholder="busque por produto, categoria ou marca..." />
                <BsSearch />
            </ContentSearch>

            <ContentUserServices>
                <UserServicesItem>
                    <FaRegComment />
                    <div>
                        <p>serviços e</p>
                        <strong>atendimento</strong>
                    </div>
                    <IoIosArrowDown />
                </UserServicesItem>

                <UserServicesItem>
                    <AiOutlineUser />
                    <div>
                        <p>minha conta e</p>
                        <strong>meus pedidos</strong>
                    </div>
                    <IoIosArrowDown />
                </UserServicesItem>

                <div className="menu">
                    <AiOutlineMenu />
                </div>

                <BsBag />

            </ContentUserServices>

            <DesignMobile>
                <AiOutlineMenu />
                <h1 className="logo-mobile">E-commerce</h1>
                <BsSearch />
            </DesignMobile>
            
        </ConteinerHeader >



    );
}

export default Header;
