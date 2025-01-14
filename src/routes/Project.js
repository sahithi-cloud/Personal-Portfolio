import React from 'react'
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Dive into my journey of building functional and beautiful applications."/>
      <Work/>
      <Footer/>

    </div>
  )
}

export default Project