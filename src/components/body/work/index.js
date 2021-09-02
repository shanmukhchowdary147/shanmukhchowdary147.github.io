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
        <h1 >Bachelor of Technology, Computer Science </h1>
        <p>Bennett university (2019-2023), cureent CGPA: 8.14/10 </p>
        <h1 >Intermediate, MPC </h1>
        <p>Board Of Intermediate Education Andhra Pradesh </p>
        <p>Sri Chaiatanya junior colege (2017-2019), CGPA: 9.94/10 </p>
        <h1 >Class X </h1>
        <p>Board Of Secondary Education Andhra Pradesh </p>
        <p>ST.Claret EM High School (2017), GPA: 10/10 </p>
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
