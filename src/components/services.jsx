import React from "react";
import "./css/services.css";
import SercicesBackground from "../Icons/Servicesbackground.svg";
import SkillsComponent from "./skillscomponent";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
const services = () => {
  return (
    <>
      <div className="servicesWrapper">
        <img src={SercicesBackground} alt="backgorund"></img>
          <div className="servicesWrapperMain">
            <div className="servicesWrapperMainTop">
              <div className="servicesWrapperMainTopLeft">
                <h3>
                  My <span>Services</span>
                </h3>
              </div>
              <div className="servicesWrapperMainTopRight">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis{" "}
                  <br />
                  lacus nunc, posuere in justo vulputate, bibendum sodales
                </h5>
              </div>
            </div>
            <div className="servicesWrapperMainBottom">
              <div className="servicesWrapperMainBottomTop">
                <Splide
                  options={{
                    rewind: false,
                    width:"100%",
                    perPage:3,
                    arrows:false,
                    gap: "1rem",
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  aria-label="My Favorite Images"
                >
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent id="SkillsComponent" title="Flutter" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="React" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Web Devlopment" />
                  </SplideSlide>
                  <SplideSlide className="SplideSlide">
                    <SkillsComponent className="SkillsComponent" title="Python" />
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
