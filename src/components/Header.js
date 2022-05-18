import React from "react"
import logo from "../logo.png"

export default function Header() {

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-bar").style.padding = "0.25vw 0px";
    document.getElementById("nav-bar").style.background = "#1f1f1fa5";
    document.getElementById("nav-items").style.fontSize = "16px";
    document.getElementById("logo").style.width = "100px";
  } else {
    document.getElementById("nav-bar").style.padding = "0.5vw 0";
    document.getElementById("nav-bar").style.background = "#1f1f1f";
    document.getElementById("nav-items").style.fontSize = "20px";
    document.getElementById("logo").style.width = "150px";
  }
}

    return( 
        <header>
             <nav className="nav-bar" id="nav-bar">
                 <img src={logo} className="logo-img" id="logo" alt="logo"></img>
                 <ul className="nav-items" id="nav-items">
                     <li href="">Projects</li>
                     <li href="" >About</li>
                     <li href="">Contact</li>
                     <li href="">Team</li>
                 </ul>
             </nav>
         </header>      
     )
 }
