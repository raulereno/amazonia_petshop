import React from 'react';
import "./navbar.scss"

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {
	return <div id='Navbar'>
		<img src="./assets/logos/amazonia logo blanco.png"alt="" />
		<ul>
			<li>Inicio</li>
			<li>Productos</li>
			<li>Servicios</li>
			{/* <li>Peluqueria</li>
			<li>Clinica</li> */}
			<li>Adopta</li>
			<li>Iniciar Sesión</li>
		</ul>
	</div>;
};

export default Navbar;
