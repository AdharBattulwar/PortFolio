import React from "react";
import "./css/projectComponent.css";
// import ArrowRight from "../Icons/ArrowRight.svg";
import { FaGithub } from "react-icons/fa";
const projectComponent = (props) => {
  const handleRedirect = () => {
    window.open(props.link, "_blank");
  };

  const handleGithub = () => {
    window.open(props.github, "_blank");
  };
  return (
    <>
      <div className="projectComponentWrapper" onClick={handleRedirect}>
        <video
          autoPlay
          loop
          muted
          className="projectComponentWrapperBackgroundImage"
          src={props.imageURL}
          alt="img"
        ></video>
        <div className="projectComponentTop">
          <div className="projectComponentTopButton">
            <FaGithub className="githubIcon"  onClick={handleGithub}/>
          </div>
        </div>
        <div className="projectComponentBottom">
          <div className="projectComponentBottomHead">
            <h3>{props.head}</h3>
          </div>
          <div className="projectComponentBottomDetails">{props.details}</div>
        </div>
      </div>
    </>
  );
};

export default projectComponent;
