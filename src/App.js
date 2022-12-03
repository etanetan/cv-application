import React, { useState } from "react";
import Education from "./components/Education";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/main.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className="cv-container">
      <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
      <Education education={education} setEducation={setEducation} />
      <Experience experience={experience} setExperience={setExperience} />
      <div className="cv-display">
        <div className="cv-section">
          <h2>General Information</h2>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
        </div>
        <div className="cv-section">
          <h2>Education</h2>
          {education.map((item, index) => (
            <div key={index}>
              <p>School: {item.school}</p>
              <p>Title: {item.title}</p>
              <p>Date: {item.date}</p>
            </div>
          ))}
        </div>
        <div className="cv-section">
          <h2>Experience</h2>
          {experience.map((item, index) => (
            <div key={index}>
              <p>Company: {item.company}</p>
              <p>Title: {item.title}</p>
              <p>Tasks: {item.tasks}</p>
              <p>Date: {item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
