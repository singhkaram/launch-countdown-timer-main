import "./App.css";
import { Social_icons } from "./data";

function App() {
  return (
    <main className="main-container">
      {/* time-container */}
      <div className="time-container">
        <h1 className="main-title">We're launching soon</h1>
        Days Hours Minutes Seconds
      </div>

      {/* social-icons */}
      <div className="social-media-container">
        {Social_icons.map((icon) => (
          <a href={icon.link} target="_blank" rel="noopener noreferrer" key={icon.alt}>
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
