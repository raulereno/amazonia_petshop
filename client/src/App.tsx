import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import './styles/index.scss'
import './styles/normalize.scss'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Products from './pages/Products/Products'
import Services from './pages/Services/Services'
import Adoption from './pages/Adoption/Adoption'
import About from './pages/About/About'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Products />} />
        <Route path='/servicios' element={<Services />} />
        <Route path='/adopta' element={<Adoption />} />
        <Route path='/sobrenosotros' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
