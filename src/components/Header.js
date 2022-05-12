import React from "react"
import logo from "../logo.png"

export default function Header() {
    return( 
        <header>
             <nav className="nav-bar">
                 <img src={logo} className="logo-img"></img>
                 <ul className="nav-items">
                     <li href="">Projects</li>
                     <li href="" >About</li>
                     <li href="">Contact</li>
                     <li href="">Team</li>
                 </ul>
             </nav>
         </header>
     )
 }