import React from "react";
import './App.css';

/*const App = () => {

  return (
      <div className="wrapper">
          {/!*PHOTO HEADER*!/}
          <div>
              <div>
                  <img className={"photoHeader"} src={"photoHeader.png"}/>
              </div>
              <div>
                  <img className={"headerTextWeb"} src={"HeaderWebGraphicDesigner.png"}/>
              </div>
          <button className={"buttonLearnMore"}>
              <text className={"TextOnButtonLearnMore"}>LEARN MORE</text>
          </button>
              {/!*NAVIGATION MENU*!/}
              <div className={"headerNavMenu"}>
                  <img className={"logoFocal"} src={"logoFocal.png"}/>
                  <ul>
                      <li><a href="#home">HOME</a></li>
                      <li><a href="#aboutMe">ABOUT ME</a></li>
                      <li><a href="#skills">SKILLS</a></li>
                      <li><a href="#resume">RESUME</a></li>
                      <li><a href="#portfolio">PORTFOLIO</a></li>
                      <li><a href="#contactMe">CONTACT ME</a></li>
                  </ul>
              </div>
              <div>
                  <div>VALUES</div>
                  <div>GOALS</div>
                  <div>HOBBIES</div>
              </div>
          </div>


          <div className="item resume">resume</div>
          <div className="item portfolio">portfolio</div>
          <div className="item contactMe">contactMe</div>

      </div>
  )
}*/

const App = () => {

  return (
      <div className={"container"}>
          <div className={"item photoHeader"}>
                <img className={"photoHome"} src={"photoHeader.png"}/>
          </div>
          <div className={"item headerNavMenu"}>headerNavMenu</div>
          <div className={"item aboutMeOne"}>aboutMeOne</div>
          <div className={"item aboutMeTwo"}>aboutTwo</div>
          <div className={"item aboutMeThree"}>aboutThree</div>
          <div className={"item nameBirthday"}>nameBirthday</div>
          <div className={"item myEducation"}>myEducation</div>
          <div className={"item photoAboutMe"}>photoAboutMe</div>
          <div className={"item resume"}>resume</div>
          <div className={"item skillsProfExperience"}>skillsProfExperience</div>
          <div className={"item skillsProfExperDescription"}>skillsProfExperDescription</div>
          <div className={"item skillsTechnologies"}>skillsTechnologies</div>
          <div className={"item skillsTechnologDescription"}>skillsTechnologDescription</div>
          <div className={"item skillsDevTools"}>skillsDevTools</div>
          <div className={"item skillsDevToolsDescription"}>skillsDevToolsDescription</div>
          <div className={"item skillsCourseSql"}>skillsCourseSql</div>
          <div className={"item skillsCourseSqlDescription"}>skillsCourseSqlDescription</div>
          <div className={"item testimonials"}>testimonials</div>
          <div className={"item portfolioGreenHorn"}>portfolioGreenHorn</div>
          <div className={"item portfolioLLOOK"}>portfolioLLOOK</div>
          <div className={"item portfolioHublish"}>portfolioHublish</div>
          <div className={"item portfolioDigibarber"}>portfolioDigibarber</div>
          <div className={"item portfolioEcoKos"}>portfolioEcoKos</div>
          <div className={"item portfolioZenyk"}>portfolioZenyk</div>
          <div className={"item contactMe"}>contactMe</div>
          <div className={"item contactMeForm"}>contactMeForm</div>
          <div className={"item foot"}>foot</div>
      </div>
  )
}

export default App;
