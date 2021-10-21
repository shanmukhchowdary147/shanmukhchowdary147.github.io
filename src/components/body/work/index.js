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
      <br/> <br/>
      <div className="about">
        <div className="educat">
          <p1 >Bachelor of Technology, Computer Science </p1> <br/>
          <p2>Bennett university (2019-2023), current CGPA: 8.14/10 </p2> <br/> <br/> 
          <p1 >Intermediate, MPC </p1> <br/>
          <p2>Board Of Intermediate Education Andhra Pradesh </p2> <br/>
          <p2>Sri Chaiatanya junior college (2017-2019), CGPA: 9.94/10 </p2> <br/> <br/>
          <p1 >Class X </p1> <br/>
          <p2>Board Of Secondary Education Andhra Pradesh </p2> <br/>
          <p2>ST.Claret EM High School (2017), GPA: 10/10 </p2> <br/>
        </div>
        <div className="about-pic">
            <img
              src={require("../../../assets/image/me9~2.jpg").default}
              className="pic"
            />
        </div>
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
