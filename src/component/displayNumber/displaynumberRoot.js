import React, { Component } from "react";
import DisplayNumber from "./displaynumber";

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>DisplayNumber Root</h1>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    );
  }
}

export default DisplayNumberRoot;
