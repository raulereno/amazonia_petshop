import React, { useEffect, useState } from 'react';
import Bottombar from './Bottombar/Bottombar';
import "./navbar.scss"
import Topbar from './Topbar/Topbar';

export interface NavbarInterface {}

const Navbar : React.FC<NavbarInterface> = () => {

	const [scrollY, setScrollY] = useState(0)

	window.onscroll= ()=>{
		let y= window.scrollY
		setScrollY(y)
	}

	useEffect(() => {
		console.log(scrollY);
	}, [scrollY])
	



	return <header id='container_navbar' className={scrollY === 0? "static_navbar": "scroll_navbar"}>
		<Topbar/>
		<Bottombar scrolling={scrollY===0 ? false:true} />
	</header>;
};

export default Navbar;
