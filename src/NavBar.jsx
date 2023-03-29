import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar  navbar-expand-lg bg-body-light mb-4">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#">LineBiz</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className='navbar-nav '>
        <a className='nav-link ' aria-current="page" href="#">Platforms</a>
        <a className='nav-link' href="#">Pricing</a>
        <a className='nav-link' href="#">Events</a>
        <a className='nav-link' href="#">About Us</a>
        <button class="btn btn-outline-dark rounded-5 px-5" type="submit">Join</button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default NavBar