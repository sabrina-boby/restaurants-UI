// import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
// import Show from '../components/Show'
const Home = () => {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
    </>
  )
}

export default Home
