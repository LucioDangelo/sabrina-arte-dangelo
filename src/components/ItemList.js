import Item from './Item';
import React, { useEffect, useState } from 'react';

const ItemList = () => {
    const [products,setProducts] = useState([]);

    const productList = [
        {
            id: 1,
            title: "title1",
            price: 100,
            pictureUrl: "picture1.jpg"
        },
        {
            id: 2,
            title: "title2",
            price: 200,
            pictureUrl: "picture2.jpg"
        },
        {
            id: 3,
            title: "title3",
            price: 300,
            pictureUrl: "picture3.jpg"
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
        <div>
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