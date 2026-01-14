import React from "react";
import "./css/services.css";
import SkillsComponent from "./skillscomponent";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const services = () => {
  return (
    <>
      <div className="servicesWrapper">
          <div className="servicesWrapperMain">
            <div className="servicesWrapperMainTop">
              <div className="servicesWrapperMainTopLeft">
                <h3>
                  My <span>Achievements</span>
                </h3>
              </div>
              <div className="servicesWrapperMainTopRight">
                <h5>
                I am highly proficient in delivering top-quality services with a strong focus on innovation, efficiency, and attention to detail. My expertise ensures exceptional outcomes tailored to meet and exceed client expectations
                </h5>
              </div>
            </div>
            <div className="servicesWrapperMainBottom">
              <div className="servicesWrapperMainBottomTop">
                <Splide
                  options={{
                    width:"100%",
                    fixedWidth:"22rem",
                    fixedHeight:"37rem",
                    arrows:true,
                    rewind:true,
                    autoplay:true,
                    interval:2000,
                    gap: "1rem",
                    mediaQuery:"max-height",
                    breakpoints:{
                      950:{
                        fixedWidth:"22rem",
                        fixedHeight:"37rem",
                      }
                    },
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Google Agentic AI Day" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/IMG_20250728_013138.jpg" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Eth Global - New Delhi" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/54835794065_fabf9383ce_o.jpg"/>
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @meta" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/Screenshot+2026-01-14+at+12-16-11+Meta_Backend_Developer.pdf.png" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @nvidia" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/Screenshot+2026-01-14+at+12-17-08+My+Learning+NVIDIA+-+Deep_Learning+_+NVIDIA.pdf.png"/>
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @AICTE" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/Screenshot+2026-01-14+at+12-18-00+AICTE_Virtual_Internship_Android_devloper.pdf.png" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @Cisco" image="https://adharbucket12213.s3.ap-south-1.amazonaws.com/Screenshot+2026-01-14+at+12-19-13+ADHARBATTULWAR-CCNAv7+Introduct-certificate.pdf.png"/>
                  </SplideSlide>

                </Splide>
              </div>
              <div className="servicesWrapperMainBottomBottom"></div>
            </div>
          </div>
      </div>
    </>
  );
};

export default services;
