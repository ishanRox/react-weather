import React, { Component } from "react";
import myJson from "./components/Step1.json";
import Titles from "./components/Titles";
import axios from "axios";
import { Dimmer, Loader, Image, Segment, Container } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
const key = "8de0ee46b8d4346093951d037f2c97d1";
var cities = "";

class App extends Component {
  state = { response: null };

  getCityCodes = () => {
    const Arraya = myJson.List.map(e => {
      return { code: e.CityCode, text: e.CityName, key: e.CityCode };
    });

    return Arraya;
  };

  componentDidMount = () => {
    this.getWeather(this.getCityCodes());
  };

  getWeather = async e => {
    let data = null;
    const city = e;
    let response = null;

    city.forEach(element => {
      cities = cities + "," + element.code + "";
    });
    try {
      response = await axios.get(
        `https://api.openweathermap.org/data/2.5/group?units=metric&id=${cities
          .substring(1)
          .replace(/"/g, "")}&appid=${key}`
      );
      this.setState({
        response: response
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let x = null;
    if (this.state.response) {
      x = this.state.response.data.list;
    }
    return (
      <div className=" ">
        <Titles />
        {x !== null ? (
          <Container>
            {x.map(e => {
              return (
                <Container>
                  <Segment>
                    <ul>
                      <Segment>
                        <li>
                          Name:<h1>{e.name}</h1>
                        </li>{" "}
                      </Segment>
                      <Segment>
                        {" "}
                        <li>
                          temp:<h1>{e.main.temp}</h1>
                        </li>
                      </Segment>
                      <Segment>
                        <li>
                          description:<h1>{e.weather[0].description}</h1>
                        </li>
                      </Segment>
                      <Segment>
                        <li>
                          id:<h1>{e.id}</h1>
                        </li>
                      </Segment>
                    </ul>
                  </Segment>
                </Container>
              );
            })}
          </Container>
        ) : (
          <h1>not okkkk</h1>
        )}
      </div>
    );
  }
}
export default App;
