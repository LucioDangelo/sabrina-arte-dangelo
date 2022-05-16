import ItemDetail from './ItemDetail';
import React, { useEffect, useState } from 'react';

const ItemDetailContainer = ({id}) => {
    const [items,setItems] = useState([]);

    const itemList = [
        {
            id: 1,
            title: "Posteos de Instagram",
            price: 10000,
            pictureUrl: "producto1.png",
            description: "Descripcion ejemplo de un producto seleccionado por Id"
        },
        {
            id: 2,
            title: "Storys de Instagram",
            price: 20000,
            pictureUrl: "producto2.png",
            description: "bbbbbbbbbbbbbbbbbbbbbbb"
        },
        {
            id: 3,
            title: "Newsletters",
            price: 30000,
            pictureUrl: "producto3.png",
            description: "cccccccccccccccccccccc"
        }
    ]

    const getById = (id, array) => array.find((el) => el.id === id);

    const getItem = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(itemList);
        }, 2000);
    });

    const getItemsFromCatalogue = async (id,setItems) => {
        try {
            const result = await getItem;
            setItems(getById(id,result));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getItemsFromCatalogue(Number(id),setItems);
        console.log(items);
    }, [id]);

    return(
        <div  className="product-list-container">
                        <ItemDetail item={items} />
        </div>
    )


}

export default ItemDetailContainer