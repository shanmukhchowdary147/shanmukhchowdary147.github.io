import React from "react";
import "./home.css";
import Header from "../header/index";
import Socialb from "../socialb";
import Footer from "../footer/index";
import Body from "../body/index";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
        </div>
      {/* <div>
        <Socialb />
      </div> */}
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
