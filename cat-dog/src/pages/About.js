import React from "react";
import Number from "@/components/Number";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHandshakeAngle,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about">
        <FontAwesomeIcon icon={faGlobe} beat size="2xl" />
        <h2>Number of Alumnis</h2>
        <Number num={2000} />
        <p>All around the globe</p>
      </div>
      <div className="about">
        <FontAwesomeIcon icon={faHandshakeAngle} beat size="2xl" />
        <h2>Connect</h2>
        <p>Meet the new students</p>
      </div>
      <div className="about">
        <FontAwesomeIcon icon={faHeartCirclePlus} beat size="2xl" />
        <h2>Reconnect</h2>
        <p>Reconnect with your friends</p>
      </div>
    </div>
  );
};

export default About;
