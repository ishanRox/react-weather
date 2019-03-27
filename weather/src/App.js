import React, { Component } from "react";
import "./App.css";
import JsonData from "./res/Step1.json";
import axios from "axios";
import Title from "./component/Title";
import Items from "./component/Items";

const key = "8de0ee46b8d4346093951d037f2c97d1";

class App extends Component {
  state = {
    resolved: []
  };

  getWeather = async () => {
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/group?units=metric&id=${JsonData.List.map(
          e => {
            return e.CityCode;
          }
        ).join(",")}&appid=${key} `
      )
      .then(e => {
        console.log(e.data.list);
        this.setState({ resolved: e.data.list });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    this.getWeather();
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        <Items promis={this.state.resolved} />
      </React.Fragment>
    );
  }
}

export default App;
