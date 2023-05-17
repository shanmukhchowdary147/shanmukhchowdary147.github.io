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
        <div className="intro-para">
          <p>
            Welcome to my portfolio website! I am a passionate{" "}
            <p1>full stack developer</p1> with expertise in various technologies
            and tools that drive modern web development.
          </p>
          <p>
            My love for full stack development has led me to gain proficiency in
            fields such as <p1>React JS, Node JS, MySQL,</p1> as well as DevOps
            tools like <p1>Docker, Kubernetes, and AWS cloud</p1>. This broad
            skill set has allowed me to develop projects across diverse domains,
            showcasing my adaptability and versatility.{" "}
          </p>
          <p>
            One of my projects was recognized as one of the best projects at
            Bennett University and was{" "}
            <p1>selected for the prestigious Industrial Project Expo.</p1>
          </p>
          <p>
            I invite you to explore my portfolio and witness the results of my
            dedication and enthusiasm for creating innovative solutions in the
            world of software development.
          </p>
        </div>
        <div className="tempclass">
          <div className="about-pic">
            {/* <br /> <br /> <br /> */}
            <img
              src={require("../../../assets/image/shannu.jpg")}
              className="pic"
              onClick={picClick}
            />
          </div>
        </div>
      </div>
      <div className="education-extracircular">
        <div className="educat-extra">
          <h3>Education </h3>
          <ul>
            <li>
              <p1>Bachelor of Technology, Computer Science </p1> <br />
              <p1>Bennett University (2019-2023), CGPA: 8.74/10 </p1>
            </li>
            <br />
            <li>
              <p1>Intermediate, MPC </p1> <br />
              <p1>Board Of Intermediate Education Andhra Pradesh </p1> <br />
              <p1>Sri Chaiatanya Junior College (2017-2019), CGPA: 9.94/10</p1>
            </li>
            <br />
            <li>
              <p1>Class X </p1> <br />
              <p1>Board Of Secondary Education Andhra Pradesh </p1> <br />
              <p1>ST.Claret EM High School (2017), GPA: 10/10 </p1>{" "}
            </li>
          </ul>
        </div>
        <div className="educat-extra">
          <h3>Internship Experience</h3>
          <div>- Osmosys Software Solutions</div>
          <p2>(July 2022 - December 2022)</p2>
          <ul>
            <li>
              Developed scalable Web APIs using C# .NET, incorporating business
              logic to deliver efficient and reliable solutions for a complex
              project.
            </li>
            <br />
            <li>
              {" "}
              Optimized data retrieval and manipulation in SQL database using
              Stored Procedures, resulting in improved system performance.
            </li>
            <br />
            <li>
              Worked on Azure tasks to ETL data from the sFTP server to Azure
              SQL database using Azure Data Factory.
            </li>
            <br />
            <li>
              Written Azure functions in c# language to decrypt the PGP
              encrypted files in Azure Blob storage.
            </li>
            <br />
            <li>
              Completed the assigned tasks on time and as per the requirement.{" "}
            </li>
          </ul>
        </div>
        <div className="educat-extra">
          <h3>Notable Activities</h3>
          <div>
            - President at Bennett Cloud Computing Club{" "}
            <p2>(Jan 2022 - April 2022)</p2>
          </div>
          <ul>
            <li>
              Organized various events on Cloud Computing like hackathons and
              workshops to enhance students' knowledge on cloud computing and to
              create awareness on Cloud courses in university.
            </li>
            <br />
            <li>
              Lead all the club members in an organized manner by assigning
              tasks to each individual and verifying their performance.
            </li>
          </ul>
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
