import React from "react";
import './App.css';

const App = () => {

  return (
      <div className="wrapper">
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
          </div>
          <div className="item aboutMe">aboutMe</div>
          <div className="item resume">resume</div>
          <div className="item portfolio">portfolio</div>
          <div className="item contactMe">contactMe</div>
          <div className="item footer">footer</div>

      </div>
  )
}

export default App;
