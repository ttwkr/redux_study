import React, { Component } from "react";
import store from "../../store";
class DisplayNumber extends Component {
  state = { number: store.getState().number };
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({
        number: store.getState().number
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Dispaly Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}

export default DisplayNumber;
