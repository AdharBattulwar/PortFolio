import React from 'react'
import "./css/homepage.css"
import Navbar from "./navbar.jsx"
import HomeContent from "./homecontent.jsx"
import Services from "./services.jsx"
import Education from "./education.jsx"
import Contact from "./contact.jsx"
import Project from "./project.jsx"
import HireMe from "./hireMe.jsx"
const homepage = () => {
  return (
    <div className='homePage'>
      <Navbar/>
      <HomeContent/>
      <Services/>
      <Project/>
      <HireMe/>
      <Education/>
      <Contact/>
    </div>
  )
}

export default homepage
