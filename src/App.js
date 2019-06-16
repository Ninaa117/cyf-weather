import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header" />
        <main className="app__main">
          <div className="searchBox">
            {/* <p className="displayText">PlaceHolder</p> */}
            <input placeholder="Type In City Name" className="searchBar" />
            <button className="findWeather">Find weather</button>
          </div>

          <div className="mainDisplay">
            <img src={storm} alt="storm icon" className="centerImage" />
            <p>Overcast clouds</p>
            <p>Temperature 10' to 11C</p>
            <p>Humidity 78% Pressure 1008.48</p>
            <div className="bottomRow">
              <div>
                <p>03:00 </p>
                <img src={clear} alt="clear icon" />
                <p>8C</p>
              </div>
              <div>
                <p>06:00 </p>
                <img src={clear} alt="clear icon" />
                <p>9C</p>
              </div>
              <div>
                <p>09:00 </p>
                <img src={clear} alt="clear icon" />
                <p>14C</p>
              </div>
              <div>
                <p>12:00 </p>
                <img src={clear} alt="clear icon" />
                <p>17C</p>
              </div>
              <div>
                <p>15:00 </p>
                <img src={clear} alt="clear icon" />
                <p>18C</p>
              </div>
              <div>
                <p>18:00 </p>
                <img src={clear} alt="clear icon" />
                <p>16C</p>
              </div>
              <div>
                <p>21:00 </p>
                <img src={clear} alt="clear icon" />
                <p>13C</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
