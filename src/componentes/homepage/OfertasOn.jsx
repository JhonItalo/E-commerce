import React from "react";
//component
import CarroselGeneric from "./CarroselGeneric";
//style
import {
  ConteinerOfertasOn,
  CarroselItem,
  Link,
} from "./styles/OfertasOnStyles";

import fly from "../../assets/fly.png";

function OfertasOn() {
  return (
    <ConteinerOfertasOn>
      <h2>Ofertas muito on</h2>
      <CarroselGeneric gap="1rem">
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>

        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>

        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>

        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>

        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={fly} alt="black friday" width="100%" height="auto" />
            </picture>
            <span title="Pink">Pink</span>
          </CarroselItem>
        </Link>
      </CarroselGeneric>
    </ConteinerOfertasOn>
  );
}

export default OfertasOn;
