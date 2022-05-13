import React from "react";

import './AppDinamic.css';


const AppDinamic = () => {

    return (
        <div  className={"wrapper"}>
            <div className={"containerHome"}>
                <img src={"photoHeader.png"}/>
            </div>
            <div className={"containerProfExperience backgroundColorWhite"}>
                <div className={"profExp"}>
                    PROFESSIONAL EXPERIENCE
                </div>
                <div className={"profExpDescribe"}>
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
                        <li className={"liProf"}>08-10 2020 Participated in a test task at the academy Soft Serf</li>
                        <li className={"liProf"}>14.09-21.10 2020 SQL.ua Data Academy Online Marathon(Course).
                            <a href={""}>CERTIFICATE</a>
                        </li>
                        <li> 2021 - until today Freelance web develop in React Js  </li>
                    </ul>
                </div>
            </div>
            <div className={"containerMyEducation"}>
                <div className={"photoMyEducation"}>
                    <img src={"photoAboutMe.png"}/>
                </div>
                <div className={"myEducationInfo"}>
                    <ul className={"ulEducation"}>
                        <li>MY EDUCATION</li>
                        <li  className={"liEducation"}> State University</li>
                        <li  className={"liEducation"}>Department of Information Control Systems and Technologies</li>
                        <li className={"liEducation"}>2005 - 2009</li>
                        <li  className={"liEducation"}>Bachelor degree in Computer Science</li>
                        <li  className={"liEducation"}>2009 - 2010</li>
                        <li  className={"liEducation"}>Specialist degree in Computer Scienc</li>
                        <li  className={"liEducation"}>English: Pre - Intermidiate</li>
                    </ul>
                </div>
            </div>
            <div className={"containerSkillsTestimonials backgroundColorWhite"}>
                <div className={"technologies"}>TECHNOLOGIES</div>
                <div className={"technologiesDescription"}>
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
                <div className={"devTools"}>DEVELOPMENT TOOLS</div>
                <div className={"devToolsDescription"}>
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
                <div className={"testimonialsPhoto"}>
                    <img src={"logoPhoto1.png"} className={"testimonPhoto"}/>
                </div>
                <div className={"testimonialsInfo"}>
                    <div>
                        <text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </text>
                    </div>
                </div>
            </div>
            <div className={"portfolioContent backgroundColorWhite"}>
                <div className={"hublish"}>
                    <img src={"hublish.png"}/>
                </div>
                <div className={"llook"}>
                    <img src={"llok.png"}/>
                </div>
                <div className={"greenHorn"}>
                    <img src={"greenHorn.png"}/>
                </div>
                <div className={"digibarber"}>
                    <img src={"digibarber.png"}/>
                </div>
                <div className={"organic"}>
                    <img src={"organic.png"} className={"portfolioOrganicImg"}/>
                </div>
            </div>
        </div>

    )
}

export default AppDinamic;

/*
"Life is like a combination lock. Your job is to find the numbers,
in the right orders, so you can have anything you want." <p>Brian Tracy </p>
I enjoy my work
I love board games    */
