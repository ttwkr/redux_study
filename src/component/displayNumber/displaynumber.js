import React, { Component } from "react";

class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h1>Dispaly Number</h1>
        <input type="text" value="0" readOnly></input>
      </div>
    );
  }
}

export default DisplayNumber;
