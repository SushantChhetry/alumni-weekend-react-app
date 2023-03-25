import { useState, useEffect } from "react";

const Slider = () => {
  const [intervalId, setIntervalId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 5000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const images = [
  ];

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={index === 0 ? "active" : ""}
        />
      ))}
    </div>
  );
};

export default Slider;
