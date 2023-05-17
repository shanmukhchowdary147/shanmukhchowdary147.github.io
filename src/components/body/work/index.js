import React from "react";
import { certificationsData } from "../../../data/certifications";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";
function Work() {
  const picClick = () => {
    window.open("https://www.linkedin.com/in/shanmukhchowdary147/", "_blank");
  };
  const data = certificationsData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">About Me</label>
      <br /> <br />
      <div className="about">
        <div className="educat">
          <h1>Education </h1>
          <p1>Bachelor of Technology, Computer Science </p1> <br />
          <p2>
            Bennett University (2019-2023), Current CGPA: 8.74/10{" "}
          </p2> <br /> <br />
          <p1>Intermediate, MPC </p1> <br />
          <p2>Board Of Intermediate Education Andhra Pradesh </p2> <br />
          <p2>
            Sri Chaiatanya Junior College (2017-2019), CGPA: 9.94/10{" "}
          </p2>{" "}
          <br /> <br />
          <p1>Class X </p1> <br />
          <p2>Board Of Secondary Education Andhra Pradesh </p2> <br />
          <p2>ST.Claret EM High School (2017), GPA: 10/10 </p2> <br />
        </div>
        <div className="tempclass">
          <div className="about-pic">
            <br /> <br /> <br />
            <img
              src={require("../../../assets/image/shannu.jpg")}
              className="pic"
              onClick={picClick}
            />
          </div>
        </div>
      </div>
      <div>
        <h1>Certifications </h1>
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
