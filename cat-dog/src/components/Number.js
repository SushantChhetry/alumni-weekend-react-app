import { useState, useEffect } from "react";

const Number = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prevNumber) => prevNumber + 1);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return <div className="number">{number}</div>;
};
export default Number;
