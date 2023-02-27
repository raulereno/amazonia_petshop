import React from 'react';
import { Link } from 'react-router-dom';
import "./hairdressing.scss"
export interface HairdressingInterface { }

const Hairdressing: React.FC<HairdressingInterface> = () => {
	return <div id='container_hairdressing'>
		<div id='hairdressing_info'>
			<h2>Peluqueria Canina</h2>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus nam aut perspiciatis eos. Odit amet doloribus laudantium maxime consequuntur autem animi similique, blanditiis earum dolor deserunt ducimus, quasi iste pariatur.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae incidunt animi tenetur sint deserunt nisi dolores quo sit molestiae, fugit ex eos atque, repudiandae quod! Sapiente, enim? Enim, pariatur.</p>
			<p><Link to={"/"}>Agendanos un turno.</Link></p>
		</div>
		<img src="https://www.donbigotes.co/wp-content/uploads/bano.png" alt="" />
		</div>;
};

export default Hairdressing;
