import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div className='container d-flex justify-content-center row'>
            {products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;