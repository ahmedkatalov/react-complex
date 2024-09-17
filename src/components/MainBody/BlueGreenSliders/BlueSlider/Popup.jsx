import "./BlueSlider.index.css"
import imgPopup from "./img/img.svg"
import x from "./img/x.svg"
export default function PopUp({ closePopu }) {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="blue">
                <img src={imgPopup} alt="" />
                </div>

                <div className="popupText">
                <h1>Получите подробное описание и цены на свободные планировки в кластере River Line</h1>
                <p>PDF, можно скачать прямо сейчас</p>
                <div className="PopupForm">
                    <input type="text" placeholder="+7 ___ ___-__-__"/>
                    <button>Получить планировки</button>
                    <p>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                </div>
                </div>
            </div>
                <img src={x} className="buttonClosePopup" onClick={closePopu} />
        </div>
    );
}