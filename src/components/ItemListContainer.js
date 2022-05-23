import React, { useEffect, useState } from 'react';
import { traerProductos } from '../data/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import '../App.css';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        traerProductos(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => console.log(error));
    }, [categoryId]);

    return (
        <div className="container">
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;

// const ItemListContainer = (props) => {
//   return (
//     <div>
//     <h3>Greeting: {props.greeting}</h3>
//     <ItemCount stock="5" initial="1"></ItemCount>
//     <ItemList/>
//     <ItemDetailContainer id={1}/>
//     </div>
//   )
// }