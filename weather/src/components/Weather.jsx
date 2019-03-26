import React, { Component } from "react";

const Weather = props => {
  return (
    <div className="ui grid container">
      <ul
        style={{ marginTop: "20px" }}
        className="ui divided very relaxed list"
      >
        {props.weatherInfo.map(e => {
          return (
            <li style={{ fontSize: "2em" }} key={e[0]}>
              {e[0]}
              {e[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Weather;
