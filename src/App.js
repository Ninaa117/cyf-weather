import React, { Component } from "react";

import "./App.css";
import FakeWeather from "./Data/FakeWeather.json";
import Search from "./Components/Search";
import CurrentWeather from "./Components/CurrentWeather";
import Forecast from "./Components/Forecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {}
    };
  }

  getAPI() {
    return fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=3bdaf57d68dcfe7493f42f62016c4e03"
    ).then(res => res.json());
  }
  render() {
    if (this.state.weatherData && this.state.weatherData.list) {
      return (
        <div className="app">
          <main className="app__main">
            <Search />
            <CurrentWeather data={this.state.weatherData} />
            {/* <Forecast data={this.state.weatherData} /> */}
          </main>
        </div>
      );
    }

    return <div />;
  }

  componentDidMount() {
    this.getAPI().then(result => {
      this.setState({
        weatherData: result
      });
    });

    // this.interval = setInterval(
    //   () => this.setState({ time: Date.now() }),
    //   1000
    // );
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);

  //   );
  // }
}

export default App;
