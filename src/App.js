import React, { Component } from "react";
import "./App.css";
import storm from "./img/weather-icons/storm.svg";

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
            <img src={storm} alt="storm icon" className="centerImage"/>
            <p>Overcast clouds</p>
            <p>Humidity 78%</p>
            <p>More stuff</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
