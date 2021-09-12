import React from "react";
import { init } from "ityped";
import ImageFilter from 'react-image-filter';
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
      strings: ["Developer", "Azure Administrator", "Android developer", "Web developer"],
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am <br /> <br />
          <span className="info-name">Shanmukh Chowdary Morampudi</span> <br/> <br /><span ref={textRef}></span> <br/> <br/>
          {/* <span className="info-about" > I'm an India based developer with a goal-driven creative mindset and passion for learning and innovating.</span> */}
        </div>
        <div className="about-photo">
          <img
            className="picture"
            src={require("../../../assets/image/me9~2.jpg").default}
          />
        </div>
      </div>
      {/* <SocialContact /> */}
    </div>
  );
}

export default About;
