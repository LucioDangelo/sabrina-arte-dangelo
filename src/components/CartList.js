import React from "react";
import { useContext } from "react";
import CartListProduct from "../components/CartListProduct";
import { CartContext } from "../context/CartContext";

const CartList = () => {
  const cartContext = useContext(CartContext);
  const { cart, clear, removeItem } = cartContext;
  console.log(cart);

  return (
    <section>
      {cart.map((product) => {
        return <CartListProduct key={product.id} product={product} removeItem={removeItem} />;
      })}

      {<button className="button-primary button-padding" onClick={clear}>
          Remover todos los Items
        </button>}

    </section>
  );
};

export default CartList;
