import React from "react"
import About from "./About"
import Team from "./Team.js"

export default function MainContent() {
    return (  
    <div className="main-content">
        <div className="about-content">
        <About />
        </div>
        <div className="team-content"> 
        <Team />
        </div>
    </div>)
}