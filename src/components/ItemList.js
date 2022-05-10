import Item from './Item';
import React, { useEffect, useState } from 'react';

const ItemList = () => {
    const [products,setProducts] = useState([]);

    const productList = [
        {
            id: 1,
            title: "Posteos de Instagram",
            price: 10000,
            pictureUrl: "producto1.png"
        },
        {
            id: 2,
            title: "Storys de Instagram",
            price: 20000,
            pictureUrl: "producto2.png"
        },
        {
            id: 3,
            title: "Newsletters",
            price: 30000,
            pictureUrl: "producto3.png"
        }
    ]

    const getProducts = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(productList);
        }, 2000);
    });

    const getProductsFromCatalogue = async () => {
        try {
            const result = await getProducts;
            setProducts(result);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProductsFromCatalogue();
    }, []);

    return(
        <div  className="product-list-container">
            {products.map((product) => {
                return(
                    <div key={product.id}>
                        <Item
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        pictureUrl={product.pictureUrl} />
                    </div>
                )
            })}
        </div>
    )


}

export default ItemList