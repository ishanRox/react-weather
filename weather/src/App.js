import React, { Component } from "react";
import "./App.css";
import JsonData from "./res/Step1.json";
import axios from "axios";
import { Card, Icon, Container, Image } from "semantic-ui-react";
import { Header, Segment } from "semantic-ui-react";

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
        <div style={{ marginBottom: "40px" }}>
          <Header as="h2" attached="top" textAlign="center">
            ALL about your city Weather
          </Header>
          <Segment attached textAlign="center">
            Current weather and forecasts in your city
          </Segment>
        </div>
        <Container>
          <Card.Group itemsPerRow={3}>
            {this.state.resolved.map(e => {
              return (
                <Card key={e.id}>
                  <Card.Content>
                    <Card.Header>CityName :{e.name + ""}</Card.Header>
                    <Card.Meta>id:{e.id}</Card.Meta>
                    <Card.Description>
                      Description: {e.weather[0].description}
                      temp:<h1>Temperature :{e.main.temp} &#8451;</h1>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <img
                        id={e.weather[0].icon}
                        src="http://openweathermap.org/img/w/10d.png"
                        alt="Weather icon"
                      />
                    </a>
                  </Card.Content>
                </Card>
              );
            })}
          </Card.Group>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
