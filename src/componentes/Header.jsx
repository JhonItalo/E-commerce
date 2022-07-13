
//icons
import { BsBag } from "react-icons/bs"
import { BsSearch } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"
import { AiOutlineUser } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineMenu } from "react-icons/ai"
//styles
import { ConteinerHeader } from "./styles/HeaderStyles";


function Header() {
    return (
        <ConteinerHeader>
            <h1 className="logo">E-commerce</h1>

            <div className="inputSearch">
                <input type="text" placeholder="busque por produto, categoria ou marca..." />
                <BsSearch />
            </div>

            <div className="userServices">
                <div className="userServices__item">
                    <FaRegComment />
                    <div>
                        <p>serviços e</p>
                        <strong>atendimento</strong>
                    </div>
                    <IoIosArrowDown />
                </div>

                <div className="userServices__item">
                    <AiOutlineUser />
                    <div>
                        <p>minha conta e</p>
                        <strong>meus pedidos</strong>
                    </div>
                    <IoIosArrowDown />
                </div>
                <div className="menu">
                    <AiOutlineMenu />
                </div>
                <BsBag />
            </div>

            <div className="designMobile">
                <AiOutlineMenu />
                <h1>E-commerce</h1>
                <BsSearch />
            </div>
        </ConteinerHeader>



    );
}

export default Header;
