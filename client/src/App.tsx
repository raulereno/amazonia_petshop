import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import "./styles/index.scss"
import "./styles/normalize.scss"

function App() {
  //Aqui voy a colocar las rutas
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}  />
        </Routes>
    </BrowserRouter>    
  )
}

export default App
