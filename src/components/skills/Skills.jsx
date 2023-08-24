import React from "react";
import "./skills.css";
import AppDev from "./AppDev";
import Backend from "./Backend";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <AppDev />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
