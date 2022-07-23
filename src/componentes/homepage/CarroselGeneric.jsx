import React from "react";
import { useRef } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import {
  ConteinerCarrosel,
  ButtonPrevious,
  ButtonNext,
  Carrosel,
} from "./styles/CarroselStyles";

const CarroselGeneric = ({ children, gap }) => {
  const carroselscroll = useRef();

  const handleNextSlide = () => {
    carroselscroll.current.scrollLeft += carroselscroll.current.offsetWidth;
  };
  const handlePreviousSlide = () => {
    carroselscroll.current.scrollLeft -= carroselscroll.current.offsetWidth;
  };

  return (
    <ConteinerCarrosel>
      <Carrosel gap={gap} ref={carroselscroll}>
        {children}
      </Carrosel>
      <ButtonPrevious onClick={handlePreviousSlide}>
        <BsChevronLeft />
      </ButtonPrevious>
      <ButtonNext onClick={handleNextSlide}>
        <BsChevronRight />
      </ButtonNext>
    </ConteinerCarrosel>
  );
};
export default CarroselGeneric;
