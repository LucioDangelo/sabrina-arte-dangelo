import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';
import { traerProducto } from '../data/products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({}) => {
    const [product,setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        traerProducto(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => console.log(error));
    }, []);
    console.log(product);
    return(
        <div  className="product-list-container">
                        <ItemDetail product={ product } key={product.id} />
        </div>
    )


}

export default ItemDetailContainer