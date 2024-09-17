import "./GridImages.index.css"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
export function GridImages () {
    return(
        <>
        <div className="gridImagesContainer">
            <div className="gridImages">
                <div className="dlina firstImg"><img src={img1} alt="" /></div>
                <div className="dlina secondImg"><img src={img2} alt="" /></div>
                <div className="dlina threwImg"><img src={img3} alt="" /></div>
                <div className="dlina fourImg"><img src={img4} alt="" /></div>
            </div>
        </div>
        </>
    )
}