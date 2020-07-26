import React from "react"
import ImageC from "./ImageC"
import InputC from "./InputC"
import About from "./About"
import Rooms from "./Rooms"
import Services from "./Services"
import See from "./See"
import ImageChange from "./Imagechange"
import Example from './seedo';
import Contact from "./Contact"
const NavbarC=()=>{
    
    return (
        <div>
        <div>
        <nav
         className="navbar 
         navbar-dark
         navbar-expand-lg
         bg-dark
         fixed-top
         ">
        
        <button 
        className="navbar-toggler"
        type="button" 
        data-toggle="collapse"
        data-target="#navbarNav" 
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse 
         justify-content-center" 
         id="navbarNav">
        <ul className="navbar-nav">

        <li className="nav-item">
        <a 
        id="tama"
        className="nav-link"
        href="#header">HOME 
        </a>
        </li>

        <li className="nav-item">
        <a className="nav-link" 
           id="tamab"
           href="#about"
           >ABOUT
        </a>
        </li>

        <li className="nav-item">
        <a 
        className="nav-link "
        id="tamac"
        href="#header2">ROOMS</a>
        </li>

        <li className="nav-item">
        <a className="nav-link "
        id="tamad" 
        href="#ss">
        SERVICES</a>
        </li>

        <li className="nav-item">
        <a className="nav-link "
        id="tamae" 
        href="#im">
        GALLERY</a>
        </li>

        <li className="nav-item">
        <a className="nav-link"
        id="tamaf"
        href="#see">
        SEE&DO</a>
        </li>

        <li className="nav-item">
        <a className="nav-link " 
        id="tamag"
        href="#con">
        CONTACT</a>
        </li>
        </ul>

        <button 
        id="but"
        className="btn btn-outline-light my-2 my-sm-0"
         type="submit">Book a Room
         </button> 
         </div> 
      </nav>
      </div>
      <ImageC/>
      <InputC/>
      <About/>
      <Rooms/>
      <Services/>
      <ImageChange/>
      <See/>
      <Example/>
      <Contact/>
      </div>
    )

}
export default NavbarC