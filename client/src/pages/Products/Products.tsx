import React from 'react';
import "./products.scss"
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import { Link } from 'react-router-dom';
import ListProducts from './components/ListProducts/ListProducts';

export interface ProductsInterface {}

const Products : React.FC<ProductsInterface> = () => {
	return <div id='container_products'>
		<div className='header_pages'>
			<img src="https://paw.websitelayout.net/img/bg/page-title.jpg" alt="" />
			<div className='header_contain'>
				<h1>
					PetShop
				</h1>
				<div className='header_routes'>
					<span><Link to={"/"}>Inicio</Link></span>
					<span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg></span>
					<span className='routes_current'><Link to={"/productos"}>Productos</Link></span>
				</div>
			</div>
		</div>
			
		<div id='main_products'>
			<ProductsFilters/>
			<ListProducts/>
		</div>
	</div>;
};

export default Products;
