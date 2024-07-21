import React from 'react'
import "./css/projectComponent.css"
import ArrowRight from "../Icons/ArrowRight.svg"
const projectComponent = (props) => {
  return (
    <>
    <div className='projectComponentWrapper'>
        <div className='projectComponentTop'>
            <div className='projectComponentTopButton'>
                <img src={ArrowRight} alt='img'></img>
            </div>
        </div>
        <div className='projectComponentBottom'>
            <div className='projectComponentBottomHead'>
                <h3>
                    {props.head}
                </h3>
            </div>
            <div className='projectComponentBottomDetails'>
            {props.details}
            </div>
        </div>
    </div>
    </>
  )
}

export default projectComponent
