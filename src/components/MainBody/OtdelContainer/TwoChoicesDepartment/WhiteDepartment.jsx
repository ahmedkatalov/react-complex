import "./deparments.index.css"
import Light1 from "./img/Light_1.png"
import Light2 from "./img/Description.png"
import Light3 from "./img/Light_2.png"
import Light4 from "./img/Light_3.png"


import Dark1 from "./img/Dark_1.png"
import Dark2 from "./img/Description2.png"
import Dark3 from "./img/Dark_2.png"
import Dark4 from "./img/Dark_3.png"

import VigImg from "./img/INTEKO.png"
import { useState } from "react"
import { DarkWhitePopup } from "./DarkWhitePopup"
export function WhiteDepartment () {
    const [open, setOpen] = useState(false)

    const openPop = () => {
        setOpen(true)
    }

    const cancelPop = () => {
        setOpen(false)
    }

    return (
        <>
        <div className="whiteDepartmentContainer">
            <div className="centr">
            <div className="whiteDepartmentTitles">
                <h1>2 варианта отделки</h1>
            </div>
            <div className="whiteDepartmentImg">
                <div className="whiteHeader">
                    <h2>Светлая отделка</h2>
                    <button onClick={openPop}>Скачать дизайн-буклет</button>
                </div>
                <div className="whiteImg">
                    <div className="flexImg">
                        <img src={Light1} alt="" />
                   <img src={Light2} alt="" />
                    </div>
                    <div className="flexImg">
                        <img src={Light3} alt="" />
                    <img src={Light4} alt="" />
                        </div>
                    
                </div>
            </div>
            <div className="whiteDepartmentImg">
                <div className="whiteHeader2">
                    <h2>Тёмная отделка</h2>
                    <button onClick={openPop}>Скачать дизайн-буклет</button>
                </div>
                <div className="whiteImg">
                    <div className="flexImg">
                        <img src={Dark1} alt="" />
                   <img src={Dark2} alt="" />
                    </div>
                    <div className="flexImg">
                        <img src={Dark3} alt="" />
                    <img src={Dark4} alt="" />
                        </div>
                    <div className="bigImg">
                        <img src={VigImg} alt="" />
                    </div>
                </div>
            </div>
            {open && <DarkWhitePopup cancelPop={cancelPop} />}
            </div>
        </div>
        </>
    )
}