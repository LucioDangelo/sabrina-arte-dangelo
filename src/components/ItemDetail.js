import React from "react";

const ItemDetail = ({ item }) => {
    return (
      <article className="product-card">
      <h4>Ejemplo de detalle de un producto seleccionado por Id</h4>
      <img className="product-card__picture" src={item.pictureUrl} alt="" />
  
      <h3 className="product-card__title">{item.title}</h3>
      <h4 className="product-card__title">{item.description}</h4>
      <span className="product-card__title">${item.price}</span>
      </article>
    )
  }
  
  export default ItemDetail