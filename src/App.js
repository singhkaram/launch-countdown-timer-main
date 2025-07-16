import { useEffect, useRef, useState } from "react";
import "./App.css";
import FlipCard from "./components/FlipCard/FlipCard";
import { Social_icons } from "./data";

function App() {
  const launchDateRef = useRef(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countDown = () => {
    const now = new Date().getTime();
    const distance = launchDateRef.current - now;

    setCountdown({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  };

  useEffect(() => {
    const interval = setInterval(countDown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="main-container">
      {/* time-container */}
      <div className="time-container">
        <h1 className="main-title">We're launching soon</h1>
        <div className="flip-cards-container">
          <FlipCard
            value={
              countdown.days.toString().length === 1
                ? `0${countdown.days}`
                : countdown.days
            }
            text={"Days"}
          />
          <FlipCard
            value={
              countdown.hours.toString().length === 1
                ? `0${countdown.hours}`
                : countdown.hours
            }
            text={"Hours"}
          />
          <FlipCard
            value={
              countdown.minutes.toString().length === 1
                ? `0${countdown.minutes}`
                : countdown.minutes
            }
            text={"Minutes"}
          />
          <FlipCard
            value={
              countdown.seconds.toString().length === 1
                ? `0${countdown.seconds}`
                : countdown.seconds
            }
            text={"Seconds"}
          />
        </div>
      </div>

      {/* social-icons */}
      <div className="social-media-container">
        {Social_icons.map((icon) => (
          <a
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            key={icon.alt}
          >
            <img src={icon.image} alt={icon.alt} />
          </a>
        ))}
      </div>

      {/* attribution */}
      <div class="attribution">
        Challenge by{" "}
        <a
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">Your Name Here</a>
        .
      </div>
    </main>
  );
}

export default App;
