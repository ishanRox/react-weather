import React from "react";
import { Header, Segment } from "semantic-ui-react";
import "./TitleCss.css";

const Title = () => {
  return (
    <div className="TitleCss">
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
