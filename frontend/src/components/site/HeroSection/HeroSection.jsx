import React from 'react'
import '../HeroSection/HeroSection.css'
const HeroSection = () => {
  return (
    <React.Fragment>
    <div id="carouselExampleRide" class="carousel slide mycarousel" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active mycarousel-slide">
    <h1>Tasty & Delicious Food</h1>
      <img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item mycarousel-slide">
    <h1>Tasty & Delicious Food</h1>
      <img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item mycarousel-slide">
    <h1>Tasty & Delicious Food</h1>
      <img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </React.Fragment>
  )
}

export default HeroSection
