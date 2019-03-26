import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

const Titles = () => {
  return (
    <React.Fragment>
      <Container>
        <Grid columns={2}>
          <Grid.Column floated="left" color="olive">
            <Segment>
              {" "}
              <h4 style={{ color: "black" }}>Weather finder For cities</h4>
            </Segment>
          </Grid.Column>
          <Grid.Column floated="right" color="blue">
            <Segment>
              {" "}
              <h4 style={{ color: "black" }}>
                Find all information about Weather{" "}
              </h4>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Titles;
