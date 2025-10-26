import React from "react";
import "./css/HireMe.css";
import ContactDialog from "./ContactDialog";
const hireMe = () => {
  return (
    <>
      <div className="hireWrapper">
        <div className="hireMainLeft">
            <img className="hiremeimage" src={require("../Icons/adharbattulwar-hireme.png")} alt="Hire Me Illustration"></img>
        </div>
        <div className="hireMainRight">
          <div className="hireMainRightHead">
            <h3>
              Why <span>Hire Me</span> ?
            </h3>
          </div>
          <div className="hireMainRightDetails">
            I have delivered multiple end-to-end web projects and contributed to
            open-source initiatives, consistently shipping clean, maintainable
            React applications. I regularly participate in hackathons and
            collaborative sprints to solve real-world problems under tight
            deadlines. Notably, I won the Google Agentic AI Day — Breakthrough
            Award (Concept) for an innovative AI-driven prototype, showcasing my
            ability to combine strong engineering with creative product
            thinking.
          </div>
          <div className="hireMainRightAcheivements">
            <div className="hireMainRightAcheivementsProjects">
              <div className="hireMainRightAcheivementsProjectsHead">45+</div>
              <div className="hireMainRightAcheivementsProjectsDetails">
                Projects Completed
              </div>
            </div>
            <div className="hireMainRightAcheivementsInternships">
              <div className="hireMainRightAcheivementsInternshipsHead">1</div>
              <div className="hireMainRightAcheivementsInternshipsDetails">
                Internship Completed
              </div>
            </div>
          </div>
          <div className="hireMainRightHire">
            <ContactDialog triggerChildren={
              <div className="hireMainRightHireButton">Hire Me</div>
            }>
              .
            </ContactDialog>
            <div className="hireMainRightResumeButton">
              <a href='https://res.cloudinary.com/dz9tzcoyr/image/upload/v1761380726/Resume_Oct_2025_edokpl.pdf' target='_blank' rel="noreferrer" download="AdharBattulwarResume.pdf">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default hireMe;
