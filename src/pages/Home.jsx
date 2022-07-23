import Banner from "../componentes/homepage/Banner";
import Bombando from "../componentes/homepage/Bombando";
import OfertasOn from "../componentes/homepage/OfertasOn";
import styled from "styled-components";

function Home() {
    return (
            <main>
                <Banner />
                <ConteinerSections>
                    <Bombando />
                    <OfertasOn/>
                </ConteinerSections>
               
            </main>

    )
}
export default Home;
export const ConteinerSections = styled.div`
    padding: 0 6%;
`