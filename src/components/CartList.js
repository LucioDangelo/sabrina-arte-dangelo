import React from "react";
import { useContext } from "react";
import CartListProduct from "../components/CartListProduct";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartList = () => {
  const cartContext = useContext(CartContext);
  const { cart, clear, removeItem } = cartContext;
  //console.log(cart);
  //console.log(cart.length);
 
  return (
    <section>
      {cart.map((product) => {
        return <CartListProduct key={product.id} product={product} removeItem={removeItem} />;
      })}

      {<button className="button-primary button-padding" onClick={clear}>
          Remover todos los Items
        </button>}

        {cart.length ? ( null ) : (<div><h3>No Hay Items</h3><Link to="/"><button>Buscar producto</button></Link></div>)}

        <div ><h2>Total de productos: {cartContext.getTotalQuantity()}</h2></div>
        <div ><h2>Precio Total: {cartContext.getTotalPrice()}</h2></div>

    </section>
  );
};

export default CartList;
