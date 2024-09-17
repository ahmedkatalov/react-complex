import aboutLobby from "./img/lobby.svg"
import aboutLobbyImg from "./img/img1.png"
import aboutLobbyImg2 from "./img/img2.png"
import aboutLobbyImg3 from "./img/img3.png"
import "./AboutInto.index.css"
export function AboutLobby () {
    return (
        <>
        <div className="containerAboutInto">
            <div className="lobbyImg">
            <img src={aboutLobby} alt="" />
            </div>
        </div>
            <div className="aboutLobbyContainers">
                <h1>Более 100 свободных квартир редких форматов</h1>
                <div className="aboutLobbyContainer">
                    <div className="aboutLobbyText">
                    <h2>Свободная планировка, возможность объединить квартиры до 500 м²</h2>
                        <p>Не ограничивайте себя при создании жилого пространства Вашей мечты, воспользуйтесь возможностью увеличения площади до комфортного Вам размера</p>
                        <button className="lobbyButton">Узнать стоимость </button>
                    </div>
                    <div className="aboutLobbyImgContainer">
                        <img src={aboutLobbyImg}alt="" />
                    </div>
                </div>
                <div className="aboutLobbyContainer">
                    <div className="aboutLobbyText">
                    <h2>Настоящий дровяной камин </h2>
                        <p>В пентхаусах предусмотрен дымоход с возможностью установки камина, чтобы Вы получали наслаждение от живого тепла в холодное время года</p>
                        <button className="lobbyButton">Узнать стоимость </button>
                    </div>
                    <div className="aboutLobbyImgContainer">
                        <img src={aboutLobbyImg2}/>
                    </div>
                </div>
                <div className="aboutLobbyContainer">
                    <div className="aboutLobbyText">
                    <h2>Собственная терраса до 17 м²</h2>
                        <p>Современная террасса с необыкновенными видами на благоустроенную набережную, МГУ им. М.В. Ломоносова и Воробьевы горы</p>
                        <button className="lobbyButton">Узнать стоимость </button>
                    </div>
                    <div className="aboutLobbyImgContainer">
                        <img src={aboutLobbyImg3}alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}