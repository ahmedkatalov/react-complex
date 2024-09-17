import "./Header.index.css";
import  {GridImages}  from "./GridImagesContent/GridImages";
import logo from "./img/Logo.png";
import svgLogo from "./img/logo.svg";
import line from "./img/line.png";

import award from "./img/award.png"
export function Header() {
  return (
    <>
      <header>
        <div className="header">
          <div className="leftTextLogo">
            <img src={logo} alt="" />
            <div className="leftHeaderTitle">
              <p>Официальный партнер АО «КККК»</p>
            </div>
          </div>
          <div className="rightText">
            <a href="">+7 495 845 19 34</a>
            <p className="state">работаем</p>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="mainTitle">
          <div className="mainText">
            <img src={svgLogo} alt="" />
            <h1>Жизнь в зеленом оазисе в статусном районе Москвы</h1>
            <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
            <img className="mainImg" src={line} alt="" />
          </div>
        </div>
      </main>
      <div className="mainOneNumberContainer">
      <div className="imgContainer">
        <div className="relativeOnImgContainer">
            <img src={award} alt="" />
            <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
      </div>
      </div>
      <GridImages/>
    </>
  );
}
