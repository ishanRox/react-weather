import React, { Component } from "react";

const Titles = () => {
  return (
    <div className="ui two column grid container">
      <div class="row">
        <div class="olive column">
          {" "}
          <div class="ui raised segment">
            {" "}
            <h1 style={{ color: "black" }}>Weather finder For cities</h1>
          </div>
        </div>
        <div class="blue column">
          {" "}
          <div class="ui raised segment">
            {" "}
            <h2 style={{ color: "black" }}>
              Find all information about Weather{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titles;
