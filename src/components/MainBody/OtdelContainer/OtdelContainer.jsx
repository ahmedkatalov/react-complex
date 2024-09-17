import "./Otdel.index.css"
import Frame1  from "./img/Frame1.svg"
import Frame2  from "./img/image2.svg"
import Frame3  from "./img/image3.svg"
import { WhiteDepartment } from "./TwoChoicesDepartment/WhiteDepartment"
export function OtdelContainer () {
    return (
        <>
        <div className="otdelContainer">
            <div className="centr">
            <div className="otdelTitles">
                <h1>Отделка от застройщика</h1>
                <p>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</p>
            </div>
            <div className="flexImgContainers">
                <div className="imgOtdelContainer">
                    <img src={Frame1} alt="" />
                    <div className="imgContainerText">
                            <h3>Готовый
                            дизайн-проект</h3>
                            <p>Воспользуйтесь возможностью сразу же заняться меблировкой и благоустройством новой квартиры, как только получите ключи</p>
                    </div>
                </div>
                <div className="imgOtdelContainer">
                    <img src={Frame2} alt="" />
                    <div className="imgContainerText">
                            <h3>Чистота и тишина, без шума и пыли</h3>
                            <p>Забудьте шум от «бесконечного ремонта» соседей и лифт, декорированный защитными материалами</p>
                    </div>
                </div>
                <div className="imgOtdelContainer">
                    <img src={Frame3} alt="" />
                    <div className="imgContainerText">
                            <h3>Выгода за счет оптовых закупок</h3>
                            <p>Благодаря оптовым закупкам застройщика, вы получаете возможность сэкономить на стоимости ремонта</p>
                    </div>
                </div>
            </div>
            <WhiteDepartment/>
            </div>
        </div>
        </>
    )
}