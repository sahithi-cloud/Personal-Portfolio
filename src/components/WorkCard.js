import "./WorkCardStyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"



const WorkCard = (props) => {
  return (
    <div className="project-container">
    <div className="project-card">
        <h2 className="project-title">{props.title}</h2>
        <img src={props.imgsrc}/>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
        </div>

    </div>
</div>
  )
}

export default WorkCard