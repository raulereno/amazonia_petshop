import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import "./styles/index.scss"
import "./styles/normalize.scss"
import Navbar from "./components/Navbar/Navbar"

function App() {
  //Aqui voy a colocar las rutas
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
    </BrowserRouter>    
  )
}

export default App
