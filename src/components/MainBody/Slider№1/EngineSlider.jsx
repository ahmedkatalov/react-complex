import img1 from "./img/img1.png";
import img2 from "./img/slide2.png";
import img3 from "./img/slide3.png";
import img4 from "./img/img4.png";
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import Slider from 'react-slick';
import "./SliderOnde.index.css";
import { PersonalityPresentation } from "./PersonalityPres";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const EngineSlider = () => {
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <BsArrowLeftCircleFill className="slick-prev" />, // Кнопка "Назад"
    nextArrow: <BsArrowRightCircleFill className="slick-next" />, // Кнопка "Вперед"
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="gap" key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
      <PersonalityPresentation/>
    </div>
  );
}