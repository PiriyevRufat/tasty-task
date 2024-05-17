import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <React.Fragment>
    <nav>
    <div class="container">
    <header class="d-flex flex-wrap justify-content-between py-3 mb-4 homepage-header">
      <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Tasty</span>
      </Link>
      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="#" class="nav-link" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Menu</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Specialities</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Reservation</Link></li>
        <li class="nav-item"><Link to='/basket' href="#" class="nav-link">Basket</Link></li>
        <li class="nav-item"><Link href="#" to='/admin' class="nav-link">Admin</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Contact</Link></li>
      </ul>
    </header>
  </div>
    </nav>
    </React.Fragment>
  )
}

export default Header
