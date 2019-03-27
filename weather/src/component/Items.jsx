import React, { Component } from "react";
import { Card, Icon, Container, Image } from "semantic-ui-react";

const Items = props => {
  return (
    <Container>
      <Card.Group itemsPerRow={3}>
        {props.promis.map(e => {
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
                    src={
                      "http://openweathermap.org/img/w/" +
                      e.weather[0].icon +
                      ".png"
                    }
                    alt="Weather icon"
                  />
                  <h1> {e.weather[0].description}</h1>
                </a>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </Container>
  );
};

export default Items;
