import img3 from "./img/card6.svg";
import img4 from "./img/card7.svg";
import img5 from "./img/card8.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./routerPage1.index.css";

export default function RouterPage4({ countChange, setCountChange }) {
  const navigate = useNavigate();

  // Состояние для отслеживания выбранных фотографий по id
  const [checkedImages, setCheckedImages] = useState([]);

  // Функция для обработки клика на чекбокс
  const handleCheckboxChange = (id) => {
    if (checkedImages.includes(id)) {
      // Если изображение уже выбрано, удаляем его из списка
      setCheckedImages(checkedImages.filter((imageId) => imageId !== id));
    } else {
      // Если изображение не выбрано, добавляем его в список
      setCheckedImages([id]);
    }
  };

  const handleButtonClick = () => {
    navigate("/page3"); // Переход на маршрут /
  };
  const handleButtonClickHome = () => {
    navigate("/"); // Переход на маршрут /
    counerImg();
  };

  const counerImg = () => {
    // Устанавливаем количество выбранных изображений как новое значение countChange
    setCountChange(0);
  };
  let text = ""
  if(countChange !== 0){
     text = ` Подобрали ${countChange} варианта недвижимости по вашим параметрам.
              Куда их прислать? `
  } else {
    text = `Вы не сделали выбор, если хотите оставьте свой номер, мы отпрвим тебе дополнительное предложение`
  }

  return (
    <>
      <div className="containerPageOne">
        <div className="cornerTitles">
          <button onClick={handleButtonClick}>Назад</button>
          <h3>4/4</h3>
        </div>
        <div className="containerPage1">
          <div className="mainContainer">
            <h1>
              {text}
            </h1>
            <div className="container">
              <label htmlFor="check1">
                <input
                  type="checkbox"
                  id="check1"
                  checked={checkedImages.includes(1)} // Проверяем, выбрано ли изображение с id 1
                  onChange={() => handleCheckboxChange(1)} // Обрабатываем клик для id 1
                />
                <img
                  src={img3}
                  alt="Placeholder"
                  className={`image ${
                    checkedImages.includes(1) ? "checked" : ""
                  }`} // Добавляем класс checked, если изображение выбрано
                />
              </label>

              <label htmlFor="check2">
                <input
                  type="checkbox"
                  id="check2"
                  checked={checkedImages.includes(2)} // Проверяем, выбрано ли изображение с id 2
                  onChange={() => handleCheckboxChange(2)} // Обрабатываем клик для id 2
                />
                <img
                  src={img4}
                  alt="Placeholder"
                  className={`image ${
                    checkedImages.includes(2) ? "checked" : ""
                  }`} // Добавляем класс checked, если изображение выбрано
                />
              </label>
              <label htmlFor="check3">
                <input
                  type="checkbox"
                  id="check3"
                  checked={checkedImages.includes(3)} // Проверяем, выбрано ли изображение с id 2
                  onChange={() => handleCheckboxChange(3)} // Обрабатываем клик для id 2
                />
                <img
                  src={img5}
                  alt="Placeholder"
                  className={`image ${
                    checkedImages.includes(3) ? "checked" : ""
                  }`} // Добавляем класс checked, если изображение выбрано
                />
              </label>
            </div>
          </div>
          <input className="endPageInput" type="text" placeholder="+7___ ___-__-__"/>
          <button className="pagesButtonNext" onClick={handleButtonClickHome}>
          Получить варианты в Телеграм
          </button>
          <p>Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
        </div>
      </div>
    </>
  );
}
