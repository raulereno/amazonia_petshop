import React from 'react';
import Navbar from './Navbar/Navbar';
import "./header.scss"

export interface HeaderInterface {}

const Header : React.FC<HeaderInterface> = () => {
	return <header id='container_main'>
		<Navbar/>
	</header>;
};

export default Header;
