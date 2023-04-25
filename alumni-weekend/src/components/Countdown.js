import { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [countdown, setCountdown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    // Use effect gets executed at every rerender meaning this interval being cleared twice
    // Not a big deal, but something to call out
    const intervalId = setInterval(() => {
      setCountdown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const seconds = Math.floor((countdown / 1000) % 60);
  const minutes = Math.floor((countdown / 1000 / 60) % 60);
  const hours = Math.floor((countdown / 1000 / 60 / 60) % 24);
  const days = Math.floor(countdown / 1000 / 60 / 60 / 24);

  return (
    <div>
      {/* Why the below? */}
      {" "}
      <div>
        <h2 className="countdown">
          {days} d {hours} h {minutes} m {seconds} s
        </h2>
      </div>
    </div>
  );
};

export default Countdown;
