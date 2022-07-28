import Banner from "../componentes/homepage/Banner";
import Bombando from "../componentes/homepage/Bombando";
import EmAlta from "../componentes/homepage/EmAlta";
import OfertasOn from "../componentes/homepage/OfertasOn";
import ServiExclusivos from "../componentes/homepage/ServiExclusivos";
import Sections from "../componentes/Sections";

function Home() {
  return (
    <main>
      <Banner />
      <Sections>
        <Bombando />
        <OfertasOn />
        <EmAlta />
        <ServiExclusivos />
      </Sections>
    </main>
  );
}
export default Home;
