import React from "react";
//component
import {
  ConteinerEmAlta,
  ConteinerFlex,
  ContentItens,
} from "./styles/EmAltaStyle";
//style
//assets
import blue from "../../assets/blue.png";
import pink from "../../assets/pink.png";
import bege from "../../assets/bege.png";
import verde from "../../assets/verde.png";

function EmAlta() {
  return (
    <ConteinerEmAlta>
      <h2>Está em alta!</h2>
      <ConteinerFlex>
        <ContentItens>
          <a href="#" alt="sd">
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={blue} alt="black friday" width="100%" height="auto" />
            </picture>
          </a>

          <h3>Chegou agora</h3>
          <p>
            Cores vivas, composições <br /> monocromáticas e alfaiataria
            <br />
            contemporânea para você se inspirar!
          </p>

          <a href="#">Clique e confira</a>
        </ContentItens>
        <ContentItens>
          <a href="#" alt="sd">
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={pink} alt="black friday" width="100%" height="auto" />
            </picture>
          </a>

          <h3>Jogar não tem limites</h3>
          <p>
            Console Playstation PS5 + Jogo Horizon <br />
            Forbidden West
          </p>

          <a href="#">Clique e confira</a>
        </ContentItens>
        <ContentItens>
          <a href="#" alt="sd">
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={bege} alt="black friday" width="100%" height="auto" />
            </picture>
          </a>

          <h3>Mindse7</h3>
          <p>
            Lançamos os ícones do guarda-roupa <br /> atualizados para esta (e
            as próximas) <br /> temporadas
          </p>

          <a href="#">Clique e confira</a>
        </ContentItens>
        <ContentItens>
          <a href="#" alt="sd">
            <picture>
              {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
              <img src={verde} alt="black friday" width="100%" height="auto" />
            </picture>
          </a>

          <h3>Estética Minimalista</h3>
          <p>
            Looks minimalistas com muito <br /> preto&branco e peças elegantes{" "}
            <br /> e versáteis!
          </p>

          <a href="#">Clique e confira</a>
        </ContentItens>
      </ConteinerFlex>
    </ConteinerEmAlta>
  );
}

export default EmAlta;
