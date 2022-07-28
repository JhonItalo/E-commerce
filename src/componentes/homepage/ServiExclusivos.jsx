import React from "react";

//componentes
import CarroselGeneric from "../CarroselGeneric";
//styles
import {
  ConteinerExclusivos,
  CarroselItem,
  Link,
} from "./styles/ServExclusivosStyles";
//assets
import blue from "../../assets/390x340.png";

const ServiExclusivos = () => {
  return (
    <ConteinerExclusivos>
      <h2>Serviços exclusivos</h2>
      <CarroselGeneric gap="1rem">
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </CarroselItem>
        </Link>
        <Link href="#" alt="img" title="Ecorm Online">
          <CarroselItem>
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </CarroselItem>
        </Link>
      </CarroselGeneric>
    </ConteinerExclusivos>
  );
};

export default ServiExclusivos;
