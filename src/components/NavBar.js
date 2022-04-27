import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-beige">
    <img src='./logoPrincipal.png' href='/' alt='/' width='100'></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mx-auto">
      <li class="nav-item">
        <a class="nav-link h4" href="/">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link h4" href="/">Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link h4" href="/">Contact</a>
      </li>
    </ul>
    <a class="nav-link h4" href="/">Login</a>
  </div>
</nav>
  )
}

export default NavBar