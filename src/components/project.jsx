import React from 'react'
import "./css/Project.css"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ArrowRight from "../Icons/ArrowRight.svg"
import ProjectComponent from "./projectComponent.jsx"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Project = () => {

  useGSAP(()=>{
    gsap.from(".projectTopLeft",{
      x:-500,
      opacity:0,
      duration:0.8,
      ease:"bounce.out",
      scrollTrigger:{
        trigger:".projectWrapper",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 0%",
      }
    })
    
    gsap.from(".projectTopRight",{
      x:200,
      opacity:0,
      duration:0.8,
      ease:"bounce.out",
      scrollTrigger:{
        trigger:".projectWrapper",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 0%",
      }
    })
    
    gsap.from(".projectBottomTopButton",{
      y:-100,
      opacity:0,
      duration:0.8,
      ease:"bounce.out",
      stagger:0.1,
      scrollTrigger:{
        trigger:".projectBottom",
        scroll:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 0%",
      }
    })
    
  })


  return (
    <>
    <div className='projectWrapper'>
        <div className='projectTop'>
            <div className='projectTopLeft'>
                <h3>
                    Lets have a Look At<br/> my <span>Projects</span>
                </h3>
            </div>
            <div className='projectTopRight'>
                <div className='projectTopRightButton'>
                    Scroll to See All
                </div>
            </div>
        </div>
        <div className='projectMiddle'>
        <Splide
                  options={{
                    drag:true,
                    wheel: true,          // Enable mouse wheel scrolling    // Time in ms after which the slider will ignore the wheel scroll
                    margin:"0rem",
                    direction: 'ltr', // ltr or rtl
                    rewind: false,
                    fixedHeight:"21rem",
                    fixedWidth:"27rem",
                    arrows:true,
                    gap: "3rem",
                    focus:"center",
                    // autoplay:true,
                    mediaQuery:"max-width",
                    breakpoints:{
                      565:{
                        fixedHeight:"21rem",
                        fixedWidth:"72vw",
                      }
                    },
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent id="ProjectComponent" head="Relyft" details="An Intercity Ride-Sharing Webapp" link="https://relyft.vercel.app/" github="https://github.com/AdharBattulwar/Relyft.git" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078296/Relyft_hxktvp.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Dashstack" details="Created A DashStack Website" github="https://github.com/AdharBattulwar/Dashstack.git" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078324/Dashstack_lwfykm.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Portfolios" details="Created A Portfolio Website" github="https://github.com/AdharBattulwar/Parth-s-Portfolio.git" link="https://parthportfolio11.netlify.app/" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078310/Parth_Portfolio_oofm57.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="SkillUp" details="A Student Management Portal" github="https://github.com/AdharBattulwar/SkillUp.git" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078318/SkillUp_nk6yku.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="EC" details="A Product Listing Page" github="https://github.com/AdharBattulwar/EnginnersCraddle.git" link="https://enginnerscraddle.netlify.app/" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078323/Engineers_craddle_hw41vh.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Notes Manager" details="A Note Managing Website" github="https://github.com/AdharBattulwar/Notes-Project.git" link="https://notes-project-8omv.onrender.com/" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733080977/Notes_Manager_qcoqqt.mp4"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="ShortenUrl" details="A URL Shortner" github="https://github.com/AdharBattulwar/ShortenUrl.git" imageURL="https://res.cloudinary.com/dz9tzcoyr/video/upload/v1733078297/ShortenUrl_udqknu.mp4"/>
                    
                  </SplideSlide>
                </Splide>

        </div>
        <div className='projectBottom'>
            <div className='projectBottomTop'>
                <div className='projectBottomTopButton'>
                    Landing Page                      
                </div>
                <div className='projectBottomTopButton'>
                    Product design
                </div>
                <div className='projectBottomTopButton'>
                    Animation
                </div>
                <div className='projectBottomTopButton'>
                    Glassmorphism
                </div>
                <div className='projectBottomTopButton'>
                    Cards
                </div>
            </div>
            <div className='projectBottomBottom'>
                <div className='projectBottomBottomTop'>
                    <h4>
                        DashStack - Student Management System
                    </h4>
                    <div className='projectBottomBottomTopArrow'>
                        <img src={ArrowRight} alt='img'></img>
                    </div>
                </div>
                <div className='projectBottomBottomBottom'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Project
