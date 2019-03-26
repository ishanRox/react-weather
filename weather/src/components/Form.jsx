import React, { Component } from "react";

const Form = props => {
  return (
    <div className="ui  column grid  container">
      <div className="row">
        <div className="black column">
          {" "}
          <form onSubmit={props.getWeather}>
            <div className="ui  two column grid  ">
              <div className="column">
                <div className="ui  two column grid">
                  <div className=" column">
                    <div className="ui corner labeled input">
                      {" "}
                      <input type="text" name="city" placeholder="city" />
                    </div>
                  </div>
                  <div className=" column">
                    {" "}
                    <div className="ui corner labeled input">
                      <input type="text" name="country" placeholder="country" />
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="column">{props.children}</div>
              <div className="fluid column ">
                {" "}
                <button
                  style={{ width: "100px!important" }}
                  className="ui primary massive button fluid"
                >
                  submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
