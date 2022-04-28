import React from "react";
import './App.css';


const App = () => {

  return (
      <div className={"wrapper"}>
         <div className={"containerAboutMe"}>
              <div className={"item photoHeader"}>
                  <img  className={"headerTextWeb"} src={"HeaderWebDev.png"}/>
                  <button className={"buttonLearnMore"}>
                      <text className={"TextOnButtonLearnMore"}>LEARN MORE</text>
                  </button>
                  <img className={"photoHome"} src={"photoHeader.png"}/>
              </div>
              <div className={"headerNavMenu"}>
                  <div>
                      <img  className={"logoPhoto"} src={"logoPhoto.png"}/>
                      <a href="#logoLinkedIn">
                          <img  className={"logoLinkedIn"} src={"photolinkedin.png"}/>
                      </a>
                      <div className={"name"}>
                          <text className={"nameText"}>Vasyl Moseychuk</text>
                      </div>
                  </div>
                  <ul className={"ulNav"}>
                      <li className={"liNav"}><a href="#home">HOME</a></li>
                      <li  className={"liNav"}><a href="#aboutMe">ABOUT ME</a></li>
                      <li  className={"liNav"}><a href="#resume">RESUME</a></li>
                      <li  className={"liNav"}><a href="#skills">SKILLS</a></li>
                      <li  className={"liNav"}><a href="#resume">TESTIMONIALS</a></li>
                      <li  className={"liNav"}><a href="#portfolio">PORTFOLIO</a></li>
                      <li  className={"liNav"}><a href="#contactMe">CONTACT ME</a></li>
                  </ul>
              </div>
              <div className={"item aboutMeOne"}>
                  <text className={"textAboutMe"}>Life is like a combination lock; your job is to find the numbers, in the right orders, so you can have anything you want. Brian Tracy ”</text>
              </div>
              <div className={"item aboutMeTwo"}>
                  <text className={"textAboutMe"}><p>I enjoy my work</p></text>
              </div>
              <div className={"item aboutMeThree"}>
                  <text className={"textAboutMe"}><p>I love board games</p> </text>
              </div>
              <div className={"item myEducation"}>
                  <div className={"containerTextMyEducation"}>
                      <text  style={{ fontSize: '40px' }}>
                          <text style={{ marginLeft:'200px' }}> MY EDUCATION </text>
                          <p>Transcarpathian State University</p>
                          <p >Department of Information Control Systems and Technologies</p>
                          <p style={{ marginTop: '100px' }}>2005 - 2009</p>
                          <p style={{ margin: '50px' }}>Bachelor degree in Computer Science</p>
                          <p>2009 - 2010</p>
                          <p style={{ margin: '50px' }}>Specialist degree in Computer Science</p>
                          <p style={{marginTop:'100px',}}>English: Pre - Intermidiate</p>
                      </text>
                  </div>
              </div>
              <div className={"item photoAboutMe"}>
                      <img  src={"photoAboutMe.png"}/>
              </div>
              <div className={"item resume"}>
                  <text className={"textResume"}>RESUME</text>
                  <div className={"containerTextResume"}>
                      <text className={"textUnderResume"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</text>
                  </div>
                  <button className={"buttonDownloadResume"}>
                      <text>DOWNLOAD RESUME</text>
                  </button>
                  <img  src={"resumeContainer.png"}/>
              </div>
      </div>
          <div className={"containerSkills"}>
              <div className={"item skillsProfExperience"}>PROFESSIONAL EXPERIENCE</div>
              <div className={"item skillsProfExperDescription"}>
                      <ul className={"ulProf"}>
                          <li className={"liProf"}>November 2019 - July 2020, software company “Star Apps”</li>
                          <li className={"liProf"}>ReactJS Developer:</li>
                          <li className={"liProf"}>Development of geolocation service for tracking ships routes and
                              arrival - departure time.</li>
                          <li className={"liProf"}>React Native Developer:</li>
                          <li className={"liProf"}>Development of social network experience exchange of sportsman
                              and scouts.</li>
                          <li className={"liProf"}>May 2019 - November 2019, software company “Star Apps”</li>
                          <li className={"liProf"}>IOS Developer:</li>
                          <li className={"liProf"}>Development of mobile applications for social networks
                              (programming client API and user interface).</li>
                          <li className={"liProf"}>Development of e-commerce application for private entrepreneurs
                              (online store, mobile platform for finding services and customers)</li>
                      </ul>
              </div>
              <div className={"item skillsCourseSql"}>COURSE SQL</div>
              <div className={"item skillsCourseSqlDescription"}>
                  <ul className={"ulCourse"}>
                      <li className={"liCourse"}>November 2019 - July 2020, software company “Star Apps”</li>
                      <li className={"liCourse"}>ReactJS Developer:</li>
                      <li className={"liCourse"}>Development of geolocation service for tracking ships routes and
                          arrival - departure time.</li>
                      <li className={"liCourse"}>React Native Developer:</li>
                      <li className={"liCourse"}>Development of social network experience exchange of sportsman
                          and scouts.</li>
                      <li className={"liCourse"}>May 2019 - November 2019, software company “Star Apps”</li>
                      <li className={"liCourse"}>IOS Developer:</li>
                      <li className={"liCourse"}>Development of mobile applications for social networks
                          (programming client API and user interface).</li>
                      <li className={"liCourse"}>Development of e-commerce application for private entrepreneurs
                          (online store, mobile platform for finding services and customers)</li>
                  </ul>
              </div>
              <div className={"item skillsTechnologies"}>TECHNOLOGIES</div>
              <div className={"item skillsTechnologDescription"}>
                  <ul className={"ulTech"}>
                      <li className={"liTech"}>November 2019 - July 2020, software company “Star Apps”</li>
                      <li className={"liTech"}>ReactJS Developer:</li>
                      <li className={"liTech"}>Development of geolocation service for tracking ships routes and
                          arrival - departure time.</li>
                      <li className={"liTech"}>React Native Developer:</li>
                      <li className={"liTech"}>Development of social network experience exchange of sportsman
                          and scouts.</li>
                      <li className={"liTech"}>May 2019 - November 2019, software company “Star Apps”</li>
                      <li className={"liTech"}>IOS Developer:</li>
                      <li className={"liTech"}>Development of mobile applications for social networks
                          (programming client API and user interface).</li>
                      <li className={"liTech"}>Development of e-commerce application for private entrepreneurs
                          (online store, mobile platform for finding services and customers)</li>
                  </ul>
              </div>
              <div className={"item skillsDevTools"}>DEVELOPMENT TOOLS</div>
              <div className={"item skillsDevToolsDescription"}>
                  <ul className={"ulDev"}>
                      <li className={"liDev"}>November 2019 - July 2020, software company “Star Apps”</li>
                      <li className={"liDev"}>ReactJS Developer:</li>
                      <li className={"liDev"}>Development of geolocation service for tracking ships routes and
                          arrival - departure time.</li>
                      <li className={"liDev"}>React Native Developer:</li>
                      <li className={"liDev"}>Development of social network experience exchange of sportsman
                          and scouts.</li>
                      <li className={"liDev"}>May 2019 - November 2019, software company “Star Apps”</li>
                      <li className={"liDev"}>IOS Developer:</li>
                      <li className={"liDev"}>Development of mobile applications for social networks
                          (programming client API and user interface).</li>
                      <li className={"liDev"}>Development of e-commerce application for private entrepreneurs
                          (online store, mobile platform for finding services and customers)</li>
                  </ul>
              </div>
              <div className={"item testimonials"}>
                  <text>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                      and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </text>
                  <div className="pagination">
                          <a className={"active"} href="#"><text style={{opacity: '0%'}}>❮</text></a>
                          <a href="#"><text style={{opacity: '0%'}}>❯</text></a>
                  </div>
              </div>
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
      </div>


  )
}

export default App;
