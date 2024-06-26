import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Tasty</span>
      </a>
      <ul class="nav nav-pills">
        <li class="nav-item"><Link href="#" class="nav-link" aria-current="page">Home</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Menu</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Specialities</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Reservation</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Blog</Link></li>
        <li class="nav-item"><Link href="#" to='/admin' class="nav-link">Admin</Link></li>
        <li class="nav-item"><Link href="#" class="nav-link">Contact</Link></li>
      </ul>
    </header>
  </div>
  )
}
export default Header
