import React from "react";

import './App.css';

/*<div className={"containerProfExperience backgroundColorWhite"}>
    <div className={"profExp"}>
        PROFESSIONAL EXPERIENCE
    </div>
    <div className={"profExpDescribe"}>
        <ul className={"ulProf"}>
            <li className={"liProfTitle"}>November 2019 - July 2020, software company “Company”</li>
            <li className={"liProfDev"}>ReactJS Developer:</li>
            <li className={"liProfDescription"}>Development of geolocation service for tracking ships routes and
                arrival - departure time.</li>
            <li className={"liProfDev"}>React Native Developer:</li>
            <li className={"liProfDescription"}>Development of social network experience exchange of sportsman
                and scouts.</li>
            <li className={"liProfTitle"}>May 2019 - November 2019, software company “Company”</li>
            <li className={"liProfDev"}>IOS Developer:</li>
            <li className={"liProfDescription"}>Development of mobile applications for social networks
                (programming client API and user interface).</li>
            <li className={"liProfDescription"}>Development of e-commerce application for private entrepreneurs
                (online store, mobile platform for finding services and customers)</li>
            <li className={"liProfTitle"}>August 2020 - October 2020, participated in a test task at the academy "SoftServe"</li>
            <li className={"liProfDev"}>SQL Server Management Studio:</li>
            <li className={"liProfDescription"}>Data Base in market</li>
            <li className={"liProfTitle"}>September - October 2020 SQL.ua Data Academy Online Marathon
                <a href={""}>(Course)</a>.
            </li>
            <li className={"liProfDev"}>Postgres:</li>
            <li className={"liProfDescription"}>Basic knowledge SQL</li>
            <li className={"liProfTitle"}> 2021 - until today freelance web develop</li>
            <li className={"liProfDev"}>React Js:</li>
            <li className={"liProfDescription"}>Programming user interface</li>
        </ul>
    </div>
</div>*/

const AppDinamic = () => {

    return (
        <div  className={"wrapper"}>
            <div className={"containerHome"}>
                <img src={"photoHeader.png"} className={"hundred"}/>
            </div>
            <div className={"containerProfExperience backgroundColorWhite"}>
                <div className={"profExperience"}>
                    PROFESSIONAL EXPERIENCE
                </div>
                <div className={"organic"}>
                    <img src={"organic.png"} className={"imgProfExp"}/>
                </div>
                <div className={"profExpDescribeOrganic"}>
                    <ul className={"ulProf"}>
                        <li className={"liProfTitle"}>WEB DEVELOPER</li>
                        <li  className={"liProfDescription"}>freelance web develop / July 2022  </li>
                        <li><button className={"buttonProfExp"}>MORE 1 YEAR</button></li>
                        <li><img src={"line.png"}/></li>
                        <li className={"liProfDesc"}>Programming web site </li>
                    </ul>
                </div>
                <div className={"freelance"}>
                    <img src={"organic.png"} className={"imgProfExp"}/>
                </div>
                <div className={"profExpDescribeFreelance"}>
                    <ul className={"ulProf"}>
                        <li className={"liProfTitle"}>WEB DEVELOPER</li>
                        <li  className={"liProfDescription"}>Freelance web develop / 2021 - until today  </li>
                        <li><button className={"buttonProfExp"}>MORE 1 YEAR</button></li>
                        <li><img src={"line.png"}/></li>
                        <li className={"liProfDesc"}>Programming user interface</li>
                    </ul>
                </div>
                <div className={"sqlCertificate"}>
                    <img src={"hublish.png"} className={"imgProfExp"}/>
                </div>
                <div className={"profExpDescribeSql"}>
                    <ul className={"ulProf"}>
                        <li className={"liProfTitle"}> ONLINE MARATHON</li>
                        <li  className={"liProfDescription"}> SQL.ua Data Academy / September - October 2020</li>
                        <li><button className={"buttonProfExp"}>1 MONTH</button></li>
                        <li><img src={"line.png"}/></li>
                        <li className={"liProfDesc"}>Basic knowledge SQL</li>
                    </ul>
                </div>
                <div className={"greenHorn"}>
                    <img src={"greenHorn.png"} className={"imgProfExp"}/>
                </div>
                <div className={"profExpDescribeGreenHorn"}>
                    <ul className={"ulProf"}>
                        <li className={"liProfTitle"}> REACT NATIVE DEVELOPER</li>
                        <li  className={"liProfDescription"}>Software company "STAR Apps" / November 2019 - July 2020</li>
                        <li><button className={"buttonProfExp"}>6 MONTH</button></li>
                        <li><img src={"line.png"}/></li>
                        <li className={"liProfDescription"}>Development of social network experience exchange of sportsman
                            and scouts.</li>
                    </ul>
                </div>
                <div className={"applicationIOS"}>
                    <div className={"applicationIOSGap"}>
                        <img src={"hublish.png"} className={"imgProfExp"}/>
                    </div>
                    <div className={"applicationIOSGap"}>
                        <img src={"digibarber.png"}className={"imgProfExp"}/>
                    </div>
                    <div className={"applicationIOSGap"}>
                        <img src={"llok.png"} className={"imgProfExp"}/>
                    </div>
                </div>
                <div className={"profExpDescribeApplicationIOS"}>
                    <ul className={"ulProf"}>
                        <li className={"liProfTitle"}> IOS DEVELOPER</li>
                        <li  className={"liProfDescription"}>Software company "STAR Apps" / May 2019 - November 2019</li>
                        <li><button className={"buttonProfExp"}>6 MONTH</button></li>
                        <li><img src={"line.png"}/></li>
                        <li className={"liProfDescription"}>Development of mobile applications for social networks
                            (programming client API and user interface).</li>
                        <li className={"liProfDescription"}>Development of e-commerce application for private entrepreneurs
                            (online store, mobile platform for finding services and customers)</li>
                    </ul>
                </div>
            </div>
            <div className={"containerMyEducation"}>
                <div className={"photoMyEducation"}>
                    <img src={"photoAboutMe.png"} className={"hundred"}/>
                </div>
                <div className={"myEducationInfo"}>
                    <ul className={"ulEducation"}>
                        <li className={"liEducTitle"}>MY EDUCATION</li>
                        <li  className={"liEducation"}> State University</li>
                        <li  className={"liEd"}>Department of Information Control Systems and Technologies</li>
                        <li className={"liEducation"}>2005 - 2009</li>
                        <li  className={"liEd"}>Bachelor degree in Computer Science</li>
                        <li  className={"liEducation"}>2009 - 2010</li>
                        <li  className={"liEd"}>Specialist degree in Computer Scienc</li>
                        <li  className={"liEducation"}>English</li>
                        <li className={"liEd"}>Pre - Intermidiate</li>
                        <li><button className={"buttonEducation"}>DOWNLOAD RESUME</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"containerSkills backgroundColorWhite"}>
                <div className={"technologies"}>TECHNOLOGIES</div>
                <div className={"techDescrip1"}>
                    <ul className={"ulTech"}>
                        <li className={"liTech"}>Objective-C:</li>
                        <li>AutoLayout</li>
                        <li>UIkit</li>
                    </ul>
                </div>
                <div className={"techDescrip2"}>
                    <ul className={"ulTech"}>
                        <li className={"liTech"}>Swift:</li>
                        <li>Alomofire</li>
                        <li>UIkit</li>
                        <li>AutoLayout</li>
                        <li>FireBase</li>
                        <li>Push Notifications</li>
                    </ul>
                </div>
                <div className={"techDescrip3"}>
                    <ul className={"ulTech"}>
                        <li className={"liTech"}>React Native:</li>
                        <li>Redux</li>
                        <li className={"liTech"}>ReactJS:</li>
                        <li>Redux</li>
                        <li>Grids</li>
                    </ul>
                </div>
                <div className={"devTools"}>DEVELOPMENT TOOLS</div>
                <div className={"devToolsDescrip1"}>
                    <ul className={"ulDev"}>
                        <li className={"liDev"}>Xcode</li>
                        <li className={"liDev"}>Xcode development tools</li>
                        <li className={"liDev"}>Cocoapods</li>
                    </ul>
                </div>
                <div className={"devToolsDescrip2"}>
                    <ul className={"ulDev"}>
                        <li className={"liDev"}>Git (SourceTree, GitHub Desktop, Git Smart)</li>
                        <li className={"liDev"}>WebStorm</li>
                        <li className={"liDev"}>Visual Studio Code</li>
                        <li className={"liDev"}>Postman</li>
                    </ul>
                </div>
                <div className={"devToolsDescrip3"}>
                    <ul className={"ulDev"}>
                        <li className={"liDev"}>PostgresSQL</li>
                        <li className={"liDev"}>SQL Server Management Studio</li>
                    </ul>
                </div>
            </div>
            <div className={"containerTestimonials"}>
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
                    <button className={"buttonTestimonials"}>GO TO WEB SITE</button>
                </div>
            </div>
            <div className={"portfolioContent backgroundColorWhite"}>
                <div className={"portfolioDescription"}>
                    <p>PORFOLIO</p>
                    Development of geolocation service for tracking ships routes and
                    arrival - departure time.
                    Development of social network experience exchange of sportsman
                    and scouts.
                    Development of mobile applications for social networks
                    (programming client API and user interface).
                    Development of e-commerce application for private entrepreneurs
                    (online store, mobile platform for finding services and customers)
                </div>
                <div className={"hublish"}>
                    <img src={"hublish.png"} className={"imgPortfolioCircle"}/>
                </div>
                <div className={"llook"} >
                    <img src={"llok.png"} className={"imgPortfolioCircle"}/>
                </div>
                <div className={"greenHorn"}>
                    <img src={"greenHorn.png"} className={"imgPortfolioCircle"}/>
                </div>
                <div className={"digibarber"}>
                    <img src={"digibarber.png"} className={"imgPortfolioCircle"}/>
                </div>
                <div className={"organic"}>
                    <img src={"organic.png"} className={"portfolioOrganicImg"}/>
                </div>
            </div>
            <div className={"containerContactMe"}>
                <div className={"contactMe"}>
                    <ul className={"ulContactMe"}>
                        <li className={"liContactMe titleText"}> CONTACT ME</li>
                        <li className={"liContactMe titleText"}>
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </li>
                        <li className={"liContactMe"}>122 33rd Street East</li>
                        <li className={"liContactMe titleText"}>Saskatoon, SK</li>
                        <li  className={"liContactMe"}><text >Email:   </text> info@gmail.com</li>
                        <li className={"liContactMe"}><text >Phone:  </text>Phone: 1-306-222-2323</li>
                        <li className={"liContactMe"}><text >Skype:  </text> InfoSkype</li>
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
            </div>
            <div className={"containerFoot"}>
                <div className={"foot"}>
                    <div >COPYRIGHT 2022 BUILD WITH PASSION</div>
                    <a href="#linkedIn">
                        <img src={"photolinkedin.png"} className={"socialIcon"}/>
                    </a>
                    <a href="#facebook">
                        <img  src={"facebookIcon.png"} className={"socialIcon"}/>
                    </a>
                    <a href="#twitterIcon">
                        <img  src={"twitterIcon.png"} className={"socialIcon"}/>
                    </a>
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
