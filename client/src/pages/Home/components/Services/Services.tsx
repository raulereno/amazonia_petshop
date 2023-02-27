import React from 'react';
import "./services.scss"
import { Link } from 'react-router-dom';
export interface ServicesInterface {}

const Services : React.FC<ServicesInterface> = () => {
	return <>
	<div id='container_services'>
		<h2>Que ofrecemos?</h2>
		<div id='services'>
			<div className='services_cards-petshop'>
				<Link to={"/"}>Pet Shop</Link>
			</div>
			<div className='services_cards-vet'>
				<Link to={"/"}>Clinica</Link>
			</div>
			<div className='services_cards-hairdressing'>
				<Link to={"/"}>Peluqueria Canina</Link>
			</div>
		</div>

	</div>;
	</>
};

export default Services;
