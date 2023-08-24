import React from "react";
import "./skills.css";

const skills = [
  {title: "SwiftUI", level: "Advanced"},
  {title: "Figma", level: "Basic"},
  {title: "NodeJS", level: "Basic"},
  {title: "Python", level: "Advanced"},
  {title: "React Native", level: "Intermediate"},
  {title: "MySQL", level: "Intermediate"},
  {title: "Firebase", level: "Basic"},
  {title: "Git", level: "Intermediate"},
  {title: "CoreData", level: "Intermediate"},
]

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container">
        <div className="skills__content skills__box">
          {skills.map((skill, index) => {
            return (
                <div className="skills__data">
                <i class="bx bx-badge-check"></i>

                <div>
                  <h3 className="skills__name">{skill.title}</h3>
                  <span className="skills__level">{skill.level}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;