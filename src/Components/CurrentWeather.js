import React, { Component } from "react";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";


const CurrentWeather = () => {
  return (

          <div className="mainDisplay">
      <img src={partlycloudy} alt="cloudy icon" className="centerImage" />
      <p>Overcast clouds</p>
      <p>Temperature 10°C to 11</p>
      <p>Humidity 78% Pressure 1008.48</p>
    </div>
  );
   
  
};

export default CurrentWeather;