import React from 'react';

const CartListProduct = ({ product, removeItem }) => {
    console.log(product);
    return(
        <article className="cart-item-card">
        <img className="product-card__picture" src={product.img} alt={product.name} />
        <h2 className="product-card__title">{product.name}</h2>
        <h3 className="product-card__title">${product.price}</h3>
        <h3 className="product-card__title">Cantidad:{product.count}</h3>
        <h3 className="product-card__title">Total: ${product.count * product.price}</h3>
        <button className="button-primary button-padding" onClick={()=>removeItem(product.id)}>Remover usando Id</button>
    </article>
)
}

export default CartListProduct