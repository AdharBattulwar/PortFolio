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
                    See All
                </div>
            </div>
        </div>
        <div className='projectMiddle'>
        <Splide
                  options={{
                    margin:"0rem",
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
                    <ProjectComponent id="ProjectComponent" head="Flutter" details="Created A Wync Music Clone" imageURL="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="React" details="Created A DashStack Website" imageURL="https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Web Devlopment" details="Created A Wync Music Clone" imageURL="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    
                  </SplideSlide>
                  <SplideSlide className="SplideSlideProject">
                    <ProjectComponent className="ProjectComponent" head="Python" details="Created A Wync Music Clone" imageURL="https://images.unsplash.com/photo-1445985543470-41fba5c3144a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    
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
