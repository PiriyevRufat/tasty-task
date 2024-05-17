import React from 'react'
import AboutSection from '../../../components/site/AboutSection/AboutSection'
import Card from '../../../components/site/Card/Card'
import HeroSection from '../../../components/site/HeroSection/HeroSection'
import "./Home.css"
const Home = () => {
  return (
    <div className='crud-sect'>
    <HeroSection/>
    <AboutSection/>
      <Card/>
    </div>
  )
}

export default Home
