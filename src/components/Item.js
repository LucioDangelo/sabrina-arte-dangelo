import React from 'react'

const Item = ({ id, price, title, pictureUrl}) => {
  return (
    <article className="product-card">
    <img className="product-card__picture" src={pictureUrl} alt="" />

    <h3 className="product-card__title">{title}</h3>
    <span className="product-card__title">${price}</span>
    </article>
  )
}

export default Item