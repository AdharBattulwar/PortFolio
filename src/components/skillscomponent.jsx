import React from "react";
import "./css/skillscomponent.css";
// import  Flutter from "../Icons/flutter.svg"
const skillscomponent = (props) => {
  return (
    <>
      <div className="skillscomponentWrapper">
        <div className="skillscomponentTitle">
          <h3>{props.title}</h3>
          <span></span>
        </div>
        <div className="skillscomponentMain">
          {/* <img src={Flutter} alt='img'></img> */}
        </div>
      </div>
    </>
  );
};

export default skillscomponent;
