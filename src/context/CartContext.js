import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  //const [total, setTotal] = useState(0);

  const addToCart = (product, count) => {
    if (cart.some((el) => el.id === product.id)) {
      const newCart = [...cart];
      newCart.forEach((el) => {
        if (el.id === product.id) {
          el.count = el.count + count;
        }
      });
      console.log(newCart);

      setCart([...newCart]);
    } else {
      let product2 = { ...product, count };
      setCart([...cart, product2]);
    }
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (itemId) => {
    const newCart = [...cart];
    let x = newCart.findIndex((el) => el.itemId === itemId);
    newCart.splice(x, 1);
    setCart([...newCart]);
  };

  //isInCart: (id) => true/false

  const getTotalQuantity = () => {
    let quantity = 0;
    const newCart = [...cart];
    for (const cart of newCart) {
      quantity += cart.count;
    }
    return quantity;
  };

  const getTotalPrice = () => {
    let price = 0;
    const newCart = [...cart];
    for (const cart of newCart) {
      price += cart.price;
    }
    return price + "$";
  };




  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clear,
        removeItem,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
