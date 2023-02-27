import React from 'react';
import "./map.scss"

export interface MapInterface {}

const Map : React.FC<MapInterface> = () => {
	return <div id='container_map'>
		<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13619.346841371284!2d-64.4947923!3d-31.4186247!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6766b2f7853b%3A0xf9bed8662c66abc5!2sAmazonia%20Cl%C3%ADnica%20Veterinaria%20Petshop!5e0!3m2!1ses-419!2sar!4v1676926816520!5m2!1ses-419!2sar"   allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
	</div>;
};

export default Map;
