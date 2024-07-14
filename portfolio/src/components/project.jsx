import React from 'react'
import "./css/Project.css"
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ArrowRight from "../Icons/ArrowRight.svg"
import ProjectComponent from "./projectComponent.jsx"
const project = () => {
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
                    See All
                </div>
            </div>
        </div>
        <div className='projectMiddle'>
        <Splide
                  options={{
                    rewind: false,
                    width:"100%",
                    perPage:2,
                    arrows:true,
                    gap: "1rem",
                    autoplay:true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent id="ProjectComponent" head="Flutter" />
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="React" />
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Web Devlopment" />
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Python" />
                    
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

export default project
