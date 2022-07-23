import { useRef, useState, useEffect } from "react";
//style
import { ConteinerBanner, ConteinerRadios, Carrosel, Radios } from "./styles/BannerStyles";
//icons
import { BsChevronLeft } from "react-icons/bs"
import { BsChevronRight } from "react-icons/bs"
//assets
import woman2 from "../../assets/woman2.webp"
import halloween from "../../assets/halloween.webp"
import palito from "../../assets/palito.webp"


function Banner() {

    const carroselscroll = useRef();
    const [colorspan, setColorspan] = useState("start")

    useEffect(() => {
        let timer = setInterval(() => {
            if (carroselscroll.current.scrollLeft === 0) {
                setColorspan("centro")
                carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft + carroselscroll.current.offsetWidth;
            }
            else if (carroselscroll.current.scrollLeft === carroselscroll.current.offsetWidth) {
                console.log(carroselscroll.current.scrollLeft);
                setColorspan("end")
                carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft + carroselscroll.current.offsetWidth;
            }
            else if (carroselscroll.current.scrollLeft === (carroselscroll.current.offsetWidth * 2)) {
                setColorspan("start")
                carroselscroll.current.scrollLeft = 0;
            }
        }, 5000);

        return () => clearInterval(timer)

    }, []);


    const handleNextSlide = () => {
        if (carroselscroll.current.scrollLeft === 0) {
            setColorspan("centro")
            carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft + carroselscroll.current.offsetWidth;
        }
        else if (carroselscroll.current.scrollLeft === carroselscroll.current.offsetWidth) {
            console.log(carroselscroll.current.scrollLeft);
            setColorspan("end")
            carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft + carroselscroll.current.offsetWidth;
        }
        else if (carroselscroll.current.scrollLeft === (carroselscroll.current.offsetWidth * 2)) {
            carroselscroll.current.scrollLeft = carroselscroll.current.offsetWidth * 2;
        }

    }
    const handlePreviousSlide = () => {
        if (carroselscroll.current.scrollLeft === carroselscroll.current.offsetWidth * 2) {
            setColorspan("centro")
            carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft - carroselscroll.current.offsetWidth;
        }
        else if (carroselscroll.current.scrollLeft === carroselscroll.current.offsetWidth) {
            setColorspan("start")
            carroselscroll.current.scrollLeft = carroselscroll.current.scrollLeft - carroselscroll.current.offsetWidth;
        }
        else if (carroselscroll.current.scrollLeft === 0) {
            carroselscroll.current.scrollLeft = 0;
        }
    }

    const optionRadioCarroselStart = () => {
        carroselscroll.current.scrollLeft = 0;
        setColorspan("start")
    }
    const optionRadioCarroselCentro = () => {
        carroselscroll.current.scrollLeft = carroselscroll.current.offsetWidth;
        setColorspan("centro")
    }
    const optionRadioCarroselEnd = () => {
        carroselscroll.current.scrollLeft = 2 * carroselscroll.current.offsetWidth
        setColorspan("end")
    }

    return (
        <ConteinerBanner>
            <Carrosel ref={carroselscroll} >
                <picture className="carrosel__item" id="woman">
                    {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
                    <img src={woman2} alt="black friday" width="100%" height="auto" />
                </picture>
                <picture className="carrosel__item" id="halloween">
                    {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
                    <img src={halloween} alt="black friday" width="100%" height="auto" />
                </picture>
                <picture className="carrosel__item" id="palito">
                    {/*<source media="(min-width:650px)" srcset="img_pink_flowers.jpg"/>*/}
                    <img src={palito} alt="black friday" width="100%" height="auto" />
                </picture>
            </Carrosel>
            <ConteinerRadios>
                <Radios active={colorspan === "start" ? "True" : ""} onClick={optionRadioCarroselStart} >
                </Radios>
                <Radios active={colorspan === "centro" ? "True" : ""} onClick={optionRadioCarroselCentro} >
                </Radios>
                <Radios active={colorspan === "end" ? "True" : ""} onClick={optionRadioCarroselEnd} >
                </Radios>
            </ConteinerRadios>

            <button className="btn-Previous-Slide" onClick={handlePreviousSlide} >
                <BsChevronLeft />
            </button>
            <button className="btn-Next-Slide" onClick={handleNextSlide} >
                <BsChevronRight />
            </button>
        </ConteinerBanner >
    )

}

export default Banner;
