import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"
import "./FooterStyle.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:
                    "#fff", marginRight: "2rem"}}/>
                    <div> 
                        <p>2901 S King Drive</p>
                        <p>Chicago, IL</p>
                    </div>
                </div>

                <div className="Phone">
                    <h4>
                    <FaPhone size={20} style={{color:
                    "#fff", marginRight: "2rem"}}/> 
                    214-897-9663
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:
                    "#fff", marginRight: "2rem"}}/> 
                    baleraosahithi@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>Sahithi Balerao</h4>
                <p>
                Crafting seamless user experiences with code and creativity 
                </p>
                <p><i>– Aspiring Full Stack MERN Developer.</i></p>
                <div className="social">
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:
                    "1rem"
                    }}/>

                    <FaGithub size={30} style={{color:"#fff", marginRight:
                    "1rem"
                    }}/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer