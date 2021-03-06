import React from "react";
//component
import CarroselGeneric from "../CarroselGeneric";
//style
import {
  ConteinerOfertasOn,
  CarroselItem,
  Link,
} from "./styles/OfertasOnStyles";
//assets
import modelo1 from "../../assets/modelo1.png";
import modelo2 from "../../assets/modelo2.png";
import modelo3 from "../../assets/modelo3.png";
import modelo4 from "../../assets/modelo4.png";
import modelo5 from "../../assets/modelo5.png";

function OfertasOn() {
  return (
    <ConteinerOfertasOn>
      <h2>Ofertas muito on</h2>
      <CarroselGeneric gap="0.1rem">
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={modelo5}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={modelo2}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={modelo3}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={modelo4}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img
                src={modelo1}
                alt="black friday"
                width="100%"
                height="auto"
              />
            </picture>
          </CarroselItem>
        </Link>
      </CarroselGeneric>
    </ConteinerOfertasOn>
  );
}

export default OfertasOn;
