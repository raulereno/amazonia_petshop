import React from 'react';
import "./bottombar.scss"

export interface BottombarInterface {
	scrolling:boolean
}

const Bottombar : React.FC<BottombarInterface> = ({scrolling}) => {
	return <nav id='bottombar'>
		<img src={scrolling ? "./assets/logos/amazonia logo negro.png": "./assets/logos/amazonia logo blanco.png" } alt="" />
		<ul>
			<li className='active'>Inicio</li>
			<li>Productos</li>
			<li>Servicios</li>
			{/* <li>Peluqueria</li>
			<li>Clinica</li> */}
			<li>Adopta</li>
			<li>Iniciar Sesión</li>
		</ul>
	</nav>;
};

export default Bottombar;
