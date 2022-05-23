import React from 'react'
import CartWidget from './CartWidget'
import  { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-beige flex-wrap justify-content-between">
   

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <Link to="/" className="nav-item nav-link h4"> <img src='./logo192.png' href='/' alt='/' width='30' color='grey'></img></Link>
      <Link to="/category/ilustracion" className="nav-item nav-link h4">Ilustracion</Link>
      <Link to="/category/logo" className="nav-item nav-link h4">Logo & Identity</Link>
      <Link to="/category/socialmedia" className="nav-item nav-link h4">Social Media</Link>
    </ul>
  </div>
  <CartWidget/>


</nav>
  )
}

export default NavBar