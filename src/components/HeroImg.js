import "./HeroImgStyle.css"
import React from 'react'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-mg" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I AM A SOFTWARE ENGINEER</p>
            <h1>React Developer.</h1>
            <div>
            <Link to="/project" className="btn">PROJECTS</Link>
            <Link to="/contact" className="btn btn-light">CONTACT</Link>
        </div>
        </div>

    </div>
  )
}

export default HeroImg