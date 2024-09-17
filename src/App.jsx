import { Header } from './components/Header/Header.jsx'
import { Map } from './components/MainBody/Map/Map.jsx'
import { EngineSlider } from './components/MainBody/Slider№1/EngineSlider.jsx'
import { Sliders } from './components/MainBody/BlueGreenSliders/Sliders.jsx'
import { AboutLobby } from './components/MainBody/AboutInto/AboutInterier.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RouterPage1 from "./components/MainBody/RouterContent/PagesRouter/RouterPage1.jsx"
import { RouterMainContent } from './components/MainBody/RouterContent/RouterMainContent.jsx'
import RouterPage2 from './components/MainBody/RouterContent/PagesRouter/RouterPage2.jsx'
import RouterPage3 from './components/MainBody/RouterContent/PagesRouter/RouterPage3.jsx'
import RouterPage4 from './components/MainBody/RouterContent/PagesRouter/RouterPage4.jsx'
import { OtdelContainer } from './components/MainBody/OtdelContainer/OtdelContainer.jsx'
import { MessageContainer } from './components/MainBody/Messages/MesageContainer.jsx'
import { Footer } from './components/MainBody/Footer/Footer.jsx'
import { useState } from 'react'
import './App.css'

function App() {
const [countChange, setCountChange] = useState(0)

  return (
    <>
    <div className="container">
      <Header/>
      <Map/>
      <EngineSlider/>
      <Sliders/>
      <AboutLobby/>
      <Router>
            <Routes>
                <Route path="/" element={<RouterMainContent/>} />
                <Route path="/page1" element={<RouterPage1 countChange = {countChange} setCountChange= {setCountChange}/>} />
                <Route path="/page2" element={<RouterPage2 countChange = {countChange} setCountChange= {setCountChange}/>} />
                <Route path="/page3" element={<RouterPage3 countChange = {countChange} setCountChange= {setCountChange}/>} />
                <Route path="/page4" element={<RouterPage4 countChange = {countChange} setCountChange= {setCountChange}/>} />
            </Routes>
        </Router>
        <OtdelContainer/>
        <MessageContainer/>
        <Footer/>
    </div>
    </>
  )
}

export default App
