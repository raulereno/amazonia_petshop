import React from 'react';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Map from './components/Map/Map';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
	return <div id='container_Home'>
				<Header/>
				<Services/>
				<Map/>
		</div>;
};

export default Home;
