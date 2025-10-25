import React from 'react'
import "./css/homecontent.css"
import dbInComma from "../Icons/doubleInverted.svg"
import RatingStar from "../Icons/Rating5Star.svg"
import ProfilePhoto from "../Icons/Profilephoto.svg"
import ProfileBackground from "../Icons/Profilebackground.png"
const homecontent = () => {
  return (
    <>
        <div className='homecontentWrapper'>
            <div className='homecontentProfilePhoto'>
                <div className='homecontentProfilePhotoCircle'>
                    <div className='homecontentProfilePhotoImg'>
                        <img src={ProfilePhoto} alt='profilephoto'></img>
                    </div>
                    <div className='homecontentProfilePhotoBackground'>
                        <img src={ProfileBackground} alt='profile Backround'></img>
                    </div>
                </div>
            </div>
            <div className='homecontentMain'>
                <div className='homecontentMainHello'>
                    <h3>Hello!</h3>
                </div>
                <div className='homecontentMainInfo'>
                    <h1>
                        I'm <span>Adhar</span>,<br/><pre>     Web      Developer</pre>
                    </h1>
                </div>
            </div>
            <div className='homecontentDetails'>
                <div className='homecontentDetailsLeft'>
                    <div className='homecontentDetailsLeftComma'>
                        <img src={dbInComma} alt='comma'></img>
                    </div>
                    <div className='homecontentDetailsLeftMain'>
                        Adhar's Exceptional Web designs<br/>ensure our website's success.<br/>Highly Recommended
                    </div>
                </div>
                <div className='homecontentDetailsRight'>
                    <div className='homecontentDetailsRightRating'>
                        <img src={RatingStar} alt='comma'></img>
                    </div>
                    <div className='homecontentDetailsRightMain'>
                        <h3>2 Years</h3>
                        Experince
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default homecontent
