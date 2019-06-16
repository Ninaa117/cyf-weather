import React, { Component } from "react";
import "./App.css";

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
            <img src="http://placekitten.com/g/200/300" />
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
