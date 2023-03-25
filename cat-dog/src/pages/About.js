import React from "react";
import Number from "@/components/Number";

const About = () => {
  return (
    <div className="about-wrapper">
      <h2>Number of Alumnis</h2>
      <p>
        <Number num={2000} /> +
      </p>
    </div>
  );
};

export default About;
