import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";
const key = "8de0ee46b8d4346093951d037f2c97d1";

class App extends Component {
  state = {
    weatherInfo: [
      ["temp\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0", null],
      ["humidity\xa0\xa0\xa0\xa0\xa0:\xa0\xa0", null],
      [
        "city\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:\xa0\xa0",
        null
      ],
      ["description\xa0\xa0:\xa0\xa0", null]
    ]
  };
  getWeather = async e => {
    e.preventDefault();
    console.log(e.target.value);
    const city = e.target.city.value;
    const country = e.target.country.value;

    if (city && country) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`
        )
        .then(json => {
          console.log(json.data);
          const data = json.data;
          const { weatherInfo } = this.state;
          weatherInfo[0][1] = data.main.temp;
          weatherInfo[1][1] = data.main.humidity;
          weatherInfo[2][1] = data.name;
          weatherInfo[3][1] = data.weather[0].description;

          console.log(weatherInfo);
          this.setState({ weatherInfo });
        })

        .catch(error => alert("No data found !"));
    } else {
      alert("please fill both !");
    }
  };
  render() {
    return (
      <div className=" " style={{ paddingTop: "10%" }}>
        <Titles />
        <Form getWeather={this.getWeather}>
          {" "}
          <Weather weatherInfo={this.state.weatherInfo} />
        </Form>
      </div>
    );
  }
}

export default App;
