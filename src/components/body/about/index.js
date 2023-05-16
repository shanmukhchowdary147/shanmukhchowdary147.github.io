import React from "react";
import { init } from "ityped";
import ImageFilter from "react-image-filter";
import SocialContact from "../../common/social-contact";
import { useEffect, useRef } from "react";
import "./about.css";

function About() {
  const picClick = () => {
    window.open("https://www.linkedin.com/in/shanmukhchowdary147/", "_blank");
  };
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "AWS Solutions Architect",
        "Azure Administrator",
        "Android developer",
        "Web developer",
      ],
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Shanmukh Chowdary Morampudi</span>
          <br />
          <span ref={textRef}></span>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png")}
            className="picture"
            onClick={picClick}
          />
        </div>
        {/* <div className="about-photo">
          <img
            className="picture"
            onClick={picClick}
            src={require("../../../assets/image/me9~2.jpg").default}
          />
        </div> */}
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;
