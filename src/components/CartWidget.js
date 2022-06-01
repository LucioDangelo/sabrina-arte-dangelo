import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;


  return (
    <div className="cart-widget">
      <Link to="/cart" className="nav-item nav-link h4">
        <img
          src="./shopping-cart.png"
          href="/"
          alt="/"
          width="30"
          color="grey"
        ></img>
        {cart.length === 0 ? null : (
          <div className="cart-quantity">{cartContext.getTotalQuantity()}</div>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;
