import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import "./listProducts.scss"
export interface ListProductsInterface { }

const ListProducts: React.FC<ListProductsInterface> = () => {
	return <div id='list_products'>
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
	</div>;
};

export default ListProducts;
