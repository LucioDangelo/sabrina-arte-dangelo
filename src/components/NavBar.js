import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-beige flex-wrap justify-content-between fixed-top">
   

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link h4" href="/">Ilustration</a>
      </li>
      <li class="nav-item">
        <a class="nav-link h4" href="/">Logo & Identity</a>
      </li>
      <li class="nav-item">
        <a class="nav-link h4" href="/">Social Media</a>
      </li>
    </ul>
  </div>
  <CartWidget/>


</nav>
  )
}

export default NavBar