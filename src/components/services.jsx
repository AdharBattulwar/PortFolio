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
                    <SkillsComponent className="SkillsComponent" title="Google Agentic AI Day" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761388892/IMG_20250728_013138_ady7ug.jpg" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Eth Global - New Delhi" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761380160/54835708424_577b6ba7f3_o_epbipz.jpg"/>
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @meta" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761390239/068b051c-b891-4991-a894-dbe648636820.png" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @nvidia" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761390425/3294c092-b65a-4acb-8a39-69e312cfbdfb.png"/>
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @AICTE" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761390578/19f9c1f6-29db-44f8-af40-8ca910eaa11c.png" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Certificate @Cisco" image="https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761390658/e151629e-c5e2-4b68-9750-e8d655acf436.png"/>
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
