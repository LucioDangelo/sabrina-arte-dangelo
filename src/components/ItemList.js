import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div>
        <h1 className="mt-5">Lista de Productos</h1>
        <div className='container d-flex justify-content-center row'>
            {products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))}
        </div>
        </div>
    );
};

export default ItemList;