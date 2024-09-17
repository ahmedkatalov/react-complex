
import Gerl from "./img/Col2.png"
import icons from "./img/icon.svg"
 export function PersonalityPresentation ()  {
  return (
    <>
        <div className="containerPresentation">
          <div className="flex">
          <div className="presentTitles">
            <h4>СПЕЦИАЛЬНО ДЛЯ ВАС</h4>
            <h1>Персональная презентация West Garden</h1>
          <div className="presentP">
            <ul className="items">
              <li><img src={icons}/>Подробно расскажем про жилой комплекс</li>
              <li><img src={icons}/>Ознакомитесь со всеми планировками и ценами</li>
              <li><img src={icons}/>Прогуляетесь по благоустроенной набережной</li>
            </ul>
          </div>
          <div className="presentForm">
            <div className="presentFormTitle">
              <p>Закрепить за номером</p>
              <input type="number" placeholder="+7(___) ___ - __ - __"/>
              <button>Записаться на презентацию</button>
              <p className="footerP">Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
            </div>
          </div>
          </div>
          <div className="presentImgGerl">
            <img src={Gerl} alt="" />
          </div>
          </div>

        </div>
    </>
  );
};
