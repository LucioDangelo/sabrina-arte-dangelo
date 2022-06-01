import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [add, addState] = useState(false);

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;

  const onAdd = (count) => {
    alert(`Has anadido al carrito ${count} productos.`);
    addToCart(product, count);
    addState(!add);
    console.log(add);
    console.log(product);
    console.log(count);
  };

  return (
    <article className="product-card">
      <img
        className="product-card__picture"
        src={product.img}
        alt={product.name}
      />
      <h3 className="product-card__title">{product.name}</h3>
      <h4 className="product-card__title">{product.id}</h4>
      <span className="product-card__title">${product.price}</span>
      <h4 className="product-card__title text-white">a</h4>
      <div>
        {add ? (
          <div>
            <h3>Anadido al carrito</h3>
            <Link to="/cart">
              <button>Terminar mi compra</button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        )}
      </div>
    </article>
  );
};

export default ItemDetail;
