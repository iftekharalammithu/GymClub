import React from "react";
import "./Programs.css";
import "../../App.css";
import { programsData } from "../../data/programsData";
import rightarrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="strock-text">Explore Ours</span>
        <span>Programs</span>
        <span className="strock-text">To Shape You</span>
      </div>

      <div className="program-catagories">
        {programsData.map((data) => (
          <div className="category">
            {data.image}
            <span> {data.heading}</span>
            <span>{data.details}</span>
            <div className="join-now">
              <span>join now</span>
              <img src={rightarrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
