//styles
import { ConteinerBombando, CarroselItem, Link } from "./styles/Bombandostyles";
//componentes
import CarroselGeneric from "./CarroselGeneric";
//assets
import black from "../../assets/black.png";
import man from "../../assets/men.png";
import girl from "../../assets/girl.png";
import suits from "../../assets/suits.png";
import fly from "../../assets/fly.png";
import lingerie from "../../assets/lingeriess.png";
import white from "../../assets/white.png";

function Bombando() {
  return (
    <ConteinerBombando>
      <h2>Tá Bombando!</h2>
      <CarroselGeneric gap="3rem">
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={black} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Ace">Ace</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={man} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Festivais">Festivais</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={girl} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Algodão pima">Algodão pima</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={suits} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Blazer">Blazer</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={white} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Lifestyles">Lifestyle</span>
          </CarroselItem>
        </Link>
        <Link href="#" alt="ecormer">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={lingerie}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
            <span title="Lingerie">Lingerie</span>
          </CarroselItem>
        </Link>
      </CarroselGeneric>
    </ConteinerBombando>
  );
}
export default Bombando;
