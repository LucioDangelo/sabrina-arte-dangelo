import React from 'react'
import  { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Link to="/cart" className="nav-item nav-link h4">Carrito</Link>
    // <img src='./shopping-cart.png' href='/' alt='/' width='30' color='grey'></img>
  )
}

export default CartWidget