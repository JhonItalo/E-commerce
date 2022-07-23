import { Link } from "react-router-dom";
import { ConteinerNav } from "./styles/Navstyles"

function Nav() {

    return (
        <ConteinerNav>
            <ul>
                <li> <Link to="portifolio/animations">outlet</Link></li>
                <li> <Link to="portifolio/animations">feminino</Link></li>
                <li> <Link to="portifolio/animations">masculino</Link></li>
                <li> <Link to="portifolio/animations">plus size</Link></li>
                <li> <Link to="portifolio/animations">infantil</Link></li>
                <li> <Link to="portifolio/animations">beleza</Link></li>
                <li> <Link to="portifolio/animations">mindse7</Link></li>
                <li> <Link to="portifolio/animations">calçados</Link></li>
                <li> <Link to="portifolio/animations">esportivo</Link></li>
                <li> <Link to="portifolio/animations">acéssorios e relógios</Link></li>
                <li> <Link to="portifolio/animations">eletrônicos</Link></li>
                <li> <Link to="portifolio/animations">casa</Link></li>
                <li> <Link to="portifolio/animations">personagens</Link></li>
                <li> <Link to="portifolio/animations">jeans</Link></li>
                <li> <Link to="portifolio/animations">novidades</Link></li>
            </ul>
        </ConteinerNav>

    )
}
export default Nav;

