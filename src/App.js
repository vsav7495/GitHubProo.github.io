import React from "react";
import './App.css';


const App = () => {

  return (
      <div className={"wrapper"}>
         <div className={"containerAboutMe"}>
              <div className={"photoHeader"}>
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
                          <text className={"nameText"}>Developer</text>
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
              <div className={"aboutMeOne"}>
                  <text className={"textAboutMe"}>Life is like a combination lock; your job is to find the numbers, in the right orders, so you can have anything you want. Brian Tracy ”</text>
              </div>
              <div className={"aboutMeTwo"}>
                  <text className={"textAboutMe"}><p>I enjoy my work</p></text>
              </div>
              <div className={"aboutMeThree"}>
                  <text className={"textAboutMe"}><p>I love board games</p> </text>
              </div>
              <div className={"myEducation"}>
                  <ul className={"ulEducation"}>
                      <li style={{marginLeft:'250px'}} className={"liEducation"}>MY EDUCATION</li>
                      <li style={{fontWeight:'bold', marginTop:'100px'}} className={"liEducation"}> State University</li>
                      <li  className={"liEducation"}>Department of Information Control Systems and Technologies</li>
                      <li style={{marginLeft:'50px', fontWeight:'bold',marginTop:'100px'}} className={"liEducation"}>2005 - 2009</li>
                      <li  className={"liEducation"}>Bachelor degree in Computer Science</li>
                      <li style={{marginLeft:'50px', fontWeight:'bold'}} className={"liEducation"}>2009 - 2010</li>
                      <li  className={"liEducation"}>Specialist degree in Computer Scienc</li>
                      <li style={{fontWeight:'bold', marginTop:'100px'}} className={"liEducation"}>English: Pre - Intermidiate</li>
                  </ul>
              </div>
              <div className={"photoAboutMe"}>
                      <img  src={"photoAboutMe.png"}/>
              </div>
              <div className={"resume"}>
                  <text className={"textResume"}>RESUME</text>
                  <div className={"containerTextResume"}>
                      <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</text>
                  </div>
                  <button className={"buttonDownloadResume"}>
                      <text>DOWNLOAD RESUME</text>
                  </button>
                  <img  src={"resumeContainer.png"}/>
              </div>
      </div>
          <div className={"containerSkills"}>
              <div className={"skillsProfExperience"}>PROFESSIONAL EXPERIENCE</div>
              <div className={"skillsProfExperDescription"}>
                      <ul className={"ulProf"}>
                          <li className={"liProf"}>November 2019 - July 2020, software company “Company”</li>
                          <li className={"liProf"}>ReactJS Developer:</li>
                          <li className={"liProf"}>Development of geolocation service for tracking ships routes and
                              arrival - departure time.</li>
                          <li className={"liProf"}>React Native Developer:</li>
                          <li className={"liProf"}>Development of social network experience exchange of sportsman
                              and scouts.</li>
                          <li className={"liProf"}>May 2019 - November 2019, software company “Company”</li>
                          <li className={"liProf"}>IOS Developer:</li>
                          <li className={"liProf"}>Development of mobile applications for social networks
                              (programming client API and user interface).</li>
                          <li className={"liProf"}>Development of e-commerce application for private entrepreneurs
                              (online store, mobile platform for finding services and customers)</li>
                      </ul>
              </div>
              <div className={"skillsCourseSql"}>
                  <p>COURSE SQL</p>
                  <a href="#certificateSQL">
                      <img className={"certificateLogo"} src={"certificateSQL.png"}/>
                  </a>
              </div>
              <div className={"skillsCourseSqlDescription"}>
                  <ul className={"ulCourse"}>
                      <li className={"liCourse"}>13.09.2020 - 21.10.2020 Course Sql </li>
                      <li className={"liCourse"}>Выборка данных</li>
                      <li className={"liCourse"}>Сортировка выбранных данных</li>
                      <li className={"liCourse"}>Фильтрация данных</li>
                      <li className={"liCourse"}>Расширенная фильтрация данных</li>
                      <li className={"liCourse"}>Использование метасимволов для фильтрации</li>
                      <li className={"liCourse"}>Создание вычисляемых полей</li>
                      <li className={"liCourse"}>Итоговые данные</li>
                      <li className={"liCourse"}>Использование подзапросов</li>
                      <li className={"liCourse"}>Объединение таблиц</li>
                      <li className={"liCourse"}>Создание расширенных объединений</li>
                      <li className={"liCourse"}>Комбинированные запросы</li>
                      <li className={"liCourse"}>Добавление данных</li>
                      <li className={"liCourse"}>Обновление и удаление данных</li>
                      <li className={"liCourse"}>Создание таблиц и работа с ними</li>
                      <li className={"liCourse"}>Работа с хранимыми процедурами</li>
                      <li className={"liCourse"}>Обработка транзакций</li>
                      <li className={"liCourse"}>Использование курсоров</li>
                  </ul>
              </div>
              <div className={"skillsTechnologies"}>TECHNOLOGIES</div>
              <div className={"skillsTechnologDescription"}>
                  <ul className={"ulTech"}>
                      <li className={"liTech"}>Objective-C:</li>
                      <li className={"liTech"}>AutoLayout</li>
                      <li className={"liTech"}>UIkit</li>
                      <li className={"liTech"}>Swift:</li>
                      <li className={"liTech"}>Alomofire</li>
                      <li className={"liTech"}>UIkit</li>
                      <li className={"liTech"}>AutoLayout</li>
                      <li className={"liTech"}>FireBase</li>
                      <li className={"liTech"}>Push Notifications</li>
                      <li className={"liTech"}>React Native/ReactJS:</li>
                      <li className={"liTech"}>Redux</li>
                  </ul>
              </div>
              <div className={"skillsDevTools"}>DEVELOPMENT TOOLS</div>
              <div className={"skillsDevToolsDescription"}>
                  <ul className={"ulDev"}>
                      <li className={"liDev"}>Xcode</li>
                      <li className={"liDev"}>Xcode development tools</li>
                      <li className={"liDev"}>Cocoapods</li>
                      <li className={"liDev"}>Git (SourceTree, GitHub Desktop, Git Smart)</li>
                      <li className={"liDev"}>WebStorm</li>
                      <li className={"liDev"}>Visual Studio Code</li>
                      <li className={"liDev"}>Postman</li>PostgreSQL
                      <li className={"liDev"}>PostgreSQL</li>
                      <li className={"liDev"}>SQL Server Management Studio</li>
                  </ul>
              </div>
              <div className={"testimonials"}>
                  <img  className={"testimonialsPhoto1"} src={"logoPhoto1.png"}/>
                  <div className={"containerTextTestimonials"}>
                      <text>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </text>
                  </div>
                  <div className="containerPagination">
                      <a href="#"><span className={"activePagination"}></span></a>
                      <a href="#"><span style={{marginLeft:'20px'}} className={"circlePagination"}></span></a>
                  </div>
              </div>
          </div>
          <div className={"containerPortfolio"}>
              <div className={"portfolio"}>
                  <div className={"containerTextPortfolio"}>
                      <p style={{fontWeight:'bold', fontSize:'30px'}}>PORTFOLIO</p>
                      <text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </text>
                  </div>
              </div>
              <div className={"portfolioGreenHorn"}>
                  <a href="#portfolioGreenHorn">
                      <img src={"greenHorn.png"}/>
                  </a>
              </div>
              <div className={"portfolioLLOOK"}>
                  <a href="#portfolioLLOOK">
                      <img src={"llok.png"}/>
                  </a>
              </div>
              <div className={"portfolioHublish"}>
                  <a href="#portfolioHublish">
                      <img src={"hublish.png"}/>
                  </a>
              </div>
              <div className={"portfolioDigibarber"}>
                  <a href="#portfolioDigibarber">
                      <img src={"digibarber.png"}/>
                  </a>
              </div>
              <div className={"portfolioEcoKos"}>
                  <a href="#portfolioEcoKos">
                      <img src={"organic.png"}/>
                  </a>
              </div>
              <div className={"portfolioGalBud"}>
                  <a href="#portfolioGalBud">
                      <img src={"galBud.png"}/>
                  </a>
              </div>
          </div>
          <div className={"containerContact"}>
              <div className={"contactMe"}>
                  <ul className={"ulContactMe"}>
                      <li style={{color:'white', fontSize:'xx-large'}} className={"liContactMe"}> CONTACT ME</li>
                      <li style={{marginTop:'20px'}} className={"liContactMe"}>
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      </li>
                      <li style={{marginTop:'20px'}} className={"liContactMe"}>122 33rd Street East</li>
                      <li className={"liContactMe"}>Saskatoon, SK</li>
                      <li style={{marginTop:'20px'}} className={"liContactMe"}><text style={{color:'white'}}>Email:   </text> info@gmail.com</li>
                      <li className={"liContactMe"}><text style={{color:'white'}}>Phone:  </text>Phone: 1-306-222-2323</li>
                      <li className={"liContactMe"}><text style={{color:'white'}}>Skype:  </text> InfoSkype</li>
                  </ul>
              </div>
              <div className={"contactMeForm"}>
                  <form>
                      <label htmlFor="text">Name*</label>
                      <input type="text" name="name"/>
                        <label>Email*</label>
                      <input type="email" name="email"/>
                        <label>Your message*</label>
                      <textarea name="message" rows="10" ></textarea>
                      <button className={"buttonForm"} type="submit">CONTACT ME</button>
                  </form>
              </div>
              <div className={"foot"}>
                  <div style={{marginBottom:'30px', marginTop:'50px'}}>COPYRIGHT 2022 BUILD WITH PASSION</div>
                  <a href="#linkedIn">
                      <img src={"photolinkedin.png"}/>
                  </a>
                  <a href="#facebook">
                      <img style={{marginLeft:'10px'}} src={"facebookIcon.png"}/>
                  </a>
                  <a href="#twitter">
                      <img style={{marginLeft:'10px'}} src={"twitterIcon.png"}/>
                  </a>
              </div>
          </div>
      </div>


  )
}

export default App;
