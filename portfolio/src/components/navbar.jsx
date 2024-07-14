import React from 'react'
import "./css/navbar.css"

const navbar = () => {
  return (
    <div>
      <>
        <div className='navbarWrapper'>
            <div className='navbarMain'>
                <div className='navbarHome'>
                    <a href='/' className='navbarAHome'>Home</a>
                </div>
                <div className='navbarAbout'>
                    <a href='/' className='navbarAAbout'>About</a>
                </div>
                <div className='navbarService'>
                    <a href='/' className='navbarAService'>Service</a>                    
                </div>
                <div className='navbarIcon'>
                    <a href='/' className='navbarAIcon'>.</a>
                </div>
                <div className='navbarResume'>
                    <a href='/' className='navbarAResume'>Resume</a>
                </div>
                <div className='navbarProject'>
                    <a href='/' className='navbarAProject'>Project</a>
                </div>
                <div className='navbarContact'>
                    <a href='/' className='navbarAContact'>Contact</a>
                </div>
            </div>
        </div>
      </>
    </div>
  )
}

export default navbar
