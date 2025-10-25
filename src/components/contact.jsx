import React from "react";
import "./css/contact.css";
import Handles from "../Icons/Handle.svg";

const Contact = () => {
  return (
    <>
      <div className="contactWrapper">
        <div className="contactTop">
          <div className="contactTopLeft">
            <h3>Let's Connect Here</h3>
          </div>
          <div className="contactTopRight">
            <div className="contactTopRightButton">Hire Me</div>
          </div>
        </div>
        <div className="contactMiddle">
          <div className="contactMiddleFirst">
            <div className="contactMiddleFirstLogo">
              {/* <img src='../Icons/Logo maker project.jpeg' alt='img'></img> */}
            </div>
            <div className="contactMiddleFirstDiscription">
              I'm available for freelance projects and full-time opportunities
              in web development and UI design. I specialize in building
              responsive, accessible React applications and enjoy turning ideas
              into polished, user-friendly interfaces. Typical response time is
              within 24-48 hours — feel free to reach out with a project brief,
              timeline, or question and I'll get back to you promptly.
            </div>
            <div className="contactMiddleFirstHandles">
              <img src={Handles} alt="img"></img>
            </div>
          </div>
          <div className="contactMiddleSecond">
            <div className="contactMiddleSecondHead">Navigation</div>
            <div className="contactMiddleSecondChild">
              <div>Home</div>
              <div>About Us</div>
              <div>Service</div>
              <div>Resume</div>
              <div>Project</div>
            </div>
          </div>
          <div className="contactMiddleThird">
            <div className="contactMiddleThirdHead">Contact</div>
            <div className="contactMiddleThirdChild">
              <div>+91 9421796707</div>
              <div>adharbattulwar24@gmail.com</div>
            </div>
          </div>
          <div className="contactMiddleFourth">
            <div className="contactMiddleFourthHead">
              Get The Latest Information
            </div>
            <div className="contactMiddleFourthChild">
              <input type="text" placeholder="Email Address"></input>
            </div>
          </div>
        </div>
        <div className="contactBottom">
          Users Terms & Conditions | Privacy Policy
        </div>
      </div>
    </>
  );
};

export default Contact;
