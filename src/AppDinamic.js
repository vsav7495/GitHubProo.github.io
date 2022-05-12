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
                    Life is like a combination lock; your job is to find the numbers,
                    in the right orders, so you can have anything you want. Brian Tracy ”
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

