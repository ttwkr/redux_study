import React, { Component } from "react";
import store from "../../store";

class AddNumber extends Component {
  state = {
    size: 1
  };
  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={() => {
            store.dispatch({ type: "INCREMENT", size: this.state.size }); //사이즈 값을 스테이트에 저장한다.
          }}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={event => {
            this.setState({
              size: Number(event.target.value)
            });
          }}
        ></input>
      </div>
    );
  }
}

export default AddNumber;
