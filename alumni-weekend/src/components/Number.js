import { useState, useEffect } from "react";

const Number = ({ num }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < num) {
        setCount(count + 1);
      }
    }, 5);
    return () => clearInterval(intervalId);
  }, [num, count]);

  return <div className="number">{count}+</div>;
};
export default Number;
