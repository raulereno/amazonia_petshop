import React from 'react';
export interface FooterInterface {}

const Footer : React.FC<FooterInterface> = () => {
	return <div>
		<div>
			<h3>Explora</h3>
			<ul>
				<li>Sobre nosotros</li>
				<li>Petshop</li>
				<li>Clinica</li>
				<li>Peluqueria Canina</li>
				<li>Galeria</li>
			</ul>
		</div>
		<div>
			<h3>Contacto</h3>
			<ul>
				<li>Av San Martín 377,Villa Carlos Paz, Córdoba</li>
				<li></li>
				<li>(+54) 3541 373562</li>
			</ul>
		</div>

	</div>;
};

export default Footer;
