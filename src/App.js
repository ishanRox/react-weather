import React, { Component } from "react";
import Title from "./component/Title/Title";
import Items from "./component/Item/Items";
import getWeather from "./Api/GetWeather";
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
        cityInfoList: await getWeather()
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
