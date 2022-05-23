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
    }, [id]);
    console.log(product);
    return(
        <div>
        <h1 className="mt-5">Detalle de Producto</h1>
        <div  className="product-list-container">
            {product.map((product) => (
                        <ItemDetail product={ product } key={product.id} />
            ))}
        </div>
        </div>
    )


}

export default ItemDetailContainer