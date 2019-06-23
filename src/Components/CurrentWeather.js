import React, { Component } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

const CurrentWeather = props => {
  const weather = props.data.list[0];
  console.log(weather);

  return (
    <div className="mainDisplay">
      {/* {weather.main.temp} */}
      <img src={partlycloudy} alt="cloudy icon" className="centerImage" />
      <p>Overcast clouds</p>
      <p id="Temp">
        Temperature {weather.main.temp_min} °C to {weather.main.temp_max} °C
      </p>
      <p>
        Humidity {weather.main.humidity} % Pressure {weather.main.pressure}
      </p>
    </div>
  );
};

export default CurrentWeather;
