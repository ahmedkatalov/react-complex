import logos from "./img/logos.png"
import "./Logos.index.css"
export function MessageContainer () {
    return(
        <>
        <div className="messageContainer">
            <div className="contentLogos">
            <h1>Самые выгодные условия кредитования от 20 банков</h1>
            <img src={logos} alt="" />
            </div>
        </div>
        </>
    )
}