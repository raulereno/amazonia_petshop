import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import "./styles/index.scss"
import "./styles/normalize.scss"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  //Aqui voy a colocar las rutas
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
        <Footer/>
    </BrowserRouter>    
  )
}

export default App
