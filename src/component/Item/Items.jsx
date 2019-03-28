import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";

class Items extends Component {
  render() {
    const generateCardList = props => {
      const cardList = props.cityInfoList.map(e => {
        return (
          <Card key={e.id}>
            <Card.Content>
              <Card.Header>CityName :{e.name + ""}</Card.Header>
              <Card.Meta>id:{e.id}</Card.Meta>
              <Card.Description>
                Description: {e.weather[0].description}
                <h1>Temperature :{e.main.temp} &#8451;</h1>
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <img
                id={e.weather[0].icon}
                src={
                  "http://openweathermap.org/img/w/" +
                  e.weather[0].icon +
                  ".png"
                }
                alt="Weather icon"
              />
              <h1> {e.weather[0].description}</h1>
            </Card.Content>
          </Card>
        );
      });

      return cardList;
    };

    return (
      <Container>
        <Card.Group itemsPerRow={3}>{generateCardList(this.props)} </Card.Group>
      </Container>
    );
  }
}

export default Items;
