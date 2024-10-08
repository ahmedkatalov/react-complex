
import img3 from "./img/card4.svg";
import img4 from "./img/card5.svg";
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import "./routerPage1.index.css";


export default function RouterPage3 ({setCountChange}) {
    const navigate = useNavigate();

    // Состояние для отслеживания выбранных фотографий по id
    const [checkedImages, setCheckedImages] = useState([]);

    // Функция для обработки клика на чекбокс
    const handleCheckboxChange = (id) => {
        if (checkedImages.includes(id)) {
            // Если изображение уже выбрано, удаляем его из списка
            setCheckedImages(checkedImages.filter(imageId => imageId !== id));
        } else {
            // Если изображение не выбрано, добавляем его в список
            setCheckedImages([id]);
        }
    };

    const handleButtonClick = () => {
        navigate('/page2');  // Переход на маршрут /
    };

    const handleButtonClickNext = () => {
        navigate('/page4'); 
        counerImg // Переход на маршрут /
    };

    const counerImg = () => {
        // Устанавливаем количество выбранных изображений как новое значение countChange
        setCountChange(checkedImages.length);
    };

    return (
        <>
         <div className="containerPageOne">
                <div className="cornerTitles">
                    <button onClick={handleButtonClick}>Назад</button>
                    <h3>3/4</h3>
                </div>
                <div className="containerPage1">
                    <h1>Планируете ли вы использовать подземный паркинг?</h1>
                    <div className="container">
                        <label htmlFor="check1">
                            <input
                                type="checkbox"
                                id="check1"
                                checked={checkedImages.includes(1)}  // Проверяем, выбрано ли изображение с id 1
                                onChange={() => handleCheckboxChange(1)}  // Обрабатываем клик для id 1
                            />
                            <img
                                src={img3}
                                alt="Placeholder"
                                className={`image ${checkedImages.includes(1) ? 'checked' : ''}`}  // Добавляем класс checked, если изображение выбрано
                            />
                        </label>

                        <label htmlFor="check2">
                            <input
                                type="checkbox"
                                id="check2"
                                checked={checkedImages.includes(2)}  // Проверяем, выбрано ли изображение с id 2
                                onChange={() => handleCheckboxChange(2)}  // Обрабатываем клик для id 2
                            />
                            <img
                                src={img4}
                                alt="Placeholder"
                                className={`image ${checkedImages.includes(2) ? 'checked' : ''}`}  // Добавляем класс checked, если изображение выбрано
                            />
                        </label>

                    </div>
                    <button className="pagesButtonNext" onClick={handleButtonClickNext}>Дальше</button>
                    
                </div>
            </div>
        </>
    )
}