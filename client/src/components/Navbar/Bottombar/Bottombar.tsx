import React from 'react'
import './bottombar.scss'
import { Link } from 'react-router-dom'

export interface BottombarInterface {
  scrolling: boolean
  location: string
}

const Bottombar: React.FC<BottombarInterface> = ({ scrolling, location }) => {
  return (
    <nav id='bottombar'>
      <Link to={'/'}>
        <img
          src={
            scrolling || location !== '/'
              ? './assets/logos/amazonia logo negro.png'
              : './assets/logos/amazonia logo blanco.png'
          }
          alt=''
        />
      </Link>
      <ul>
        <li className={location === '/' ? 'active' : ''}>
          <Link to={'/'}>Inicio</Link>
        </li>
        <li className={location === '/productos' ? 'active' : ''}>
          <Link to={'/productos'}>Productos</Link>
        </li>
        <li className={location === '/servicios' ? 'active' : ''}>
          <Link to={'/servicios'}>Servicios</Link>
        </li>
        <li className={location === '/sobrenosotros' ? 'active' : ''}>
          <Link to={'/sobrenosotros'}>Quienes somos</Link>
        </li>
        {/* <li>Peluqueria</li>
			<li>Clinica</li> */}
        <li className={location === '/adopta' ? 'active' : ''}>
          <Link to={'/adopta'}>Adopta</Link>
        </li>
        {/* <li className={location === "/login"? "active":""}>
					<Link to={"/login"}>Iniciar Sesión</Link>
				</li> */}
      </ul>
    </nav>
  )
}

export default Bottombar
