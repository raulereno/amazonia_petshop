import React from 'react';
import { Link } from 'react-router-dom';
import "./about.scss"

export interface AboutInterface {}

const About : React.FC<AboutInterface> = () => {
	return <div id='container_about'>
		<div className='header_pages'>
			<img src="https://cambiaundestino.org/wp-content/uploads/2018/06/conocelos.jpg" alt="" />
			<div className='header_contain'>
				<h1>
					Quienes somos
				</h1>
				<div className='header_routes'>
					<span><Link to={"/"}>Inicio</Link></span>
					<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></span>
					<span className='routes_current'><Link to={"/adopta"}>Quienes somos</Link></span>
				</div>
			</div>
		</div>
		<div id='about_main'>
			<div className='about_culture'> 
				<img src="https://paw.websitelayout.net/img/content/07.png" alt="" srcSet="" />
				<div>
					<h2>Bienvenido a Amazonia</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur distinctio quibusdam dicta quae officiis eos saepe quaerat, eum odit sapiente? Modi exercitationem et aut quisquam delectus ut hic cumque?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex natus laboriosam dolore, necessitatibus maxime explicabo reiciendis magnam quae nobis at consequatur inventore excepturi, sit assumenda laudantium porro, quam impedit!</p>
					<ul>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
					</ul>
				</div>
			</div>
			<div className="our_team">
				<h2>Nuestro Equipo</h2>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt sit temporibus repellendus sint velit ducimus non omnis! Sapiente voluptate enim eveniet ipsam veritatis dolor architecto, necessitatibus harum vel quia.</p>
			</div>
		</div>
	</div>;
};

export default About;
