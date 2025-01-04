import React from 'react'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT." text="I'm a passionate Front-End Developer."/>
      <Footer/>
    </div>
  )
}

export default About