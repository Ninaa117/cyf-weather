import React, { Component } from "react";

import "../App.css";
import storm from "../img/weather-icons/storm.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "../img/weather-icons/partlycloudy.svg";

const Forecast= () =>  {

    return ( 
      
            <div className="bottomRow">
      <div>
    <p>03:00 </p>
                <img src={partlycloudy} alt="cloudy icon" />
                <p>8°C</p>
              </div>
              <div>
                <p>06:00 </p>
                <img src={partlycloudy} alt="cloudy icon" />
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
                <img src={partlycloudy} alt="cloudy icon" />
                <p>13C</p>
              </div> 
              </div>

    );

    }

export default Forecast;