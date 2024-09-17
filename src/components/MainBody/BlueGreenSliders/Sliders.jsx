import { BlueSlider } from "./BlueSlider/BlueSlider"
import { GreenSlider } from "./GreenSlider/GreenSlider"

import "./BlueGreenSliders.index.css"
export function Sliders () {


    return(
        <>
        <div className="sliderBlueContainer">
            <div className="containerSliders">
        <BlueSlider />
            </div>
        </div>
        <div className="sliderGreenContainer">
        <div className="containerSliders">
            <GreenSlider/>
            </div>
        </div>
        </>
    )
}