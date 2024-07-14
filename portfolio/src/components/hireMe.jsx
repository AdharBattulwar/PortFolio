import React from 'react'
import "./css/HireMe.css"
const hireMe = () => {
  return (
    <>
    <div className='hireWrapper'>
        <div className='hireMainLeft'>

        </div>
        <div className='hireMainRight'>
            <div className='hireMainRightHead'>
                <h3>Why <span>Hire Me</span> ?</h3>
            </div>
            <div className='hireMainRightDetails'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
            </div>
            <div className='hireMainRightAcheivements'>
                <div className='hireMainRightAcheivementsProjects'>
                    <div className='hireMainRightAcheivementsProjectsHead'>
                        45+
                    </div>
                    <div className='hireMainRightAcheivementsProjectsDetails'>
                        Projects Completed
                    </div>
                </div>
                <div className='hireMainRightAcheivementsInternships'>
                    <div className='hireMainRightAcheivementsInternshipsHead'>
                        2+
                    </div>
                    <div className='hireMainRightAcheivementsInternshipsDetails'>
                        Internship Completed
                    </div>
                </div>
            </div>
            <div className='hireMainRightHire'>
                <div className='hireMainRightHireButton'>
                    Hire Me
                </div>
                <div className='hireMainRightResumeButton'>
                    Resume
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default hireMe
