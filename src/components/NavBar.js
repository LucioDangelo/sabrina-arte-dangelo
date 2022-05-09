import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-beige flex-wrap justify-content-between fixed-top">
   

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link h4" href="/">Ilustration</a>
      </li>
      <li className="nav-item">
        <a className="nav-link h4" href="/">Logo & Identity</a>
      </li>
      <li className="nav-item">
        <a className="nav-link h4" href="/">Social Media</a>
      </li>
    </ul>
  </div>
  <CartWidget/>


</nav>
  )
}

export default NavBar