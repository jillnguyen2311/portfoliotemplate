import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App";

import "./styles.css";

function App() {
  return (
    <div>
      <ProfileCard
        name="Jack Hammer"
        tagline="I build awesome web applications"
      />
      <Work>
        <WorkItem company="Microsoft" from="2020" until="2021" />
        <WorkItem company="Netflix" from="2020" until="2021" />
        <WorkItem company="Google" from="2020" until="2021" />
      </Work>
      <Portfolio>
        <Project projectImage="https://picsum.photos/seed/picsum/200/300" />
        <Project projectImage="https://picsum.photos/seed/picsum/200/300" />
        <Project projectImage="https://picsum.photos/seed/picsum/200/300" />
      </Portfolio>
    </div>
  );
}

function ProfileCard(props) {
  return (
    <div className="profile-container">
      <div className="profile-img">
        <img
          src="https://randomuser.me/api/portraits/men/91.jpg"
          alt="random person"
        />
      </div>
      <div className="profile">
        <p>hi, i'm {props.name}</p>
        <p className="profile-tagline">{props.tagline}</p>
      </div>
    </div>
  );
}

function Work(props) {
  return (
    <div>
      <ul className="work">{props.children}</ul>
    </div>
  );
}

function WorkItem(props) {
  return (
    <li>
      <h2 className="work-title">
        <span className="company">{props.company}</span>
        <span className="from">from: {props.from}</span>
        <span className="until">to: {props.until}</span>
      </h2>
      <p>blah blah blah</p>
    </li>
  );
}

function Portfolio(props) {
  return <div className="portfolio">{props.children}</div>;
}

function Project(props) {
  return (
    <div className="project">
      <div className="project-image">
        <img src={props.projectImage} />
      </div>

      <div className="project-description">
        <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
