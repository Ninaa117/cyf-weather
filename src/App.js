import React, { Component } from "react";


import "./App.css";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather"
import Forecast from "./Components/Forecast"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <main className="app__main">

          <Search />
          <CurrentWeather />
          <Forecast />
        
        </main>
      </div>
    );
  }
}

export default App;
