import React from "react";

import './AppDinamic.css';


const AppDinamic = () => {

    return (
        <div  className={"wrapper"}>
            <div className={"containerHome"}>
                <img src={"photoHeader.png"}/>
            </div>
            <div className={"containerAboutMe"}>
                <div className={"aboutMe_GoalsValuesHobbies aboutMeGoals"}>
                    <p className={"aboutMe"}>GOALS</p>
                    "Life is like a combination lock. Your job is to find the numbers,
                    in the right orders, so you can have anything you want." <p>Brian Tracy </p>
                </div>
                <div className={"aboutMe_GoalsValuesHobbies aboutMeValues"}>
                    <p className={"aboutMe"}>VALUES</p>
                    I enjoy my work
                </div>
                <div className={"aboutMe_GoalsValuesHobbies aboutMeHobbies"}>
                    <p className={"aboutMe"}>HOBBIES</p>
                    I love board games
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
            <div className={"portfolioContent"}>
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

