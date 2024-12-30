import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={`${styles.homepage} container`}>
      <div className="im">
        <img src="/images/hero image.png" alt="hero image of dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <button>Play Now</button>
      </div>
    </div>

    // <div>Homepage</div>
  );
};

export default Homepage;
