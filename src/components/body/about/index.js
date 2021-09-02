import React from "react";
import { init } from "ityped";
import SocialContact from "../../common/social-contact";
import { useEffect, useRef } from "react";
import "./about.css";
function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Azure Administrator", "Web developer", "Android developer"],
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br />
          <span className="info-name">Shanmukh Chowdary Morampudi</span><br/><span ref={textRef}></span>
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/image/coding.png").default}
            className="picture"
          />
        </div>
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;
