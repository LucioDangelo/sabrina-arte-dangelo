import React from "react";


const ItemDetail = ({ product }) => {
    return (
      <article className="product-card">
      <h4>Ejemplo de detalle de un producto seleccionado por Id</h4>
      <img className="product-card__picture" src={product.img} alt={product.name} />
      <h3 className="product-card__title">{product.name}</h3>
      <h4 className="product-card__title">{product.id}</h4>
      <span className="product-card__title">${product.price}</span>
      </article>
    )
  }
  
  export default ItemDetail