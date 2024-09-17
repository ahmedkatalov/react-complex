import map from "./img/map.png"
import iconButton from "./img/panorama.svg"
import "./Map.index.css"
export function Map() {
    return (
        <>
        <div className="containerMap">
            <div>
            <div className="headerTitles">
                <h3>Престижное расположение</h3>
                <h1>Один из самых зелёных районов - столицы — Раменки</h1>
            </div>
            <div className="map">
                <img src={map} alt="" />
                <div className="footerTextMap">
                <p>ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»</p>
                <button className="buttonPanorama">
                    <img src={iconButton} alt="" />
                    Панорама района 360˚
                    </button>

                </div>
            </div>
            </div>
        </div>
        
        </>
    )
}
