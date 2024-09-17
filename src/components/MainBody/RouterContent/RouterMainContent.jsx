import "./RoterContent.index.css"
import { useNavigate } from 'react-router-dom';
import routerContentImg from "./img/Test/Group.svg"
export function RouterMainContent () {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/page1');  // Переход на маршрут /test
    };
   return (
    <>
    <div className="routerMainContainer">
        <div className="routerContainerText">
            <h1>Какая квартира подойдет именно вам?</h1>
            <h3>Ответьте на 4 вопроса, чтобы подобрать идеальный вариант недвижимости</h3>
            <button onClick={handleButtonClick}>Пройти тест</button>
        </div>
        <div className="routerImgCont">
            <div className="flexImg">
            <img src={routerContentImg}alt="" />
            </div>
            <div className="flexImg2">
            <img src={routerContentImg}alt="" />
            </div>
        </div>
    </div>
    </>
   )
}