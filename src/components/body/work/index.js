import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Education</label>
      <div className="educat">
        <h1 >Bachelor's Degree in Computer Science & Engineering </h1>
        <p>Bennett university, cureent CGPA: 8.14/10 </p>
      </div>
      <div >
      <h1 >Certifications </h1>
      </div>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
