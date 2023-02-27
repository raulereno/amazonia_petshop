import React from 'react';
import "./clinic.scss"
import { Link } from 'react-router-dom';

export interface ClinicInterface { }

const Clinic: React.FC<ClinicInterface> = () => {
	return <div id='container_clinic'>
		<img src="https://www.moneytalksnews.com/workers/images/width=1920/wp-content/uploads/2020/05/12134357/shutterstock_1478029460-scaled.jpg?s=937391e8c716350eb60517fa413a2ac9f5c51ad0fb1e84222dd188f76a594063" alt="" />
		<div id='clinic_info'>
			<h2>La mejor atención para tus mascotas</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam aut perspiciatis eos. Odit amet doloribus laudantium maxime consequuntur autem animi similique, blanditiis earum dolor deserunt ducimus, quasi iste pariatur.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae incidunt animi tenetur sint deserunt nisi dolores quo sit molestiae, fugit ex eos atque, repudiandae quod! Sapiente, enim? Enim, pariatur.</p>
			<p><Link to={"/"}>Agendanos un turno.</Link></p>
		</div>
	</div>;
};

export default Clinic;
