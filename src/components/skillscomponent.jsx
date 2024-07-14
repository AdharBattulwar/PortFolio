import React from 'react'
import "./css/skillscomponent.css"
const skillscomponent = (props) => {
  return (
    <>
    <div className='skillscomponentWrapper'>
        <div className='skillscomponentTitle'>
          <h3>{props.title}</h3>
          <span></span>
        </div>
        <div className='skillscomponentMain'>
        </div>
    </div>
    </>
  )
}

export default skillscomponent
