// import React from "react";
// import "./Skills.css";

// const Skills = () => (
//   <section id="skills" className="skills-section">
//     <h2> TECH SKILLS</h2>
//      <div className="skills-list">
//        <div className="skill">HTML</div>
//        <div className="skill">CSS</div>
//        <div className="skill">JavaScript</div>
//        <div className="skill">React</div>
//        <div className="skill">Java</div>
//        <div className="skill">Python</div>
//        <div className="skill">MongoDB</div>
//        <div className="skill">MySQL</div>
//        <div className="skill">Node.js</div>
      //  <div className="skill">Bootstrap</div>
//        <div className="skill">Tailwind CSS</div>
//      </div>
//   </section>
// );
// export default Skills;





import React from "react";
import "./Skills.css";

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2> TECH SKILLS</h2>
    <div className="skills-list">
      <div className="skill">
        <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/html-logo.svg" alt="HTML " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/css-logo.svg" alt="CSS " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/javascript-logo.svg" alt="JavaScript " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/react-logo.svg" alt="React " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/java-logo.svg" alt="Java " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/python-logo.svg" alt="Python " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/mongodb-logo.svg" alt="MongoDB " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/mysql-logo.svg" alt="MySQL " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/nodejs-logo.svg" alt="Node.js " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/bootstrap-logo.svg" alt="Bootstrap " className="skill-logo" />
        </a>
      </div>

      <div className="skill">
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/img/skills/tailwind-logo.svg" alt="Tailwind CSS " className="skill-logo" />
        </a>
      </div>
    </div>
  </section>
);

export default Skills;


















