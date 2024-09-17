import './deparments.index.css'
import x from "./img/x.svg"
export function DarkWhitePopup ({cancelPop}) {
    return (
        <>
                <div className="popup-overlay">
            <div className="popup-content">
                <div className="popupText">
                <h1>Получите дизайн-буклет с подробным описанием отделки тёмного интерьера</h1>
                <p>PDF, можно скачать прямо сейчас</p>
                <div className="PopupForm">
                    <button onClick={cancelPop}>Получить буклет</button>
                    <p>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                </div>
                </div>
            </div>
                <img src={x} className="buttonClosePopup" onClick={cancelPop} />
        </div>
        </>
    )
}