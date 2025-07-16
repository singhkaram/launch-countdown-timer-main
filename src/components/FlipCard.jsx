import React, { useEffect, useState } from "react";

function FlipCard({ value, text }) {
  const [flipping, setFlipping] = useState(false);
  const [previousValue, setPreviousValue] = useState(value);

  useEffect(() => {
    if (value !== previousValue) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
        setPreviousValue(value);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [value, previousValue]);

  return (
    <div className="flip-card-wrapper">
      <div
        className={`flip-card ${flipping ? "flip" : ""}`}
        data-current-number={previousValue}
        data-next-number={value}
      >
        <div className="top">{value}</div>
        <div className="bottom">{previousValue}</div>
      </div>
      <span className="span-text">{text}</span>
    </div>
  );
}

export default FlipCard;
