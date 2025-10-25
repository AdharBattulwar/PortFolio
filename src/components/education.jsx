import React from 'react'
import EductionCenterIcon from "../Icons/educationCenterIcon.svg"
import "./css/education.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Education = () => {
    useGSAP(()=>{
        gsap.from(".educationWrapperBottomLeft",{
            x:-500,
            opacity:0,
            duration:0.6,
            scrollTrigger:{
                trigger:".educationWrapper",
                scroll:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 0%",
            }
        })
        gsap.from(".educationWrapperBottomRight",{
            x:500,
            opacity:0,
            duration:0.6,
            scrollTrigger:{
                trigger:".educationWrapper",
                scroll:"body",
                // markers:true,
                start:"top 80%",
                end:"bottom 0%",
            }
        })
    })
    
  return (
    <>
    <div className='educationWrapper'>
        <div className='educationWrapperTop'>
            <h3>My <span>Education</span></h3>
        </div>
        <div className='educationWrapperBottom'>
            <div className='educationWrapperBottomLeft'>
                <div className='educationWrapperBottomLeftFirst'>
                    <h4>Carmel High School</h4>
                    <div className='educationWrapperBottomLeftFirstDetails'>
                        2020 Batch
                    </div>
                </div>
                <div className='educationWrapperBottomLeftSecond'>
                    <h4>Defence Services Jr. College</h4>
                    <div className='educationWrapperBottomLeftSecondDetails'>
                        2020 -2022 Batch
                    </div>
                </div>
                <div className='educationWrapperBottomLeftThird'>
                    <h4>BRACT'S Vishwakarma Institue of Technology</h4>
                    <div className='educationWrapperBottomLeftThirdDetails'>
                        2022 (Currently Pursuing)
                    </div>
                </div>
            </div>
            <div className='educationWrapperBottomMiddle'>
                    <img src={EductionCenterIcon} alt='img'></img>
            </div>
            <div className='educationWrapperBottomRight'>
                <div className='educationWrapperBottomRightFirst'>
                    <h4>10th</h4>
                    <div className='educationWrapperBottomRigthFirstDetails'>
                    Percentage : 91.2%
                    </div>
                </div>
                <div className='educationWrapperBottomRightSecond'>
                <h4>12th</h4>
                <div className='educationWrapperBottomRigthSecondDetails'>
                    Percentage : 92%
                    </div>
                </div>
                <div className='educationWrapperBottomRightThird'>
                <h4>Btech Computer Science Engg</h4>
                <div className='educationWrapperBottomRigthThirdDetails'>
                    CGPA : 8.72
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Education
