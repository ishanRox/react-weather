import React, { Component } from "react";
import Title from "./component/Title/Title";
import Items from "./component/Items";
import getCityInfoList from "../src/Api/Reqest";
import generateCommaString from "../src/Utils/ArrayToWord";
import JsonData from "../src/Assets/Step1.json";
import { Loader } from "semantic-ui-react";

class App extends Component {
  state = {
    isCityInfoLoaded: false,
    cityInfoList: []
  };

  componentDidMount = async () => {
    try {
      this.setState({
        isCityInfoLoaded: true,
        cityInfoList: await getCityInfoList(generateCommaString(JsonData))
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Title />
        {this.state.isCityInfoLoaded ? (
          <Items cityInfoList={this.state.cityInfoList} />
        ) : (
          <Loader active inline="centered" />
        )}
      </React.Fragment>
    );
  }
}

export default App;
