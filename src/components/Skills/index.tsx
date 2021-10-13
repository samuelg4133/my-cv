import React from "react";
import { GiSkills } from "react-icons/gi";

import "./styles.css";

const Skills: React.FC = ({ children }) => {
  return (
    <>
      <article className="skills-container">
        <header className="skills-header">
          <div>
            <GiSkills size={24} />
            <h3>Skills</h3>
          </div>
          <hr />
        </header>
        <div className="tags">
          <div className="tag thi">
            <p>Java</p>
          </div>
          <div className="tag pri">
            <p>React</p>
          </div>
          <div className="tag low">
            <p>Angular</p>
          </div>
          <div className="tag sec">
            <p>React Native</p>
          </div>
          <div className="tag pri">
            <p>Express</p>
          </div>
          <div className="tag pri">
            <p>Typescript</p>
          </div>
          <div className="tag sec">
            <p>NextJs</p>
          </div>
          <div className="tag thi">
            <p>FaunaDB</p>
          </div>
          <div className="tag thi">
            <p>Prismic</p>
          </div>
          <div className="tag pri">
            <p>MySQL</p>
          </div>
          <div className="tag low">
            <p>Redis</p>
          </div>
          <div className="tag thi">
            <p>Laravel</p>
          </div>
          <div className="tag thi">
            <p>PHP</p>
          </div>
          <div className="tag low">
            <p>Firebase</p>
          </div>
          <div className="tag thi">
            <p>ChakraUI</p>
          </div>
          <div className="tag low">
            <p>Flutter</p>
          </div>
          <div className="tag thi">
            <p>DDD</p>
          </div>
          <div className="tag sec">
            <p>MVC</p>
          </div>
          <div className="tag sec">
            <p>API</p>
          </div>
          <div className="tag thi">
            <p>Data Science</p>
          </div>
          <div className="tag thi">
            <p>Back-end</p>
          </div>
          <div className="tag thi">
            <p>Front-end</p>
          </div>
          <div className="tag thi">
            <p>Sass</p>
          </div>
          <div className="tag thi">
            <p>PrismaJs</p>
          </div>
          <div className="tag low">
            <p>OpenCV</p>
          </div>
          <div className="tag low">
            <p>Tesseract</p>
          </div>
          <div className="tag sec">
            <p>CorelDRAW</p>
          </div>
          <div className="tag low">
            <p>MongoDB</p>
          </div>
          <div className="tag low">
            <p>Docker</p>
          </div>
          <div className="tag sec">
            <p>{"HTML & CSS"}</p>
          </div>
          <div className="tag thi">
            <p>Pandas</p>
          </div>
          <div className="tag thi">
            <p>Numpy</p>
          </div>
          <div className="tag sec">
            <p>Pacote Office</p>
          </div>
          <div className="tag thi">
            <p>Python</p>
          </div>
          <div className="tag sec">
            <p>Styled Components</p>
          </div>
          <div className="tag low">
            <p>Windows Server</p>
          </div>
          <div className="tag sec">
            <p>Linux</p>
          </div>
          <div className="tag thi">
            <p>AnyDesk</p>
          </div>
          <div className="tag thi">
            <p>Team Viewer</p>
          </div>
          <div className="tag thi">
            <p>Unifi</p>
          </div>
        </div>
      </article>
      <div id="legend">
        <div className="pri"></div>
        <p>Conheço muito bem e sou bom.</p>
        <div className="sec"></div>
        <p>Conheço bem e sou bom.</p>
        <div className="thi"></div>
        <p>Conheço bem e sou mais ou menos.</p>
        <div className="low"></div>
        <p>Conheço um pouco.</p>
      </div>
    </>
  );
};

export default Skills;
