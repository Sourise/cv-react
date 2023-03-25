import React from "react"
import "./Skills.css"
import Skill from "./Skill";
import Aptitude from "./Aptitude";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaDatabase, FaPhp,
FaAngular, FaGitAlt, FaReact, FaSymfony, FaWordpress } from "react-icons/fa";


function Skills() {
  return (
    <>
      <div className="skills">
        <h2>Langages (en cours d'apprentissage)</h2>
          <div className="user_infos">
            <p className="user_info"><FaCss3Alt /><Skill title="CSS3" /></p>
            <p className="user_info"><FaHtml5 /><Skill title="HTML5" /></p>
            <p className="user_info"><FaJsSquare /><Skill title="JavaScript" /></p>
            <p className="user_info"><FaPhp /><Skill title="PHP" /></p>
            <p className="user_info"><FaDatabase /><Skill title="MySQL" /></p>

          </div>
      </div>

      <div className="skills">
        <h2>Frameworks / Outils / CMS (en cours d'apprentissage)</h2>
        <div className="user_infos">
            <p className="user_info"><FaAngular /><Skill title="Angular" /></p>
            <p className="user_info"><FaGitAlt /><Skill title="GIT" /></p>
            <p className="user_info"><FaReact /><Skill title="React" /></p>
            <p className="user_info"><FaSymfony /><Skill title="Symfony" /></p>
            <p className="user_info"><FaWordpress /><Skill title="WordPress" /></p>  
            
        </div>    
      </div>
        <Aptitude />      
    </>
  );
}

export default Skills