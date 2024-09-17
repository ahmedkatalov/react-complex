import titleIcon from "./img/parkline.svg"
import img1 from "./img/img1.png"
import img2 from "./img/slide2.png"
import img3 from "./img/slide3.png"

import { useState } from "react"
import PopupGreen from "./PopupGreen"
import Slider from 'react-slick';

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./GreenSlider.index.css"


export function GreenSlider() {


    const [isOpen, setIsOpen] = useState(false);
        
    const openPopup = () => {
        setIsOpen(true); // Открываем попап
    };

    const closePopu = () => {
        setIsOpen(false); // Закрываем попап
    };





    const settings = {
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <BsArrowLeftCircleFill />,
        nextArrow: <BsArrowRightCircleFill />,
    };

    const images = [img1, img2, img3];

    return (
        <>
            <div className="greenSlideContainer">
           <div className="blueContent">
            <div className="blueTitles">
                <div className="text">
            <h1>River Line <img src={titleIcon} alt="" /></h1>
            <p>Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки Раменки</p>
            </div>
                <div className="buttonBlue">
                    <button onClick={openPopup}>Посмотреть планировки</button>
                </div>
            </div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            </div>
            {isOpen && <PopupGreen closePopu={closePopu} />}
        </div>
        </>
    )
}