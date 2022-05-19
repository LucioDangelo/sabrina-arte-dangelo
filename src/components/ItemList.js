import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div>
            {products.map((prod) => (
                <Item product={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default ItemList;