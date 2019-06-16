import React, { Component } from "react";

const Search = () =>  {

    return (
      <div className="searchBox">
        {/* <p className="displayText">PlaceHolder</p> */}
        <input placeholder="Type In City Name" className="searchBar" />
        <button className="findWeather">Find weather</button>
      </div>
    );
}


export default Search;
