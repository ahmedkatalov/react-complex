import "./BlueSlider.index.css";
import titleIcon from "./img/Vector.svg"
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img4 from "./img/img4.png";
import img3 from "./img/img3.png";
import Slider from 'react-slick';
import { useState } from "react";

import PopUp from "./Popup"
 
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export function BlueSlider() {
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

    const images = [img1, img2, img3, img4];

    return (
        <div className="blueSlideContainer">
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
        {isOpen && <PopUp closePopu={closePopu} />}
        </div>
    );
}