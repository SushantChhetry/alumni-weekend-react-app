import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

const Gallery = () => {
  return (
    <div className="gallery-main">
      <div className="gallery-wrapper">
        <h1>Gallery</h1>
        <p> Check back after the event!</p>
        <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" />{" "}
      </div>
    </div>
  );
};

export default Gallery;
