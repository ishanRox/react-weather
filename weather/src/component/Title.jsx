import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

const Title = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Header as="h2" attached="top" textAlign="center">
        ALL about your city Weather
      </Header>
      <Segment attached textAlign="center">
        Current weather and forecasts in your city
      </Segment>
    </div>
  );
};

export default Title;
